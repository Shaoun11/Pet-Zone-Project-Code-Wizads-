"use client";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Header";
import Slider from "@/app/Components/Slider";
import { AuthContext } from "@/app/Provider/AuthProvider";
import axios from "axios";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

export default async function PetAccessoriesDetails({ params }) {
  const { id } = params;
  const { user } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
  //Fetch single Accessories product by id.
  const products = await fetch(
    `https://pet-zone-project-next-js.vercel.app/petshop/${id}`
  );
  const data = await products.json();
  const { _id, animal, name, category, price, description, image } = data;

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        petId: _id,
        name,
        image,
        category,
        description,
        price: price,
        quantity: quantity,
        customerEmail: user.email,
        customerName: user.displayName,
        customerPhoto: user.photoURL,
      };

      axios
        .post("https://pet-zone-project-next-js.vercel.app/mycart", cartItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-right",
              icon: "success",
              title: `This item added to your cart`,
              showConfirmButton: false,
              timer: 1500,
            });
            // refetch();
          }
        });
    } else {
      Swal.fire({
        title: "Please login",
        text: "Login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "http://localhost:3000/login";
        }
      });
    }
  };

  // Calculte the discount Price.
  const originalPrice = data.price;
  const percentage = 10;
  const discountPrice = (percentage * originalPrice) / 100;
  const totalPrice = originalPrice - discountPrice;

  return (
    <>
      <Navbar></Navbar>

      <div className="h-full">
        <div className="container mx-auto mt-20 ">
          <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32  md:gap-10 ">
            <div className="w-full flex justify-end">
              <img
                className="lg:w-[592px] lg:h-[420px] object-cover"
                src={image}
                alt=""
              />
            </div>
            <div className="order-none md:order-2">
              <h2 className="mb-4 text-2xl font-extrabold text-black md:leading-tight sm:text-left md:text-4xl ml-5">
                {name}
              </h2>
              <div className="gap-10">
                <div className="text-xl  space-y-2">
                  <div className="flex items-center mb-4">
                    <img
                      className="ml-5 h-[50px] w-[50px] rounded-full"
                      src="https://i.ibb.co/QXnJWq2/pexels-maksim-goncharenok-9956275.jpg"
                      alt=""
                    />
                    <div className="ml-5 text-base  text-slate-500">
                      <p className="font-semibold text-[17px] text-black ">
                        Caroline Valentina
                      </p>
                      <p className="text-base">
                        Pawsitive Haven Animal Shelter
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 py-2 ml-5 text-[18px] lg:w-[500px]">
                    {data.description}
                  </div>
                </div>
                <div className="mt-2 ml-5 text-xl space-y-2 ">
                  <div className="flex divide-x-2 gap-10">
                    <div className="space-y-1">
                      <p>
                        <span className="font-semibold">Species</span> :
                        &nbsp;&nbsp; {animal}
                      </p>
                      <p>
                        <span className="font-semibold">Price :</span>{" "}
                        &nbsp;&nbsp; ${price}
                      </p>
                    </div>
                    <div className="pl-7 space-y-2">
                      <p>
                        <span className="font-semibold">Discount :</span>{" "}
                        <span className="text-red-600 font-semibold">
                          &nbsp;10%
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold">Total Price :</span>{" "}
                        &nbsp;&nbsp;${totalPrice}
                      </p>
                    </div>
                  </div>
                  <div className="flex ">
                    <p className="text-lg font-semibold mr-2">Quantity:</p>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        // e.stopPropagation();
                        setQuantity(parseInt(e.target.value));
                      }}
                      min={1}
                      className="w-1/4 rounded-sm border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] p-2"
                    />
                  </div>

                  {/* Static ratting */}
                  <div>
                    <div className="flex py-[6px]">
                      <span className="flex items-center gap-2">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-6 h-6 text-red-500"
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
                          className="w-6 h-6 text-red-500"
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
                          className="w-6 h-6 text-red-500"
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
                          className="w-6 h-6 text-red-500"
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
                          className="w-6 h-6 text-red-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="flex  gap-24">
                    <div className="flex">
                      <button className="mt-5 bg-[#ef4444] text-white py-1 px-4 rounded transition-all hover:bg-yellow-500 active:scale-95">
                        Buy Now
                      </button>
                    </div>
                    <div className="flex">
                      <button onClick={handleAddToCart} className="mt-5 bg-[#ef4444] text-white font-medium -py-1 px-4 rounded transition-all hover:bg-yellow-500 active:scale-95">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider in accessories product details page */}
        <div className="container mx-auto mt-20 pb-20">
          <Slider></Slider>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
