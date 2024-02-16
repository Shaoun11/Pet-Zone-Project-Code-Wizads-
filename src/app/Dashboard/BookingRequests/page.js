"use client";
import React, { useEffect, useState } from "react";
import Dashboard from "../page";
// import { FaRegTrashAlt } from "react-icons/fa";
// import Link from "next/link";
import { MdOutlineDoneOutline } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";

const Page = () => {
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/bookings");
        const data = await response.json();
        setAllBookings(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

    // Accept Operation
    const handleAccept = (allBooking, id) => {
        const newStatus = allBooking.status === 'Pending' ? 'Accepted' : 'Pending';
        console.log(newStatus);

        fetch(`http://localhost:5001/bookings/accept/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ role: newStatus })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Request ${newStatus}`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                    setAllBookings((prevTasks) =>
                    prevTasks.map((prevTask) =>
                      prevTask._id === allBooking._id
                        ? { ...prevTask, status: newStatus }
                        : prevTask
                    )
                    );

                }
            })
            .catch(error => {
                console.error('Error during fetch:', error);
            });
    }

    // Reject Operation
    const handleReject = (allBooking, id) => {
        const newStatus = allBooking.status === 'Pending' ? 'Rejected' : 'Pending';
        console.log(newStatus);

        fetch(`http://localhost:5001/bookings/reject/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ role: newStatus })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Request ${newStatus}`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                    setAllBookings((prevTasks) =>
                    prevTasks.map((prevTask) =>
                      prevTask._id === allBooking._id
                        ? { ...prevTask, status: newStatus }
                        : prevTask
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
          <h1 className="text-5xl font-semibold mt-5 mb-4 text-center">
            All <span className="text-red-500">Booking Requests</span>
          </h1>
        </div>
        {/* <h1 className='text-center font-semibold text-3xl'>Total Users : {allUsers.length}</h1> */}
        <div>
          <div className="overflow-x-auto">
            <table className="table text-center">
              {/* head */}
              <thead className="text-gray-700">
                <tr>
                  <th>SI No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact No.</th>
                  <th>Address</th>
                  <th>Action</th>
                  <th>Status</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {allBookings.map((allBooking, index) => (
                  <tr key={allBooking._id}>
                    <th>{index + 1}</th>
                    <td>{allBooking.name}</td>
                    <td>{allBooking.email}</td>
                    <td>{allBooking.phone}</td>
                    <td>{allBooking.address}</td>

                    <td>
                      {/* <button
                        onClick={() => handleDelete(allAccessory._id)}
                        className="btn btn-ghost text-red-500 text-lg"
                      > */}
                      <button
                        onClick={() => handleAccept(allBooking,allBooking._id)}
                        className={`btn btn-ghost text-green-500 tooltip ${
                            allBooking.status === "Rejected"
                            ? "btn-disabled"
                            : "btn btn-ghost"
                        }`} data-tip="Accept"
                      >
                        {" "}
                        <p className="text-xl">
                        <MdOutlineDoneOutline />
                        </p>
                      </button>
                      <button
                        onClick={() => handleReject(allBooking,allBooking._id)}
                        className={`btn btn-ghost text-red-500 tooltip ${
                            allBooking.status === "Accepted"
                            ? "btn-disabled"
                            : "btn btn-ghost"
                        }`} data-tip="Reject"
                      >
                        {" "}
                        <p className="text-xl">
                        <ImCross />
                        </p>
                      </button>
                    </td>
                    <td>
                    {allBooking.status}
                    </td>
                    <td>
                    {allBooking.payment}
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
