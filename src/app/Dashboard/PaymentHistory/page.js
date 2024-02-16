"use client";

import React, { useContext, useEffect, useState } from 'react';
import Dashboard from "../page";
import { AuthContext } from '@/app/Provider/AuthProvider';
import axios from 'axios';
import { useQuery } from 'react-query';
import { MdOutlinePendingActions } from 'react-icons/md';

const Page = () => {
    const { user } = useContext(AuthContext);
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://pet-zone-project-next-js.vercel.app/payments`);
                console.log(res.data);
                const allPayments = res.data;
                const myPayments = allPayments.filter((pay) => pay?.customerEmail === user?.email);
                setPayments(myPayments);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [user?.email]);

    return (
        <Dashboard>
            <div>
                <div>
                    <h1 className='text-5xl font-semibold mt-5 mb-10 text-center'>Your <span className='text-red-500'>Payment </span>History</h1>
                </div>

                <div>
                    {
                        payments.length === 0 ?
                            <>
                                <p className='text-3xl w-full h-[50vh] flex justify-center items-center -mt-16  '>Your payment history is empty</p>
                            </>
                            :
                            <>
                                <div className="overflow-x-auto ">
                                    <table className="table  w-full">
                                        {/* head */}
                                        <thead>
                                            <tr className='text-gray-900'>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Address</th>
                                                <th>Date</th>
                                                <th>Total Amount</th>
                                                <th>Transaction Id</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className=''>
                                            {
                                                payments.map((contest, index) => <tr key={contest._id}>
                                                    <th>{index + 1}</th>
                                                    <td className='text-lg font-semibold'>{contest.customerName}</td>
                                                    <td>Dhaka</td>
                                                    <td>{contest.date}</td>
                                                    <td>{contest.amount}</td>
                                                    <td>{contest.transactionId}</td>
                                                    <td className='text-red-500 text-lg font-semibold'>Pending</td>
                                                </tr>)
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </>
                    }
                </div>
            </div>
        </Dashboard>
    );
};

export default Page;