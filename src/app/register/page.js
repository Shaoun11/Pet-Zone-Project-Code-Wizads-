"use client";
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { imageUpload } from '../hooks/image';
import Navber from '../Components/Header';

const Register = () => {
    const { createUser,logInUserGoogle } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    // const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        const photourl = form.get("photo");
        console.log(name, email, password, photourl);
        const imageData=await imageUpload(photourl);
        const photo=imageData.data.display_url;

        setErrorMessage("");

        if (password.length < 6) {
            setErrorMessage("Password should be at least 6 characters");
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            setErrorMessage("Password must contain at least one uppercase letter");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // navigate("/");

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        console.log("Profile updated");
                    })
                    .catch()
                const user = { email, name, photo };
                fetch("https://pet-zone-project-next-js.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log("User added to database");
                        }
                    })
            })

            .catch(error => {
                console.error(error);
                setErrorMessage(error.message);
            })
    }

    const handleGoogleLogIn = () => {
      logInUserGoogle()
          .then(result => {
              console.log(result.user);
           
          })
          .catch(error => {
              console.error(error);
          })
  }

    return (
    <>
      <Navber></Navber>
        <div className="bg-gray-200 w-full min-h-screen flex items-center justify-center">
        <div className="w-full py-8">
          <div className="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">
            <div className="flex items-center justify-center space-x-2">
              <img
                className=" w-32"
                src="https://i.ibb.co/WcRsrJ4/Picsart-24-01-25-00-49-42-732.png"
                alt=""
              />
            </div>

            <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">
              Sign Up
            </h2>
            <p className="text-center text-sm text-gray-600 mt-2">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-red-500 hover:text-yellow-500 hover:underline"
                title="Sign In"
              >
                Sign in here
              </a>
            </p>

            <form onSubmit={handleRegister} className="my-8 text-sm">
              <div className="flex flex-col my-4">
                <label htmlFor="name" className="text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-2 p-2 border bg-white border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  placeholder="Enter your name"
                />
              </div>

             
              <div className="flex flex-col my-4">
                <label htmlFor="email" className="text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-2 p-2 border border-gray-300 focus:outline-none bg-white focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col my-4">
                <label htmlFor="email" className="text-gray-700">
                  Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  id="email"
                  className="mt-2 p-2 border border-gray-300 focus:outline-none bg-white focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex flex-col my-4">
                <label htmlFor="email" className="text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="mt-2 p-2 border border-gray-300 focus:outline-none bg-white focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  placeholder="Password"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember_me"
                  id="remember_me"
                  className="mr-2 focus:ring-0 rounded"
                />
                <label htmlFor="remember_me" className="text-gray-700">
                  I accept the{" "}
                  <a
                    href="#"
                    className="text-red-500 hover:text-yellow-500 hover:underline"
                  >
                    terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-red-500 hover:text-yellow-500 hover:underline"
                  >
                    privacy policy
                  </a>
                </label>
              </div>

              <div className="my-4 flex items-center justify-end space-x-4">
                <button className="bg-red-500 hover:bg-yellow-500 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">
                  Sign Up
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between">
              <div className="w-full h-[1px] bg-gray-300"></div>
              <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div className="text-sm">
              <a
                href="#"
                onClick={handleGoogleLogIn}
                className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-200 hover:bg-gray-200 rounded"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 326667 333333"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path
                    d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                    fill="#4285f4"
                  ></path>
                  <path
                    d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                    fill="#34a853"
                  ></path>
                  <path
                    d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                    fill="#fbbc04"
                  ></path>
                  <path
                    d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                    fill="#ea4335"
                  ></path>
                </svg>
                <span>Sign up with Google</span>
              </a>
            </div>
          </div>
          
        </div>
       
      </div>
    </>
    );
};

export default Register;