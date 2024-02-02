"use client";

import HOCAuth from "@/utils/HOCAuth";
import Link from "next/link";
import useAdmin from "../hooks/useAdmin";


const page = ({ children }) => {
  console.log("In Dashboard");

  // const [isAdmin] = useAdmin();
  const isAdmin = true;

  return (

    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-center">
          {/* Page content here */}

          {children}

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            {
              isAdmin ?
                <>
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
                    <Link href={"/Dashboard/AddAccessories"}>Add Accessories</Link>
                  </li>
                </>
                :
                <>
                  <li>
                    <Link href={"/Dashboard/UserProfile"}>User Profile</Link>
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
  );
};

export default HOCAuth(page);
