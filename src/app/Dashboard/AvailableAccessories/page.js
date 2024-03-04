"use client";

import Link from "next/link";
import Dashboard from "../page";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { MdNoteAdd } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
const Page = () => {
  const [allAccessories, setAllAccessories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pet-zone-project-next-js.vercel.app/petshop");
        const data = await response.json();
        setAllAccessories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  //   Delete Operation
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete confirmed");

        fetch(`https://pet-zone-project-next-js.vercel.app/petshop/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Assignment has been deleted. Please Reload the page to see the results",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <Dashboard>
      <div className="lg:ml-72">
        <div>
          <h1 className="text-5xl font-semibold mt-5 mb-4 text-center">
            Our All <span className="text-red-500">Available Products</span>
          </h1>
        </div>
        {/* <h1 className='text-center font-semibold text-3xl'>Total Users : {allUsers.length}</h1> */}
        <div>
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead className="text-gray-700">
                <tr>
                  <th>SI No.</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {allAccessories.map((allAccessory, index) => (
                  <tr key={allAccessory._id}>
                    <th>{index + 1}</th>
                    <div key={allAccessory._id} className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={allAccessory.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <td>{allAccessory.name}</td>
                    {/* <td>{allAccessorie.email}</td> */}
                    <td>
                      <button
                        onClick={() => handleDelete(allAccessory._id)}
                        className="btn btn-ghost text-red-500 text-lg"
                      > <p className="text-lg">
                      <FaRegTrashAlt />
                  </p>
                        
                      </button>
                    </td>
                    <td>
                      <Link
                        href={{
                          pathname: `/Dashboard/UpdateAccessories/${allAccessory._id}`,
                          query:{msg:allAccessory._id}
                        }}
                      >
                        <button className="btn btn-ghost text-yellow-500 text-lg">
                        <p className="text-xl">
                             <MdNoteAdd />
                         </p>
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Page;
