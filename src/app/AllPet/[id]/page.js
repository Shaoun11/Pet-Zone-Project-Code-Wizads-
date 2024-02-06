"use client" 
import AddedReview from "@/app/Components/AddedReview";
import Footer from "@/app/Components/Footer";
import Navber from "@/app/Components/Header";
import PostReview from "@/app/Components/PostReview";

export default async function petdetails({ params }) {
  const { id } = params;
  console.log(id);

  const response = await fetch(
    `https://pet-zone-project-next-js.vercel.app/petdata/${id}`
  );
  const data = await response.json();
  const {
    _id,
    name,
    species,
    age,
    gender,
    color,
    description,
    image,
    adoption_fee,
    available,
  } = data;

  return (
    <>
      <Navber></Navber>
      <div>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className=" lg:ml-12 lg:mr-12 md:ml-12 md:mr-12 py-24 mx-auto">
            <div className="lg:w-[100%]  mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 md:w-[600px] md:h-[600px] sm:w-[800px] mt-8 object-cover object-center rounded border border-gray-200"
                src={image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 md:pl-10 pl-3 pr-3 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font font-semibold text-gray-500 tracking-widest">
                  {species}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {name}
                </h1>

                <div className=" flex gap-3 items-center font-semibold text-gray-800  hover:bg-gray-100 rounded-md hover:cursor-pointer">
                  <div>
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://randomuser.me/api/portraits/women/24.jpg"
                      alt="Rebecca Burke"
                    />
                  </div>

                  <div className="flex flex-col">
                    <div>Rebecca Burke</div>
                    <div className="text-gray-400 text-sm font-normal">
                      Bangladesh
                    </div>
                  </div>
                </div>

                <div className="flex ">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <div className="flex flex-wrap mt-2 items-center space-x-2 mb-2">
                      <div className="ratings"></div>
                      <span className="text-yellow-500"></span>

                      <svg
                        width="6px"
                        height="6px"
                        viewBox="0 0 6 6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
                      </svg>

                      <span className="text-green-500 font-medium">
                        Verified
                      </span>
                    </div>
                  </span>

                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p className="font-semibold  ">
                  Available: <span className="text-red-500">{available}</span>{" "}
                </p>
                <p className="leading-relaxed pt-3">
                  {" "}
                  Designate specific areas for your pet to retreat to when they
                  need some quiet time. This can be a cozy bed, crate, or a
                  quiet corner.Pet-Proofing:Remove hazardous items that your pet
                  could potentially chew, swallow, or get tangled in. This
                  includes securing electrical cords, keeping toxic plants out
                  of reach, and using pet-safe cleaning products.Comfortable
                  Bedding:Provide your pet with a comfortable and well-padded
                  bed. This gives them a cozy space to rest and relax. {description}{" "}
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <div className="flex ml-6 items-center">
                    <div className="-ml-6">
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"></span>
                      <ul className="mb-5">
                        <li className="mb-1">
                          {" "}
                          <b className=" w-36 font-semibold inline-block">
                            Stock:
                          </b>
                          {available ? (
                            <span className="text-green-500">In Stock</span>
                          ) : (
                            <span className="text-red-500">Out of Stock</span>
                          )}
                        </li>
                        <li className="mb-1">
                          {" "}
                          <b className="font-medium w-36 inline-block">
                            Category:
                          </b>
                          <span className="text-gray-500">{gender}</span>
                        </li>
                        <li className="mb-1">
                          {" "}
                          <b className="font-medium w-36 inline-block">
                            Seller / Brand:
                          </b>
                          <span className="text-gray-500">{age}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <span className="title-font flex  font-medium text-2xl text-gray-900">
                      ${adoption_fee}
                    </span>
                  </div>
                  <div className="flex">
                    <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                      Add to Cart
                    </button>

                    <div>
                      <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto p-8  mt-8 rounded-2xl shadow-xl bg-white mb-8">
                    <p className="text-lg font-semibold mb-8">
                        3 reviews
                    </p>

                    <div>
                        <AddedReview />
                        <AddedReview />
                        <AddedReview />
                        <AddedReview />
                    </div>

                    <div>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="inline-flex items-center gap-x-2 border border-red-500 px-6 py-4 rounded-xl bg-red-500 hover:border-none text-white font-semibold cursor-pointer" onClick={() => document.getElementById('my_modal_5').showModal()}>Add a review</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box bg-white">
                                <PostReview />
                                <div className="modal-action ">
                                    <form className=" " method="dialog  ">
                                        <button className="btn text-white">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
      </div>
      <Footer></Footer>
    </>
  );
}
