"use client";
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const register = () => {
    const { createUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    // const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log(name, email, password, photo);

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
                fetch("http://localhost:5001/users", {
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

    return (
        <div className='bg-gradient-to-r from-[#ef4444] to-[#ff5050] py-14'>
            <div className='w-2/5 mx-auto rounded-lg bg-slate-50'>
                <h1 className='text-3xl text-center font-bold pt-10'>Registration Form</h1>
                <form onSubmit={handleRegister} className="card-body py-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered rounded" required />
                    </div>
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo" className="input input-bordered rounded" required />
                    </div>
                    {
                        errorMessage && <p className="text-center text-red-500">{errorMessage}</p>
                    }
                    <div className="form-control mt-4">
                        <button className="btn bg-gradient-to-r from-[#ef4444] to-[#ff5050] rounded text-slate-50">Register</button>
                    </div>
                </form>
                <p className="text-center pb-6">Already have an account? Please <Link href="/login"><span className="text-red-500 font-bold">Login</span></Link> here</p>
            </div>
        </div>
    );
};

export default register;