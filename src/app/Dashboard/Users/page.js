/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import Dashboard from "../page";
import useAxiosPublic from "@/app/hooks/useAxiosPublic";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

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
          "https://pet-zone-project-next-js.vercel.app/users"
        );
        const data = await response.json();
        setAllUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleToggleAdminUser = (user) => {
    const newRole = user.role === "admin" ? "user" : "admin";
    console.log(newRole);

    fetch(
      `https://pet-zone-project-next-js.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ role: newRole }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Now ${user.name} is an ${newRole}  `,
            showConfirmButton: false,
            timer: 1500,
          });

          setAllUsers((prevUsers) =>
            prevUsers.map((prevUser) =>
              prevUser._id === user._id
                ? { ...prevUser, role: newRole }
                : prevUser
            )
          );
        }
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
      });
  };

  return (
    <Dashboard>
      <div className=" lg:ml-72 lg:p-5 p-2">
        {" "}
        <h1 className=" text-center text-4xl font-bold">
          All <span className="text-red-500">Users</span>{" "}
        </h1>
        <div className="mt-6 bg-white overflow-hidden rounded-xl border shadow">
          <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
            <thead className="hidden border-b lg:table-header-group">
              <tr className="">
                <td className="whitespace-normal py-4 text-sm font-medium text-red-400  sm:px-6">
                  Photo
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-red-400  sm:px-6">
                  Name
                </td>

                <td className="whitespace-normal py-4 text-sm font-medium text-red-400  sm:px-6">
                  Email
                </td>

                <td className="whitespace-normal py-4 text-sm font-medium text-red-400  sm:px-6">
                  Status
                </td>
              </tr>
            </thead>

            <tbody className="lg:border-gray-300">
              {allUsers.map((user, index) => (
                <tr key={user._id}>
                  <td className="whitespace-no-wrap   text-sm font-bold text-gray-900 sm:px-6">
                    {" "}
                    <img
                      className="hidden object-cover lg:block w-10 h-10 rounded-full"
                      src={user.photo}
                      alt=""
                    />
                  </td>

                  <td className="whitespace-no-wrap    text-sm font-bold text-gray-900 sm:px-6">
                    <td className="whitespace-no-wrap    text-sm font-bold text-gray-900 sm:px-6">
                      {" "}
                      <img
                        className=" w-10 object-cover h-10 lg:hidden rounded-full"
                        src={user.photo}
                        alt=""
                      />
                    </td>
                    {user.name}
                    <div className="mt-[2px] lg:hidden">
                      <p className="font-normal text-gray-500">{user.email}</p>
                    </div>
                  </td>

                  <td className="whitespace-no-wrap py-4 px-6  text-sm text-gray-600 ">
                    <p className="text-sm text-gray-600  hidden lg:block">
                      {" "}
                      {user.email}
                    </p>
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-red-500 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      <button
                        className=" h-4 w-7 "
                        onClick={() => handleToggleAdminUser(user)}
                      >
                        {user.role === "admin" ? "Admin" : "User"}
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-red-500 text-xs text-white">
                      <button
                        className=" h-8 w-20"
                        onClick={() => handleToggleAdminUser(user)}
                      >
                        {user.role === "admin" ? "Admin" : "User"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Dashboard>
  );
};

export default Page;
