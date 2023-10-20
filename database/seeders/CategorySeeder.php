<?php

namespace Database\Seeders;


use App\Models\Category;
use App\Models\Type;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'type' => 'Pengeluaran',
                'categories' => [
                    'Shopping', 'Makan', 'Kost', 'Bensin', 'Belanja Bulanan'
                ]
            ],
            [
                'type' => 'Pemasukan',
                'categories' => [
                    'Gaji', 'Freelancer', 'Lemburan', 'Bonus'
                ]
            ],
        ];

        foreach ($data as $item) {
            $type = Type::query()->where("name", $item['type'])->first();
            if ($type) {
                foreach ($item['categories'] as $category) {
                    Category::create([
                        'type_id' => $type->id,
                        'name' => $category,
                    ]);
                }
            }
        }
    }
}
