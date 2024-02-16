"use client"
import React, { useEffect, useState } from 'react';
import Dashboard from "../page";
import Swal from 'sweetalert2';
import { MdAddTask, MdOutlinePendingActions } from "react-icons/md";



const Page = () => {

    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://pet-zone-project-next-js.vercel.app/petdata'
                );
                const data = await response.json();
                setAllPets(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    const handleAccepted = pets => {
        fetch(`https://pet-zone-project-next-js.vercel.app/petdata/${pets._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(pets)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                    setAllPets(prevPets =>
                        prevPets.map(prevPet =>
                            prevPet._id === pets._id ? { ...prevPet, status: 'accepted' } : prevPet
                        )
                    );

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: 'You accept the pet',
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
                    <h1 className='text-5xl font-semibold mt-5 mb-7 text-center'>Our  All  Pending Pet <span className='text-red-500'>Collection</span></h1>
                </div>

                <div>
                    <div className="overflow-x-auto">
                        <table className="table ">

                            {/* head */}
                            <thead className='text-gray-700'>
                                <tr>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Species</th>
                                    <th>Price</th>
                                    <th>Accept</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    allPets.map((pets, index) => <tr key={pets._id}>
                                        <th>{index + 1}</th>
                                        <div  key={pets._id} className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={pets.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <td className='font-normal' >{pets.name}</td>
                                        <td  className='font-medium'>{pets.species}</td>
                                        <td className='font-normal'>{pets.adoption_fee}</td>
                                        <td>
                                            {
                                                pets.status === "accepted" ?
                                                    (<button className="btn btn-ghost text-green-600 text-lg"> <MdAddTask></MdAddTask> Accepted </button>)
                                                    :
                                                    (<button onClick={() => handleAccepted(pets)} className="btn btn-ghost text-red-500  text-lg"> <MdOutlinePendingActions></MdOutlinePendingActions> Pending </button>)
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