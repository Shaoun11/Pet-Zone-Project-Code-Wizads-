"use client";

import React, { useEffect, useState } from 'react';
import Dashboard from "../page";
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';



const Page = () => {
    // const axiosPublic = useAxiosPublic();

    // const { data: users = [], refetch } = useQuery({
    //     queryKey: ["users"],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get("/users");
    //         return res.data;
    //     }
    // });


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


    const handleMakeAdmin = user => {
        fetch(`https://pet-zone-project-next-js.vercel.app/users/admin/${user._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });

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
                 <h1 className='text-5xl font-semibold mt-5 mb-4 text-center'>Our  All <span className='text-red-500'>User</span></h1>
             </div>
            {/* <h1 className='text-center font-semibold text-3xl'>Total Users : {allUsers.length}</h1> */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead className='text-gray-700'>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === "admin" ?
                                                <button className="btn btn-ghost text-red-500 text-lg"> Admin </button>
                                                :
                                                (<button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost text-red-500 text-lg"> User </button>)
                                        }
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

export default Page;