"use client";
import { useContext, useEffect, useState } from "react";
import Dashboard from "../page";
import { AuthContext } from "@/app/Provider/AuthProvider";
import { FaCcPaypal } from "react-icons/fa";
import HOCAuth from "@/utils/HOCAuth";

const Page = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  console.log(`logger in account is ${userEmail}`);
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pet-zone-project-next-js.vercel.app/bookings");
        const data = await response.json();
        setAllBookings(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  //   Email Filtering
  const myBookings = allBookings.filter(
    (allBooking) => allBooking.submittedBy === userEmail
  );
  const myBookingsLength = myBookings.length;
  console.log(myBookings);
  console.log(myBookingsLength);

  return (
    <Dashboard>
      <div className="lg:ml-72">
        <div>
          <h1 className="text-5xl font-semibold mt-5 mb-4 text-center">
            My <span className="text-red-500">Bookings</span>
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
                  <th>Status</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {myBookings.map((myBooking, index) => (
                  <tr key={myBooking._id}>
                    <th>{index + 1}</th>
                    <td>{myBooking.name}</td>
                    <td>{myBooking.email}</td>
                    <td>{myBooking.phone}</td>
                    <td>{myBooking.address}</td>

                    <td>{myBooking.status}</td>
                    <td>
                      <button
                        className={`btn btn-ghost text-red-500 tooltip ${
                          myBooking.status !== "Accepted"
                            ? "btn-disabled"
                            : "btn btn-ghost"
                        }`}
                        data-tip="Make Payment"
                      >
                        {" "}
                        <p className="text-xl">
                          <FaCcPaypal />
                        </p>
                      </button>
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

export default HOCAuth(Page);
