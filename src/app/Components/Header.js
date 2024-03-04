"use client";
import { FiGrid } from "react-icons/fi";
import { AiOutlineGoogle } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Link from "next/link";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";

const Navbar = () => {
  const axiosPublic = useAxiosPublic();
  const { mycart, refetch } = useCart();
  const [toggleMenu, setToggleMenu] = useState(!false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const [isAdmin] = useAdmin();
  const [isSeller] = useSeller()


  const handleProfile = () => {
    setProfile(!profile);
  };
  const { user, logOut } = useContext(AuthContext);

  const handelSingout = () => {
    logOut().then().catch();
  };

  const { data: mycarts = [] } = useQuery({
    queryKey: ["mycarts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  const handleSeller = () => {
    const email = user?.email;
    const name = user?.displayName;
    const image = user?.photoURL;
    const role = "user"

    const newSeller = { name, email, image, role };

    // fetch("https://pet-zone-project-next-js.vercel.app/mypet", {
    fetch("https://pet-zone-project-next-js.vercel.app/seller", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newSeller)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: 'You are requested to a seller',
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }







  return (
    <div className="shadow sticky -top-2 z-20 bg-opacity-30 h-[101px]  bg-[#f0f8ff] static:text-white ">
      <div className="max-w-7xl mx-auto">
        <nav className="px-6 py-7 flex justify-between items-center">
          <div className="flex items-center cursor-pointer">
            <Link href="/" className="text-3xl font-bold">
              <img
                className="lg:w-28 md:w-32 w-20"
                src="https://i.ibb.co/WcRsrJ4/Picsart-24-01-25-00-49-42-732.png"
                alt=""
              />
            </Link>
          </div>

          <ul className="hidden lg:flex justify-between items-center gap-8 text-lg font-medium">
            <li>
              <Link href="/" className="focus:text-red-500 active:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/AllPet"}
                className="focus:text-red-500 active:text-red-500"
              >
                All Pet
              </Link>
            </li>

            <li>
              <Link
                href={"/AllAccessories"}
                className="focus:text-red-500 active:text-red-500"
              >
                All Accessories
              </Link>
            </li>

            <li>
              <Link
                href={"/about"}
                className="focus:text-red-500 active:text-red-500"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href={"/contact"}
                className="focus:text-red-500 active:text-red-500"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href={"/helpDesk"}
                className="focus:text-red-500 active:text-red-500"
              >
                HelpDesk
              </Link>
            </li>
            <li>
              <Link
                href={"/Dashboard"}
                className="focus:text-red-500 active:text-red-500"
              >
                Dashboard
              </Link>
            </li>
          </ul>

          <div className="flex items-center  gap-x-3">
            <div
              onClick={() => setToggleMenu(!toggleMenu)}
              className="lg:hidden order-2"
            >
              {toggleMenu === true ? (
                <FiGrid className="lg:hidden text-3xl cursor-pointer" />
              ) : (
                <FiGrid className="lg:hidden text-3xl cursor-pointer" />
              )}

              <ul
                className={`absolute w-full h-[470px] top-full right-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-[#ebe8fc] p-8 z-50 flex flex-col items-center pt-36 gap-y-4 text-2xl font-medium lg:hidden ${toggleMenu ? "hidden" : ""
                  }`}
              >
                <li>
                  <Link
                    href="/"
                    className="focus:text-red-500 active:text-red-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/AllPet"}
                    className="focus:text-red-500 active:text-red-500"
                  >
                    All Pet
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/AllAccessories"}
                    className="focus:text-red-500 active:text-red-500"
                  >
                    All Accessories
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/about"}
                    className="focus:text-red-500 active:text-red-500"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/contact"}
                    className="focus:text-red-500 active:text-red-500"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/Dashboard"}
                    className="focus:text-red-500 active:text-red-500"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex  items-center gap-x-6 text-lg font-medium">
              {user ? (
                <>
                  <Link href={"/Dashboard/MyCart"}>
                    <button className="relative   ">
                      <div className="t-0 absolute left-3">
                        <p
                          className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white"

                        >
                          {mycart.length}
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="file: mt-4 h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </button>
                  </Link>

                  <div
                    onClick={handleProfile}
                    className="flex  justify-center items-center gap-x-4 cursor-pointer"
                  >
                    <div className="dropdown dropdown-end">
                      <div className="avatar online m-2" tabIndex={0}>
                        <div className="w-11 rounded-full">
                          <img src={user?.photoURL} />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "text-black"
                        : isActive
                          ? "bg-[#7a63f1] text-[#f5f4fa] py-2 px-4 rounded"
                          : "py-2 px-4 bg-[#7a63f1] text-[#f5f4fa] cursor-pointer rounded text-lg font-medium"
                    }
                  >
                    Login
                  </Link>
                </>
              )}
            </div>

            {/* user profile */}
            <div className="flex">
              <div
                className={`w-[280px] z-10 h-fit absolute  rounded-md shadow-md mr-32 mt-9 bg-opacity-50  backdrop-blur-md  hover:shadow-2xl bg-[#eae4e4] py-8 px-5 ${profile
                  ? "-top-0 left-20 md:left-auto md:top-12 md:right-7 "
                  : "hidden"
                  } `}
              >
                <div className="w-[120px] h-[120px] mx-auto rounded-full border-2 border-red-500 overflow-hidden">
                  <img
                    onClick={handleProfile}
                    src={user?.photoURL}
                    className="w-[120px] h-[120px] mx-auto rounded-full"
                    alt="profile"
                  />
                </div>
                <div className="text-center  mt-5 ">
                  <h1 className="text-base font-bold">
                    Name: {user?.displayName}
                  </h1>
                  <p className="text-xs mt-3">Email: {user?.email}</p>
                  <p
                    className={
                      user?.emailVerified
                        ? "text-xs text-green-500 mt-1"
                        : "text-xs text-red-500 mt-1"
                    }
                  >
                    {user?.emailVerified
                      ? "Your Email has been verified!"
                      : "Your Email is not verified!"}
                  </p>
                  <div className="mt-4 my-btn" onClick={handelSingout}>
                    <button className="bg-red-500 btn btn-outline w-full text-white border-none">
                      {" "}
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {user && !isAdmin && !isSeller &&
                <button onClick={() => handleSeller()} className='lg:mt-4 md:my-3 mr-10 btn btn-sm btn-outline cursor-pointer items-center justify-center rounded-md border py-2 px-4 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-[#ef4444] hover:text-white'>
                  Seller Request
                </button>
                }
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
