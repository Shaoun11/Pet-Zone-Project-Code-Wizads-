"use client"
import { MdArrowOutward } from "react-icons/md";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";



const PostReview = () => {

    const { user } = useContext(AuthContext);


    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const reviewInfo = {
            details: data.details,
            username: user?.displayName,
            useremail: user?.email,
            userphoto: user?.photoURL,
        }

        console.log(reviewInfo);

        axios.post('https://pet-zone-project-next-js.vercel.app/reviews', reviewInfo)
            .then(res => {
                if (res.data.insertedId) {
                    reset();

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'Review added successfully',
                    });


                }
            }).catch((error) => {
                // An error occurred
                console.log(error.message);
            });
    }

    return (
        <div>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full  mx-auto mb-7">
                    <div className="flex  flex-col">
                        <label className="md:px-4 mb-1 ">
                            Review Description
                        </label>

                        <textarea rows={5} type="text" {...register("details")} name="details" placeholder="Enter short description" className="border bg-white border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                    </div>
                </div>

                <button type="submit" className="inline-flex  items-center gap-x-2 border border-red-500 px-6 py-4 rounded-xl hover:bg-red-500 hover:border-none hover:text-white text-red-500 font-semibold cursor-pointer">
                    Submit Review
                    <MdArrowOutward className='text-xl' />
                </button>
            </form>
        </div>
    );
};

export default PostReview;