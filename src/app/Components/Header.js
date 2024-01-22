"use client"
import Link from 'next/link';
import { useContext } from 'react';









const Navber = () => {
      const { user, logout } = useContext;
      
  



      const handelSingout = () => {
        logout().then().catch();
      };
    const link=<>
    <li><Link href={"/"}>Home</Link></li>
    <li><Link href={"/AllPet"}>All Pet</Link></li>
    <li><Link href={"/"}>Home</Link></li>
    <li><Link href={"/"}>Home</Link></li>
  

  </>
    return (
      <div className="navbar sticky -top-2 z-20 bg-opacity-30 h-20 bg-[#d4d9e4] static:text-white  ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>

          <img
            className="lg:w-28 md:w-32 w-20"
            src="https://i.ibb.co/YXgBvNY/Pet-Shop-Logo-7.png"
            alt=""
          />
          <a className="text-gray-600 normal-case font-bold mt-1 -ml-3 lg:text-sm md:text-sm text-[10px] ">
            
          </a>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="lg:flex  md:flex gap-3 navbar-end">
    
          {user?.email ? (
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="cursor-pointer">
                <div className="flex gap-2">
                  <div className="mt-2">
                    <p>{user?.displayName}</p>
                  </div>
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
              </label>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <div
                  onClick={handelSingout}
                  className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Logout
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Link
                href={"/login"}
                className=
                    "btn btn-outline cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-[#ef4444] hover:text-white"
                
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    );
};

export default Navber;