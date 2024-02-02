"use client"
import React from 'react';
import Dashboard from "../page";
const Page = async() => {
    const response =await fetch(`https://pet-zone-project-next-js.vercel.app/petdata`)
    const data =await response.json();
    return (
        <Dashboard>

           
        <div>
        
        <div>
                         <h1 className='text-5xl font-semibold mt-5 mb-7 text-center'>Our  All  Pending Pet <span className='text-red-500'>Collection</span></h1>
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
                                        <th>Price</th>
                                        <th>Accept</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((user, index) => <tr key={user._id}>
                                            <th>{index + 1}</th>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <td>{user.name}</td>
                                            <td>{user.adoption_fee}</td>
                                            <td>
                                                {
                                                    user.role === "admin" ?
                                                        <button className="btn btn-ghost text-red-500 text-lg"> Accept </button>
                                                        :
                                                        (<button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost text-green-600 text-lg"> Accepted </button>)
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