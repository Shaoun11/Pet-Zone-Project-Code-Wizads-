"use client";
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";


const login = () => {
    const { logInUser, logInUserGoogle } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    // const navigate = useNavigate();
    // const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMessage("");

        logInUser(email, password)
            .then(result => {
                console.log(result.user);
                // navigate(location?.state ? location?.state : "/");
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
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL,
                }
                fetch("http://localhost:5001/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='bg-gradient-to-r from-[#ef4444] to-[#ff5050] py-14'>
            <div className='w-2/5 mx-auto rounded-lg bg-slate-50'>
                <h1 className='text-3xl text-center font-bold pt-10'>Please Login</h1>
                <form onSubmit={handleLogin} className="card-body py-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered rounded" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered rounded" required />
                    </div>
                    {
                        errorMessage && <p className="text-center text-red-500">Email or Password is not valid</p>
                    }
                    <div className="form-control mt-4">
                        <button className="btn bg-gradient-to-r from-[#ef4444] to-[#ff5050] rounded text-slate-50">Login</button>
                    </div>
                </form>
                <p className="flex items-center justify-center pb-2">Or, Login with <span className='ml-2 text-xl'><a onClick={handleGoogleLogIn}><FcGoogle /></a></span></p>
                <p className="text-center pb-5">Don't have any account? Please <Link href="/register"><span className="text-red-500 font-bold">Register</span></Link> here</p>
            </div>
        </div>
    );
};

export default login;