<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Category;
use App\Models\Transaction;
use App\Models\Type;
use App\Providers\RouteServiceProvider;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class LandingController extends Controller
{
    public function home()
    {

        $qry = Transaction::query()->whereRelation("type", "name", "Pemasukan");
        $total_income = $qry->sum("amount");
        $income = $qry->get();
        $groups = $income->groupBy("category_id");
        $incomes = [];
        foreach ($groups as $group) {
            $item = [
                'label' => $group->first()->category->name,
                'value' => $group->sum("amount"),
            ];
            array_push($incomes, $item);
        }
        // $groups->each(function($group) {
        // });

        $data_income = [
            'total' => $total_income,
            // 'groups' => $groups,
            'data' => $incomes,
        ];

        $qry = Transaction::query()->whereRelation("type", "name", "Pengeluaran");
        $total_expense = $qry->sum("amount");
        $expense = $qry->get();
        $groups = $expense->groupBy("category_id");
        $expenses = [];
        foreach ($groups as $group) {
            $item = [
                'label' => $group->first()->category->name,
                'value' => $group->sum("amount"),
            ];
            array_push($expenses, $item);
        }
        // $expense = $groups->each(function($group) {
        // });

        $data_expense = [
            'total' => $total_expense,
            // 'groups' => $groups,
            'data' => $expenses,
        ];

        $chart = [
            'data_income' => $data_income,
            'data_expense' => $data_expense,
        ];


        // dd($chart);







        return Inertia::render('Landing', [
            'types' => Type::query()->get(),
            'categories' => Category::query()->get(),
            'transactions' => Transaction::query()->with(['type:id,name', 'category:id,name'])->get(),
            'chart' => $chart
        ]);
    }

    public function categories($typeId)
    {
        $data = Category::query()->where("type_id", $typeId)->get();
        return response()->json($data);
    }

    public function transaction (Request $request)
    {

        $params = $request->validate([
            'type_id' => 'required',
            'category_id' => 'required',
            'amount' => 'required',
            'date' => 'required',
        ]);

        Transaction::create($params);
        return response()->json();

    }
    public function deleteTransaction($id)
    {

        $transaction = Transaction::query()->where("id", $id)->first();
        if ($transaction) {
            $transaction->delete();
        }
        return response()->json();

    }
}
