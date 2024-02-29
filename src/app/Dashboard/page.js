/* eslint-disable @next/next/no-img-element */
"use client";
import useAdmin from "../hooks/useAdmin";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import HOCAuth from "@/utils/HOCAuth";
import { CgProfile } from "react-icons/cg";
import { IoBagAdd, IoCompassOutline } from "react-icons/io5";
import Navber from "../Components/Header";
import Link from "next/link";
import { MdAddToPhotos, MdBookmarkAdded, MdGroupAdd, MdLibraryAddCheck, MdOutlinePayment, MdShoppingCartCheckout } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { FaListOl } from "react-icons/fa";

const MainDashboard = ({ children }) => {
  const { user ,logOut} = useContext(AuthContext);
 const handelSingout = () => {
   logOut().then().catch();
 };
  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();
 const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  return (
    <>
      <Navber></Navber>

      <div className=" ">
        {children}
        <>
          {/*  <!-- Component: Side navigation menu with user profile and alert message --> */}
          {/*  <!-- Mobile trigger --> */}
          <button
            title="Side navigation"
            type="button"
            className={`visible fixed left-6 top-20 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
              isSideNavOpen
                ? "visible opacity-50 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                : ""
            }`}
            aria-haspopup="menu"
            aria-label="Side navigation"
            aria-expanded={isSideNavOpen ? " true" : "false"}
            aria-controls="nav-menu-4"
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
          >
            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
            </div>
          </button>

          {/*  <!-- Side Navigation --> */}
          <aside
            id="nav-menu-4"
            aria-label="Side navigation"
            className={` fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
              isSideNavOpen ? "translate-x-0" : " -translate-x-full"
            }`}
          >
            {isAdmin ? (
              <>
                <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-6">
                  <div className="shrink-0">
                    <a
                      href="#"
                      className="relative flex h-12 w-12 items-center justify-center rounded-full text-white"
                    >
                      <img
                        src={user?.photoURL}
                        alt="user name"
                        title="user name"
                        width="48"
                        height="48"
                        className="max-w-full rounded-full"
                      />
                      <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white">
                        <span className="sr-only"> online </span>
                      </span>
                    </a>
                  </div>
                  <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
                    <h4 className="w-full truncate text-base text-slate-700">
                      {user?.displayName}
                    </h4>
                    <p className="w-full truncate text-sm text-red-400">
                      Admin
                    </p>
                  </div>
                </div>
                <nav
                  aria-label="side navigation"
                  className="flex-1 divide-y divide-slate-100 overflow-auto"
                >
                  <div>
                    <ul className="flex flex-1 flex-col gap-1 py-3">
                      <li className="px-3">
                        <Link
                          href={"/Dashboard/AdminProfile"}
                          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                        >
                          <div className="flex items-center self-center">
                            <CgProfile className=" text-lg"></CgProfile>
                          </div>
                          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            {" "}
                            Profile
                          </div>
                        </Link>
                      </li>
                      <li className="px-3">
                        <Link
                          href={"/Dashboard/Users"}
                          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                        >
                          <div className="flex items-center self-center ">
                            <MdGroupAdd></MdGroupAdd>
                          </div>
                          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            All Users
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="flex flex-1 flex-col gap-1 py-3">
                      <li className="px-3">
                        <Link
                          href={"/Dashboard/AddPet"}
                          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                        >
                          <div className="flex items-center self-center ">
                            <MdAddToPhotos></MdAddToPhotos>
                          </div>
                          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            Add Pet
                          </div>
                        </Link>
                      </li>

                      <li className="px-3">
                        <Link
                          href={"/Dashboard/AcceptPet"}
                          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                        >
                          <div className="flex items-center self-center ">
                            <MdLibraryAddCheck></MdLibraryAddCheck>
                          </div>
                          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            Accept Pet
                          </div>
                        </Link>
                      </li>

                      <li className="px-3">
                        <Link
                          href={"/Dashboard/AddAccessories"}
                          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                        >
                          <div className="flex items-center self-center ">
                            <IoBagAdd></IoBagAdd>
                          </div>
                          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            Add Accessories
                          </div>
                        </Link>
                      </li>

                      <li className="px-3">
                        <Link
                          href={"/Dashboard/AvailableAccessories"}
                          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                        >
                          <div className="flex items-center self-center ">
                            <AiFillShop></AiFillShop>
                          </div>
                          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            Available Accessories
                          </div>
                        </Link>
                      </li>
                      <li className="px-3">
                        <Link
                          href={"/Dashboard/ManageReview"}
                          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                        >
                          <div className="flex items-center self-center ">
                            <IoCompassOutline></IoCompassOutline>
                          </div>
                          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            Manage Review
                          </div>
                        </Link>
                      </li>
                      <li className="px-3">
                        <Link
                          href={"/Dashboard/BookingRequests"}
                          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                        >
                          <div className="flex items-center self-center ">
                            <BsBook></BsBook>
                          </div>
                          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            Booking Requests
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-6">
                  <div className="shrink-0">
                    <a
                      href="#"
                      className="relative flex h-12 w-12 items-center justify-center rounded-full text-white"
                    >
                      <img
                        src={user?.photoURL}
                        alt="user name"
                        title="user name"
                        width="48"
                        height="48"
                        className="max-w-full rounded-full"
                      />
                      <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white">
                        <span className="sr-only"> online </span>
                      </span>
                    </a>
                  </div>
                  <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
                    <h4 className="w-full truncate text-base text-slate-700">
                      {user?.displayName}
                    </h4>
                    <p className="w-full truncate text-sm text-red-400">User</p>
                  </div>
                </div>
                <nav
                  aria-label="side navigation"
                  className="flex-1 divide-y divide-slate-100 overflow-auto"
                >
                  <div>
                    <ul className="flex flex-1 flex-col gap-1 py-3">
                      <li className="px-3">
                        <Link
                          href={"/Dashboard/UserProfile"}
                          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                        >
                          <div className="flex items-center self-center">
                            <CgProfile className=" text-lg"></CgProfile>
                          </div>
                          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            {" "}
                            Profile
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="flex flex-1 flex-col gap-1 py-3">
                      <li className="px-3">
                        <Link
                          href={"/Dashboard/AddPet"}
                          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                        >
                          <div className="flex items-center self-center ">
                            <MdAddToPhotos></MdAddToPhotos>
                          </div>
                          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            Add Pet
                          </div>
                        </Link>
                      </li>

                      <li className="px-3">
                        <Link
                          href={"/Dashboard/MyPet"}
                          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                        >
                          <div className="flex items-center self-center ">
                            <MdBookmarkAdded></MdBookmarkAdded>
                          </div>
                          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            My Added Pet
                          </div>
                        </Link>
                      </li>

                      <li className="px-3">
                        <Link
                          href={"/Dashboard/AddAccessories"}
                          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                        >
                          <div className="flex items-center self-center ">
                            <IoBagAdd></IoBagAdd>
                          </div>
                          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            Add Accessories
                          </div>
                        </Link>
                      </li>

                      <li className="px-3">
                        <Link
                          href={"/Dashboard/MyBookings"}
                          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                        >
                          <div className="flex items-center self-center ">
                            <FaListOl></FaListOl>
                          </div>
                          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            My Bookings
                          </div>
                        </Link>
                      </li>
                      <li className="px-3">
                        <Link
                          href={"/Dashboard/BookingRequests"}
                          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                        >
                          <div className="flex items-center self-center ">
                            <BsBook></BsBook>
                          </div>
                          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            Your Booking Requests
                          </div>
                        </Link>
                      </li>
                      <li className="px-3">
                        <Link
                          href={"/Dashboard/MyCart"}
                          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                        >
                          <div className="flex items-center self-center ">
                            <MdShoppingCartCheckout></MdShoppingCartCheckout>
                          </div>
                          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            My Cart
                          </div>
                        </Link>
                      </li>
                      <li className="px-3">
                        <Link
                          href={"/Dashboard/PaymentHistory"}
                          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                        >
                          <div className="flex items-center self-center ">
                            <MdOutlinePayment></MdOutlinePayment>
                          </div>
                          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                            Payment History
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </>
            )}

            <footer className="border-t border-slate-200 p-3">
              <a
                href="#"
                className="flex items-center gap-3 rounded p-3 text-slate-900 transition-colors hover:text-red-500 "
              >
                <div className="flex items-center self-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="Dashboard icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div
                  onClick={handelSingout}
                  className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium"
                >
                  Logout
                </div>
              </a>
            </footer>
          </aside>

          {/*  <!-- Backdrop --> */}
          <div
            className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
              isSideNavOpen ? "block" : "hidden"
            }`}
            onClick={() => setIsSideNavOpen(false)}
          ></div>
          {/*  <!-- End Side navigation menu with user profile and alert message --> */}
        </>
      </div>
    </>
  );
};

export default HOCAuth(MainDashboard);
