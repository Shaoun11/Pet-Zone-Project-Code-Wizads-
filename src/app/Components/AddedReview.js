
import { useEffect, useState } from "react";
import { MdStar } from "react-icons/md";

const AddedReview = ({ _id }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`https://pet-zone-project-next-js.vercel.app/reviews`);
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);


    const petReview = reviews.filter((review) => review.petId === _id);

    const formatReviewTime = (reviewTime) => {
        const options = {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            timeZone: 'Asia/Dhaka',
        };

        return new Date(reviewTime).toLocaleString('en-US', options);
    };


    return (
        <div>

            {
                petReview.map((review) =>
                    <div key={review._id} className="p-2 lg:p-6">
                        <div className="md:flex justify-between items-center mb-6">
                            <div className="md:flex gap-6 mb-2 md:mb-0">
                                <div className="w-14 h-14 rounded-full bg-slate-400 mb-2 md:mb-0">
                                    <img src={review.userphoto} alt="" className="w-full h-full rounded-full object-cover" />
                                </div>

                                <div>
                                    <p className="font-semibold mb-1">
                                        {review.username}
                                    </p>
                                    <p className="text-sm md:text-base mb-1">
                                        {formatReviewTime(review.reviewTime)}
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