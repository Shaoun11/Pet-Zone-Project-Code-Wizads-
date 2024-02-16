"use client";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import HOCAuth from "@/utils/HOCAuth";
import Link from "next/link";
import { IoCompassOutline } from "react-icons/io5";
import { MdLibraryAddCheck, MdOutlinePayment } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";
import { MdContactPhone } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";
import { MdGroupAdd } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
import Navber from "../Components/Header";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaHome, FaListOl } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsBook } from "react-icons/bs";
const MainDashboard = ({ children }) => {
<<<<<<< HEAD
  const { user } = useContext(AuthContext);
=======
  const { user } = useContext(AuthContext)
>>>>>>> ce972aa0f1f075fbc3a1202a771fd597584e44ae

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
<<<<<<< HEAD
    <>
      <Navber></Navber>
      <div className="">
        <div className="drawer  lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-slate-200 rounded-s-3xl">
            {/* Page content here */}

            {children}

            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary  drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-[#f7f7f7] rounded-e-3xl text-gray-900">
              {/* Sidebar content here */}

              {isAdmin ? (
                <>
                  <div className="  font-sans mb-6 pt-20 w-[200px] flex flex-row justify-center items-center">
                    <div className="card w-96 mx-auto ">
                      <img
                        className="w-32 h-32 mx-auto rounded-full -mt-20 border-8 border-white"
                        src={user?.photoURL}
                        alt=""
                      />
                      <div className=" mt-2 ml-4 text-xl font-medium">
                        {user?.displayName}
                        <span className="text-red-600">(Admin)</span>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-1 mb-2"></hr>
                  <li>
                    <Link
                      className="font-semibold focus:text-red-500 active:text-red-500"
                      href={"/Dashboard/AdminProfile"}
                    >
                      {" "}
                      <CgProfile></CgProfile> Admin Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-semibold focus:text-red-500 active:text-red-500"
                      href={"/Dashboard/Users"}
                    >
                      {" "}
                      <MdGroupAdd></MdGroupAdd> All Users
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-semibold focus:text-red-500 active:text-red-500"
                      href={"/Dashboard/AddPet"}
                    >
                      <MdAddToPhotos></MdAddToPhotos> Add Pet
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-semibold focus:text-red-500 active:text-red-500"
                      href={"/Dashboard/AcceptPet"}
                    >
                      <MdLibraryAddCheck></MdLibraryAddCheck> Accept Pet
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-semibold focus:text-red-500 active:text-red-500"
                      href={"/Dashboard/AddAccessories"}
                    >
                      <IoBagAdd></IoBagAdd> Add Accessories
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-semibold focus:text-red-500 active:text-red-500"
                      href={"/Dashboard/ManageReview"}
                    >
                      <IoCompassOutline></IoCompassOutline> Manage Review
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-semibold focus:text-red-500 active:text-red-500"
                      href={"/Dashboard/AvailableAccessories"}
                    >
                      <AiFillShop></AiFillShop> Available Accessories
                    </Link>
                  </li>
                  <li>
                    <Link className="font-semibold focus:text-red-500 active:text-red-500" href={"/Dashboard/BookingRequests"}>
                      <BsBook></BsBook> Booking Requests
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <div>
                    <div className=" font-sans pt-20  w-[200px] flex flex-row justify-center items-center">
                      <div className="card w-96 mx-auto ">
                        <img
                          className="w-32 h-32 mx-auto rounded-full -mt-20 border-8 border-white"
                          src={user?.photoURL}
                          alt=""
                        />
                        <div className=" mt-2 ml-4 text-xl font-medium">
                          {user?.displayName}
                          <span className="text-blue-600">(User)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-3"></hr>
                  <li>
                    <Link
                      className="font-semibold focus:text-red-500 active:text-red-500"
                      href={"/Dashboard/UserProfile"}
                    >
                      {" "}
                      <CgProfile></CgProfile> User Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-semibold focus:text-red-500 active:text-red-500"
                      href={"/Dashboard/AddPet"}
                    >
                      {" "}
                      <MdAddToPhotos></MdAddToPhotos> Add Pet
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-semibold focus:text-red-500 active:text-red-500"
                      href={"/Dashboard/MyPet"}
                    >
                      {" "}
                      <MdBookmarkAdded></MdBookmarkAdded> My Added Pet
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-semibold focus:text-red-500 active:text-red-500"
                      href={"/Dashboard/MyCart"}
                    >
                      {" "}
                      <MdShoppingCartCheckout></MdShoppingCartCheckout> My Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-semibold focus:text-red-500 active:text-red-500"
                      href={"/Dashboard/MyBookings"}
                    >
                      {" "}
                      <FaListOl></FaListOl> My Bookings
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-semibold focus:text-red-500 active:text-red-500"
                      href={"/Dashboard/AddAccessories"}
                    >
                      <IoBagAdd></IoBagAdd> Add Accessories
                    </Link>
                  </li>
                </>
              )}
=======

    <>

      <Navber></Navber>
      <div className="">
        <div className="drawer  lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-slate-200 rounded-s-3xl">
            {/* Page content here */}

            {children}

            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary  drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-[#f7f7f7] rounded-e-3xl text-gray-900">
              {/* Sidebar content here */}

              {
                isAdmin ?
                  <>
                    <div className="  font-sans mb-6 pt-20 w-[200px] flex flex-row justify-center items-center">
                      <div className="card w-96 mx-auto ">
                        <img className="w-32 h-32 mx-auto rounded-full -mt-20 border-8 border-white" src={user?.photoURL} alt="" />
                        <div className=" mt-2 ml-4 text-xl font-medium">{user?.displayName}<span className="text-red-600">(Admin)</span></div>



                      </div>
                    </div>
                    <hr className="mt-1 mb-2"></hr>
                    <li>
                      <Link className="font-semibold focus:text-red-500 active:text-red-500" href={"/Dashboard/AdminProfile"}> <CgProfile></CgProfile>  Admin Profile</Link>
                    </li>
                    <li>
                      <Link className="font-semibold focus:text-red-500 active:text-red-500" href={"/Dashboard/Users"}> <MdGroupAdd></MdGroupAdd> All Users</Link>
                    </li>
                    <li>
                      <Link className="font-semibold focus:text-red-500 active:text-red-500" href={"/Dashboard/AddPet"}><MdAddToPhotos></MdAddToPhotos> Add Pet</Link>
                    </li>
                    <li>
                      <Link className="font-semibold focus:text-red-500 active:text-red-500" href={"/Dashboard/AcceptPet"}><MdLibraryAddCheck></MdLibraryAddCheck> Accept Pet</Link>
                    </li>
                    <li>
                      <Link className="font-semibold focus:text-red-500 active:text-red-500" href={"/Dashboard/AddAccessories"}><IoBagAdd></IoBagAdd> Add Accessories</Link>
                    </li>
                    <li>
                      <Link className="font-semibold focus:text-red-500 active:text-red-500" href={"/Dashboard/ManageReview"}><IoCompassOutline></IoCompassOutline> Manage Review</Link>
                    </li>
                    <li>
                      <Link className="font-semibold focus:text-red-500 active:text-red-500" href={"/Dashboard/AvailableAccessories"}><AiFillShop></AiFillShop> Available Accessories</Link>
                    </li>
                   
                  </>
                  :

                  <>

                    <div>
                      <div className=" font-sans pt-20  w-[200px] flex flex-row justify-center items-center">
                        <div className="card w-96 mx-auto ">
                          <img className="w-32 h-32 mx-auto rounded-full -mt-20 border-8 border-white" src={user?.photoURL} alt="" />
                          <div className=" mt-2 ml-4 text-xl font-medium">{user?.displayName}<span className="text-blue-600">(User)</span></div>



                        </div>
                      </div>
                    </div>
                    <hr className="mt-3"></hr>
                    <li>
                      <Link className="font-semibold focus:text-red-500 active:text-red-500" href={"/Dashboard/UserProfile"}> <CgProfile></CgProfile> User Profile</Link>
                    </li>
                    <li>
                      <Link className="font-semibold focus:text-red-500 active:text-red-500" href={"/Dashboard/AddPet"}> <MdAddToPhotos></MdAddToPhotos>  Add Pet</Link>
                    </li>
                    <li>
                      <Link className="font-semibold focus:text-red-500 active:text-red-500" href={"/Dashboard/MyPet"}> <MdBookmarkAdded></MdBookmarkAdded>  My Added Pet</Link>
                    </li>
                    <li>
                      <Link className="font-semibold focus:text-red-500 active:text-red-500" href={"/Dashboard/MyCart"}> <MdShoppingCartCheckout></MdShoppingCartCheckout>  My Cart</Link>
                    </li>
                    <li>
                      <Link className="font-semibold focus:text-red-500 active:text-red-500" href={"/Dashboard/AddAccessories"}><IoBagAdd></IoBagAdd> Add Accessories</Link>
                    </li>
                    <li>
                      <Link className="font-semibold focus:text-red-500 active:text-red-500" href={"/Dashboard/AvailableAccessories"}><AiFillShop></AiFillShop> Available Accessories</Link>
                    </li>
                    <li>
                      <Link className="font-semibold focus:text-red-500 active:text-red-500" href={"/Dashboard/MyCart"}> <MdShoppingCartCheckout></MdShoppingCartCheckout>  My Cart</Link>
                    </li>
                    <li>
                      <Link className="font-semibold focus:text-red-500 active:text-red-500" href={"/Dashboard/PaymentHistory"}><MdOutlinePayment /> Your Payment History</Link>
                    </li>
                  </>
              }
>>>>>>> ce972aa0f1f075fbc3a1202a771fd597584e44ae

              <br></br>
              <br></br>
              <hr></hr>
              <li>
<<<<<<< HEAD
                <Link href={"/"}>
                  {" "}
                  <FaHome></FaHome>Home
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  {" "}
                  <MdContactSupport></MdContactSupport> About
                </Link>
              </li>
              <li>
                <Link href={"/contact"}>
                  {" "}
                  <MdContactPhone></MdContactPhone> Contact
                </Link>
              </li>
=======
                <Link href={"/"}> <FaHome></FaHome>Home</Link>
              </li>
              <li>
                <Link href={"/about"}> <MdContactSupport></MdContactSupport> About</Link>
              </li>
              <li>
                <Link href={"/contact"}> <MdContactPhone></MdContactPhone> Contact</Link>
              </li>

>>>>>>> ce972aa0f1f075fbc3a1202a771fd597584e44ae
            </ul>
          </div>
        </div>
      </div>
    </>
<<<<<<< HEAD
=======

>>>>>>> ce972aa0f1f075fbc3a1202a771fd597584e44ae
  );
};

export default HOCAuth(MainDashboard);
