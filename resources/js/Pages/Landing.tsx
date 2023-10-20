import Chart from '@/Components/Landing/Chart'
import Form from '@/Components/Landing/Form'
import List from '@/Components/Landing/List'
import { PageProps } from '@/types';
import { router, useForm } from '@inertiajs/react';
import axios from 'axios';
import React, { FormEventHandler } from 'react'
import { Item } from 'react-donut-chart/dist/DonutChart';
import Swal from 'sweetalert2';

interface Props {
    types : any[],
    transactions : any[],
    chart : {
        data_income : {
            total : number,
            data: Item[]
        },
        data_expense : {
            total : number,
            data: Item[]
        },
    }
}

export default function Landing({types, transactions, chart} : Props) {


    console.log('chart : ', chart);


    const [categories, setCategories] = React.useState([]);

    const { data, setData, post, processing, errors, reset } = useForm({
        type_id: '',
        category_id: '',
        amount: '',
        date: '',
    });

    const handleTypeSelected = async (value : string) => {
        console.log('TYPE : ', value);

        setData('type_id', value);
        const response = await axios.get(`/category/options/${value}`);
        const data = response.data;
        setCategories(data);
        console.log('response : ', response);


    }
    const handleCategorySelected = (value : string) => {
        setData('category_id', value);
    }

    const submit: FormEventHandler = async (e) => {
        e.preventDefault();
        const res = await axios.post(`/transaction`, data);
        if (res.status == 200) {
            router.reload();
            Swal.fire( 'Deleted!', 'create data successfully.', 'success' )
            setData('type_id', '');
            setData('category_id', '');
            setData('amount', '');
            setData('date', '');
        }

        // post(route('transaction'));
    };
  return (
    <div className='bg-slate-200 grid grid-cols-3 space-x-5 p-5 h-screen w-screen'>
        {/* <div className='bg-white rounded-md h-screen p-4'>
            <span className='text-2xl'>Pemasukan</span>
            <div>chart</div>
        </div> */}
        <Chart label='Pemasukan' total={chart.data_income.total} data={chart.data_income.data}/>

        <div className='bg-white rounded-md h-6/6 p-4 shadow-md'>
            <div className='flex flex-col items-center'>
                <span>Monefy</span>
                <span className='text-gray-500 mb-3'>Lacak pendapatan dan pengeluaran Anda</span>
                <span className='text-2xl mb-3'>Total Balance {chart.data_income.total - chart.data_expense.total}</span>
                <span>Try saying: </span>
                <span>Add Income for ₹100 in Category Salary for Monday </span>
            </div>
            <hr className='mt-3 mb-10'/>

            <form onSubmit={submit}>
                <div className='grid grid-cols-2 space-x-2 mb-3'>
                    <div>
                        <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 ">Tipe</label>
                        <select
                            defaultValue={data.type_id} id="type" name='type' required
                            onChange={(e) => handleTypeSelected(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                <option value="" disabled>Pilih Tipe</option>
                                {
                                    types.map((item, key) => (
                                            <option key={key} value={item.id}>{item.name}</option>
                                    ))
                                }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Kategori</label>
                        <select
                            defaultValue={data.category_id} required
                            onChange={(e) => handleCategorySelected(e.target.value)}
                            id="category" name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                <option value="" disabled>Pilih kategori</option>

                                {
                                    categories.map((item, key) => (
                                        <option value={item.id} key={key}>{item.name}</option>
                                    ))
                                }
                        </select>
                    </div>
                </div>
                <div className='grid grid-cols-2 space-x-2 mb-3'>
                    <div>
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Amount</label>

                        <input onChange={(e) => setData("amount", e.target.value)} defaultValue={data.amount}  type="number" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Amount" required />
                    </div>
                    <div>
                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 ">Date</label>
                        <input onChange={(e) => setData("date", e.target.value)} defaultValue={data.date} type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Amount" required />
                    </div>
                </div>

                <button disabled={processing} type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">Create</button>
            </form>

            {/* <Form/> */}

            <div className='overflow-y-auto h-96'>
                <List transactions={transactions}/>
            </div>
            {/* card */}

        </div>

        <Chart label='Pengeluaran' total={chart.data_expense.total} data={chart.data_expense.data}/>
    </div>
  )
}

