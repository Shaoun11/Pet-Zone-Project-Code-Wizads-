/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Dashboard from "../page";
import Swal from "sweetalert2";
import { MdAddTask, MdOutlinePendingActions } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

const AcceptPet = () => {
  const [allPets, setAllPets] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pet-zone-project-next-js.vercel.app/mypet"
        );
        const data = await response.json();
        setAllPets(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleAccepted = (pets) => {
    fetch(`https://pet-zone-project-next-js.vercel.app/petdata/${pets._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(pets),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          setAllPets((prevPets) =>
            prevPets.map((prevPet) =>
              prevPet._id === pets._id
                ? { ...prevPet, status: "accepted" }
                : prevPet
            )
          );

          Swal.fire({
            position: "center",
            icon: "success",
            title: "You accept the pet",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
      });
  };

  return (
    <Dashboard>
      <div className=" lg:ml-72 lg:p-5 p-2">
      <div className="mb-14">
                <p className="text-2xl mt-5 ml-6 font-semibold mb-2">
                    Accepted User Pet
                </p>
                <p className="text-sm ml-6">
                   
                </p>
            </div>
        {" "}
        <div className="flex flex-col justify-start items-start rounded-md bg-white px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
          <div>
            {allPets.map((pets, index) => (
              <div
                key={pets._id}
                className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
              >
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    className="w-full rounded-lg hidden md:block"
                    src={pets.image}
                    alt="dress"
                  />
                </div>
                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl  xl:text-2xl font-semibold leading-6 text-gray-800">
                      {pets.name}
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-sm  leading-none text-gray-800">
                        <span className=" text-gray-500">Species: </span>
                        {pets.species}
                      </p>
                      <p className="text-sm  leading-none text-gray-800">
                        <span className=" text-gray-500">Gender: </span>{" "}
                        {pets.gender}
                      </p>
                      <p className="text-sm  leading-none text-gray-800">
                        <span className=" text-gray-500">Age: </span>
                        {pets.age}
                      </p>
                      <p className="text-sm  leading-none text-gray-800">
                        <span className=" text-gray-500">Description: </span>
                        {pets.description.slice(0, 200)}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between space-x-14 items-start ">
                    <div>
                      <p className="text-base xl:text-lg  mt-3 flex font-semibold leading-6">
                        Price:{pets.adoption_fee}$
                      </p>
                    </div>

                    {pets.status === "accepted" ? (
                      <button className="btn btn-ghost text-green-600 text-lg">
                        {" "}
                        <MdAddTask></MdAddTask> Accepted{" "}
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAccepted(pets)}
                        className="btn btn-ghost text-red-500  text-lg"
                      >
                        {" "}
                        <MdOutlinePendingActions></MdOutlinePendingActions>{" "}
                        Pending{" "}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default AcceptPet;