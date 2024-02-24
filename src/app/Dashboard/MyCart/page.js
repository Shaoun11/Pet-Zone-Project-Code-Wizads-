"use client";

import React, { useContext, useEffect, useState } from "react";
import Dashboard from "../page";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Link from "next/link";
import { MdOutlinePayment } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";
import useCart from "@/app/hooks/useCart";
import { AuthContext } from "@/app/Provider/AuthProvider";

const Page = () => {
  const { mycart, refetch } = useCart();
  console.log(mycart);
  const totalPrice = mycart.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  // const [allCart, setAllCart] = useState([]);
  const { user } = useContext(AuthContext);
  // console.log(user);

  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const response = await fetch(
  //                 'http://localhost:5001/mycart'
  //             );
  //             const data = await response.json();
  //             setAllCart(data);
  //         } catch (error) {
  //             console.error('Error fetching data:', error);
  //         }
  //     };
  //     fetchData();
  // }, []);

  // const myCart = allCart.filter((cart) => cart.customerEmail === user.email);
  // console.log(myCart);

  const handleDelete = (id) => {
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
        axios
          .delete(`https://pet-zone-project-next-js.vercel.app/mycart/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <Dashboard>
      <div>
        <div>
          <h1 className="text-5xl font-semibold mt-5 text-center">
            My <span className="text-red-500">Cart</span>
          </h1>
        </div>

        <div>
          {mycart.length === 0 ? (
            <>
              <img
                src="https://www.buy.airoxi.com/img/empty-cart-1.png"
                className="w-full "
              ></img>
            </>
          ) : (
            <>
              <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div className="flex justify-start item-start space-y-2 flex-col">
                  <h1 className="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                    Order #13432
                  </h1>
                  <p className="text-base  font-medium leading-6 text-gray-600">
                    21st Mart 2021 at 10:34 PM
                  </p>
                </div>
                <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                  <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start rounded-md bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                      <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                        Customer’s Cart
                      </p>
                      <div>
                        {mycart.map((contest, index) => (
                          <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                            <div className="pb-4 md:pb-8 w-full md:w-40">
                              <img
                                className="w-full rounded-lg hidden md:block"
                                src={contest.image}
                                alt="dress"
                              />
                            </div>
                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                              <div className="w-full flex flex-col justify-start items-start space-y-8">
                                <h3 className="text-xl  xl:text-2xl font-semibold leading-6 text-gray-800">
                                  {contest.name}
                                </h3>
                                <div className="flex justify-start items-start flex-col space-y-2">
                                  <p className="text-sm  leading-none text-gray-800">
                                    <span className=" text-gray-500">
                                      Style:{" "}
                                    </span>{" "}
                                    Italic Minimal Design
                                  </p>
                                  <p className="text-sm  leading-none text-gray-800">
                                    <span className=" text-gray-500">
                                      Size:{" "}
                                    </span>{" "}
                                    Small
                                  </p>
                                  <p className="text-sm  leading-none text-gray-800">
                                    <span className=" text-gray-500">
                                      Color:{" "}
                                    </span>{" "}
                                    Light Blue
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-between space-x-8 items-start w-full">
                               <div>
                               <p className="text-base xl:text-lg font-semibold leading-6">
                                  ${contest.price}{" "}
                                  <span className="text-red-300 line-through">
                                    {" "}
                                    $20%Off
                                  </span>
                                </p>
                                <p className="text-base mt-4  xl:text-lg leading-6 text-gray-800">
                                  Quantity:{contest.quantity}
                                </p>
                               </div>

                                <button
                                  onClick={() => handleDelete(contest._id)}
                                  className="btn btn-ghost btn-lg"
                                >
                                  <FaTrashAlt className="text-red-500"></FaTrashAlt>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center  md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                      <div className="flex flex-col rounded-md px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50   space-y-6">
                        <h3 className="text-xl  font-semibold leading-5 text-gray-800">
                          Summary
                        </h3>
                        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                          <div className="flex justify-between w-full">
                            <p className="text-base  leading-4 text-gray-800">
                              Subtotal
                            </p>
                            <p className="text-base  leading-4 text-gray-600">
                              ${totalPrice}
                            </p>
                          </div>
                          <div className="flex justify-between items-center w-full">
                            <p className="text-base leading-4 text-gray-800">
                              Discount{" "}
                              <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">
                                STUDENT
                              </span>
                            </p>
                            <p className="text-base  leading-4 text-gray-600">
                              -$28.00 (50%)
                            </p>
                          </div>
                          <div className="flex justify-between items-center w-full">
                            <p className="text-base  leading-4 text-gray-800">
                              Shipping
                            </p>
                            <p className="text-base  leading-4 text-gray-600">
                              $8.00
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center w-full">
                          <p className="text-base  font-semibold leading-4 text-gray-800">
                            Total
                          </p>
                          <p className="text-base  font-semibold leading-4 text-gray-600">
                            ${totalPrice}
                          </p>
                        </div>
                        <div>
                          {mycart.length ? (
                            <Link href="/Dashboard/Payment">
                              <button className="btn w-full border-none bg-red-500 text-white text-lg">
                                Payment
                              </button>
                            </Link>
                          ) : (
                            <button
                              disabled
                              className="btn bg-red-400 w-full text-white"
                            >
                              {" "}
                              <p className="text-lg">
                                <MdOutlinePayment />
                              </p>{" "}
                              Payment{" "}
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col rounded-md justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-red-500  space-y-6">
                        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                          Shipping
                        </h3>
                        <div className="flex justify-between items-start w-full">
                          <div className="flex justify-center items-center space-x-4">
                            <div className="w-8 h-8">
                              <img
                                className="w-full h-full"
                                alt="logo"
                                src="https://i.ibb.co/L8KSdNQ/image-3.png"
                              />
                            </div>
                            <div className="flex flex-col justify-start items-center">
                              <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">
                                DPD Delivery
                                <br />
                                <span className="font-normal">
                                  Delivery with 24 Hours
                                </span>
                              </p>
                            </div>
                          </div>
                          <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">
                            $8.00
                          </p>
                        </div>
                        <div className="w-full flex justify-center items-center">
                          <button className="hover:bg-black rounded-md dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                            View Carrier Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-md w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                    <h3 className="text-xl  font-semibold leading-5 text-gray-800">
                      Customer Details
                    </h3>
                    <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                      <div className="flex flex-col justify-start items-start flex-shrink-0">
                        <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                          <img className="rounded-full"
                        src={user?.photoURL}
                            alt="avatar"
                          />
                          <div className="flex justify-start items-start flex-col space-y-2">
                            <p className="text-base  font-semibold leading-4 text-left text-gray-800">
                             {user?.displayName}
                            </p>
                            <p className="text-sm  leading-5 text-gray-600  ">
                              10 Previous Orders
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-center text-gray-800  md:justify-start items-center space-x-4 py-4 border-b border-t border-gray-800  w-full">
                          <img
                            className=""
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg"
                            alt="email"
                          />
                        
                          <p className="cursor-pointer text-sm leading-5 ">
                          {user?.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                        <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                          <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                            <p className="text-base  font-semibold leading-4 text-center md:text-left text-gray-800">
                              Shipping Address
                            </p>
                            <p className="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                              180 North King Street, Northhampton MA 1060
                            </p>
                          </div>
                          <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                            <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                              Billing Address
                            </p>
                            <p className="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                              180 North King Street, Northhampton MA 1060
                            </p>
                          </div>
                        </div>
                        <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                          <button className="mt-6 md:mt-0  dark:hover:bg-gray-300 dark:bg-transparent  py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">
                            Edit Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Dashboard>
  );
};

export default Page;
