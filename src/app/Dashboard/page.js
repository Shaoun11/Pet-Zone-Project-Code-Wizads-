"use client"
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import HOCAuth from "@/utils/HOCAuth";
import Link from "next/link";
import Navber from "../Components/Header";


const MainDashboard = ({ children }) => {
   const{user}=useContext(AuthContext)

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
    
  <>
  <Navber></Navber>
 
        
  <div className="">
    <div className="drawer  lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
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
        <ul className="menu p-4 w-80 min-h-full bg-indigo-200 text-gray-900">
          {/* Sidebar content here */}

          {
            isAdmin ?
              <>
              <div className="  font-sans mb-6 pt-20 w-[200px] flex flex-row justify-center items-center">
  <div className="card w-96 mx-auto ">
     <img className="w-32 h-32 mx-auto rounded-full -mt-20 border-8 border-white" src={user.photoURL} alt=""/>
     <div className=" mt-2 ml-4 text-xl font-medium">{user.displayName}(Admin)</div>

    
     
  </div>
</div>
                <li>
                  <Link href={"/Dashboard/AdminProfile"}>Admin Profile</Link>
                </li>
                <li>
                  <Link href={"/Dashboard/Users"}>All Users</Link>
                </li>
                <li>
                  <Link href={"/Dashboard/AddPet"}>Add Pet</Link>
                </li>
                <li>
                  <Link href={"/Dashboard/AcceptPet"}>Accept Pet</Link>
                </li>
                <li>
                  <Link href={"/Dashboard/AddAccessories"}>Add Accessories</Link>
                </li>
                <li>
                  <Link href={"/Dashboard/AvailableAccessories"}>Available Accessories</Link>
                </li>
              </>
              :
              
              <>

<div>
                        <div className=" font-sans pt-20  w-[200px] flex flex-row justify-center items-center">
  <div className="card w-96 mx-auto ">
     <img className="w-32 h-32 mx-auto rounded-full -mt-20 border-8 border-white" src={user.photoURL} alt=""/>
     <div className=" mt-2 ml-4 text-xl font-medium">{user.displayName}(User)</div>

    
     
  </div>
</div>
                        </div>
                <li>
                  <Link href={"/Dashboard/userProfile"}>User Profile</Link>
                </li>
                <li>
                  <Link href={"/Dashboard/AddPet"}>Add Pet</Link>
                </li>
                <li>
                  <Link href={"/Dashboard/MyPet"}>My Added Pet</Link>
                </li>
                <li>
                  <Link href={"/Dashboard/MyCart"}>My Cart</Link>
                </li>
              </>
          }

          <br></br>
          <br></br>

          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>

        </ul>
      </div>
    </div>
  </div>
  </>

    );
};

export default HOCAuth(MainDashboard);