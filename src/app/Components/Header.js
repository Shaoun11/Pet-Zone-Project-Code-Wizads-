"use client"
import Link from 'next/link';
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';









const Navber = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const handleProfile = () => {
    setProfile(!profile);
  };
      const { user, logOut } = useContext(AuthContext);
      
  



      const handelSingout = () => {
        logOut().then().catch();
      };
    const link=<>
    <li><Link href={"/"}>Home</Link></li>
    <li><Link href={"/AllPet"}>All Pet</Link></li>
    <li><Link href={"/AllAccessories"}>Accessories</Link></li>
    <li><Link href={"/about"}>About</Link></li>
    <li><Link href={"/contact"}>Contact</Link></li>
  

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
            src="https://i.ibb.co/WcRsrJ4/Picsart-24-01-25-00-49-42-732.png"
            alt=""
          />
          <a className="text-gray-600 normal-case font-bold mt-1 -ml-3 lg:text-sm md:text-sm text-[10px] ">
            
          </a>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className='className="lg:flex  md:flex mr-5  gap-3 navbar-end'>
            {user ? (
              <div  onClick={handleProfile} className='flex gap-2'>
              <div className='mt-2'>
                     <p>{user?.displayName}</p>
                   </div>
                   <div className="avatar">
                   <div className="w-10 rounded-full">
                     <img src={user?.photoURL}/>
                   </div>
               
                 </div>
              </div>
            ) : (
              <Link
                href="login"
                className="px-4 py-2 text-sm bg-red-500 rounded-full duration-300 text-white font-semibold"
              >
                Login
              </Link>
            )}
          </div>
                  {/* user profile */}
              <div className='flex'>
              <div
            onClick={handleProfile}
            className={`w-[280px] z-10 h-fit absolute  rounded-md shadow-md mr-9 mt-3 bg-opacity-50  backdrop-blur-md  hover:shadow-2xl bg-[#eae4e4] py-8 px-5 ${
              profile ? "-top-0 left-20 md:left-auto md:top-12 md:right-7 " : "hidden"
            } `}
          >
            <div className="w-[120px] h-[120px] mx-auto rounded-full border-2 border-red-500 overflow-hidden">
              <img
                src={user?.photoURL}
                className="w-[120px] h-[120px] mx-auto rounded-full"
                alt="profile"
              />
            </div>
            <div className="text-center  mt-5 ">
              <h1 className="text-base font-bold">Name: {user?.displayName}</h1>
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
              <div
                className="mt-4 my-btn"
                onClick={handelSingout}
              >
               <button className='bg-red-500 btn btn-outline w-full text-white border-none' > Logout</button>
              </div>
            </div>
          </div>
              </div>
      </div>
    );
};

export default Navber;
