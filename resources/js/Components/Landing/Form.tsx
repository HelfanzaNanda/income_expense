import { InputHTMLAttributes } from "react";

export default function Form({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <>
            <div className='grid grid-cols-2 space-x-2 mb-3'>
                <div>
                    <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 ">Tipe</label>
                    <select id="type" name='type' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected>Pilih Tipe</option>
                        <option value="US">United States</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Kategori</label>
                    <select id="category" name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected>Pilih Kategori</option>
                        <option value="US">United States</option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-2 space-x-2 mb-3'>
                <div>
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Amount</label>
                    <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Amount" required />
                </div>
                <div>
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 ">Date</label>
                    <input type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Amount" required />
                </div>
            </div>

            <button type="button" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">Create</button>
        </>
    );
}
