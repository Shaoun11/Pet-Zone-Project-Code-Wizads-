"use client"
import { MdStar } from "react-icons/md";

const AddedReview = () => {
    return (
        <div>
                            <div className="p-2 lg:p-6">
                                <div className="md:flex justify-between items-center mb-6">
                                    <div className="md:flex gap-6 mb-2 md:mb-0">
                                        <div className="w-14 h-14 rounded-full bg-slate-400 mb-2 md:mb-0">
                                            <img src="https://homez.ibthemespro.com/images/testimonials/testimonial-1.png" alt="" className="w-full h-full rounded-full object-cover" />
                                        </div>

                                        <div>
                                            <p className="font-semibold mb-1">
                                                Leslie Alexander
                                            </p>
                                            <p className="text-sm">
                                                Nintendo
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

                                <p className="font-medium text-sm md:text-base">
                                    Amazing pet, easy to buy and a  quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original products.
                                </p>
                            </div>

                            <hr className="my-6" />
                        </div>
    );
};

export default AddedReview;