import { InputHTMLAttributes } from "react";
import IconDollar from "../Icon/Dollar";
import IconTrash from "../Icon/Trash";
import axios from "axios";
interface Props {
    transactions : any[],
}
import Swal from 'sweetalert2'
import { router } from "@inertiajs/react";


export default function List({ transactions }: Props) {

    const handlePopupDelete = (id : number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                handleDeleteTransaction(id)
                console.log('result : ', result);
            //   Swal.fire( 'Deleted!', 'Your file has been deleted.', 'success' )
            }
          })
    }

    const handleDeleteTransaction = async (id : number) => {
        const res = await axios.delete(`/transaction/${id}`);
        if (res.status == 200) {
            Swal.fire( 'Deleted!', 'Your data has been deleted.', 'success' )
            router.reload();
        }
        console.log('resp : ', res);


    }

    return (
        transactions.map((item, key) => (
            <div key={key} className="flex justify-between py-3 px-6">
                <div>
                    <div className="flex space-x-3">
                        <div>
                            <IconDollar/>
                        </div>
                        <div className="flex flex-col">
                            <span>{item.type.name} - {item.category.name}</span>
                            <span className="text-gray-500 text-sm">{item.amount} - {item.date}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => handlePopupDelete(item.id)} className="hover:bg-black/10 p-2 rounded-full transition-all">
                        <IconTrash/>
                    </button>
                </div>
            </div>
        ))
    );
}
