"use client";

import React, { useEffect, useState } from 'react';
import Dashboard from "../page";
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';



const SellerRequest = () => {

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://pet-zone-project-next-js.vercel.app/users'
                );
                const data = await response.json();
                setAllUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    const handleToggleAdminUser = user => {
        const newRole = user.role === 'admin' ? 'user' : 'admin';
        console.log(newRole);

        fetch(`https://pet-zone-project-next-js.vercel.app/users/admin/${user._id}`, {
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
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Now ${user.name} is an ${newRole}  `,
                        showConfirmButton: false,
                        timer: 1500
                    });

                    setAllUsers(prevUsers =>
                        prevUsers.map(prevUser =>
                            prevUser._id === user._id ? { ...prevUser, role: newRole } : prevUser
                        )
                    );

                }
            })
            .catch(error => {
                console.error('Error during fetch:', error);
            });
    }



    return (
        <Dashboard>
            <div>
                <div>
                    <h1 className='text-5xl font-semibold mt-5 mb-4 text-center'>Seller <span className='text-red-500'>Requests</span></h1>
                </div>
                
                <div>
                    <div className="overflow-x-auto">
                        <table className="table mx-auto">
                            {/* head */}
                            <thead className='text-gray-700 ml-32'>
                                <tr>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Make Seller</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {
                                    allUsers.map((user, index) => <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <div className="avatar">
                                            <div className="mask mask-squircle mt-3 w-12 h-12 ">
                                                <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button onClick={() => handleToggleAdminUser(user)} className="btn btn-ghost text-red-500 text-lg">
                                                {
                                                    user.role === "admin" ? "Admin" : "User"
                                                }
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