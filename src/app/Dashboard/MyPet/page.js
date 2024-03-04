
"use client";
import Link from 'next/link';
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Dashboard from "../page";
import useAddedPet from '@/app/hooks/useAddedPet';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MdAddTask, MdNoteAdd, MdOutlinePendingActions } from 'react-icons/md';


const MyAddedPet = () => {

    const { myAddedPet, refetch } = useAddedPet();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://pet-zone-project-next-js.vercel.app/mypet/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <Dashboard>
            <div className='lg:ml-72'>
                <div>
                    <h1 className='text-5xl font-semibold mt-5 text-center'>My Added <span className='text-red-500'>Pet</span></h1>
                </div>
                <div className='max-w-7xl mx-auto  mb-12  grid md:grid-cols-2 lg:grid-cols-1 grid-cols-1 gap-6'>

                </div>
                <div className="overflow-x-auto">
                    <table className="table  w-full">
                        {/* head */}
                        <thead className='text-black'>
                            <tr >
                                <th></th>
                                <th>Pet Name</th>
                                <th>Pet Image</th>
                                <th className='pl-[24px]'>Update</th>
                                <th>Status</th>
                                <th className='pl-6'>Action</th>
                            </tr>
                        </thead>

                        <tbody className=''>
                            {
                                myAddedPet.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td className='text-lg font-semibold'>{item.name}</td>
                                    <td><img className='w-16 h-16 rounded-md object-cover' src={item.image} alt="" /></td>
                                    <td>
                                        <Link href={{
                                            pathname: `/Dashboard/UpdatePet/${item._id}`
                                        }}><button className="btn btn-ghost text-yellow-500 text-lg">
                                        <p className="text-2xl">
                                             <MdNoteAdd />
                                         </p>
                                        </button>
                                        </Link>
                                    </td>

                                    {
                                        item.status === "accepted" ?
                                            (<button className="flex gap-1 justify-center items-center font-medium text-green-600 mt-8 text-lg">
                                                <MdAddTask className='text-lg'></MdAddTask> Accepted </button>)
                                            :
                                            (<button className="flex gap-1 justify-center items-center font-medium text-red-500 mt-8 text-lg"> <MdOutlinePendingActions></MdOutlinePendingActions> Pending </button>)
                                    }
                                    <td>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-ghost text-lg">
                                            <FaTrashAlt className="text-red-500 text-xl"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>

        </Dashboard>
    );
};

export default MyAddedPet;

