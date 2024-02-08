"use client"
import { MdStar } from "react-icons/md";

const AddedReview = async() => {
    const response =await fetch(`http://localhost:5001/reviews`)
    const data =await response.json();
    return (
        <div>

            {
                data.map((review)=>
                <div className="p-2 lg:p-6">
                <div className="md:flex justify-between items-center mb-6">
                    <div className="md:flex gap-6 mb-2 md:mb-0">
                        <div className="w-14 h-14 rounded-full bg-slate-400 mb-2 md:mb-0">
                            <img src={review.userphoto} alt="" className="w-full h-full rounded-full object-cover" />
                        </div>

                        <div>
                            <p className="font-semibold mb-1">
                                {review.username}
                            </p>
                            <p className="text-sm">
                              Bangladesh
                            </p>
                        </div>
                    </div>

                    <div className="flex text-[#fdcc0d] text-lg">
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                    </div>
                </div>

                <p className="font-medium ml-[79px] text-sm md:text-base">
                    {review.details}
                </p>
                <hr className="my-1" />
            </div>
                )
            }
                           

                        </div>
    );
};

export default AddedReview;