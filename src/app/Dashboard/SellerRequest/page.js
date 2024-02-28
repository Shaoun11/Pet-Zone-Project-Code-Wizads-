"use client";

import React, { useEffect, useState } from 'react';
import Dashboard from "../page";
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';


const SellerRequest = () => {
    const [allSeller, setAllSellers] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'http://localhost:5001/seller'
                );
                const data = await response.json();
                setAllSellers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    const handleToggleSellerUser = user => {
        const newRole = user.role === 'user' ? 'seller' : 'user';
        console.log(newRole);
        console.log(user.email);

        fetch(`http://localhost:5001/users/seller/${user.email}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ role: newRole })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                    setAllSellers(prevUsers =>
                        prevUsers.map(prevUser =>
                            prevUser._id === user._id ? { ...prevUser, role: newRole } : prevUser
                        )
                    );

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Now ${user.name} is now a ${newRole}  `,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.error('Error during fetch:', error);
            });
    }


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
                axios.delete(`http://localhost:5001/users/seller/${id}`)
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
            <div>
                <div>
                    <h1 className='text-5xl font-semibold mt-5 mb-4 text-center'>Seller <span className='text-red-500'>Requests</span></h1>
                </div>
                <div className='max-w-7xl mx-auto  mb-12  grid md:grid-cols-2 lg:grid-cols-1 grid-cols-1 gap-6'>

                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='text-gray-700 ml-32'>
                                <tr>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Make Seller</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {
                                    allSeller.map((user, index) => <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <div className="avatar">
                                            <div className="mask mask-squircle mt-3 w-12 h-12 ">
                                                <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button onClick={() => handleToggleSellerUser(user)} className="btn btn-ghost text-red-500 text-lg">
                                                {
                                                    user.role === "user" ? "Seller" : "User"
                                                }
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(user._id)}
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
            </div>
        </Dashboard>
    );
};

export default SellerRequest;