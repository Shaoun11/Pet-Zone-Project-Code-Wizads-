"use client";

import HOCAuth from "@/utils/HOCAuth";

import Link from "next/link";

const page = () => {
  console.log("In Dashboard");

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
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
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/AdminProfile"}>Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HOCAuth(page);
