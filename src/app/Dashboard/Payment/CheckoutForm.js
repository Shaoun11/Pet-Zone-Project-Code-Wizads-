"use client"
import { AuthContext } from "@/app/Provider/AuthProvider";
import useCart from "@/app/hooks/useCart";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";


const CheckoutForm = () => {

  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const { mycart, refetch } = useCart();

  const totalPrice = mycart.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );
  console.log(totalPrice);

  const vatPrice = mycart.reduce(
    (total, item) => total + parseFloat(item.price) / 10,
    0
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const address = event.target.address.value;
    const number = event.target.number.value;
    const currency = event.target.currency.value;
    const email = user?.email;

    const data = {name, address, number, currency, email,totalPrice};
    console.log(data);
    fetch("https://pet-zone-project-next-js.vercel.app/order", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => {
            
          console.log(data);
         window.location.replace(data?.url)
        })
   
  };
  return (
    <div className="lg:ml-72">
      <div className="relative mx-auto w-full bg-white">
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                Please Fill Up Your Checkout From
                <span className="mt-2 block h-1 w-10 bg-red-600 sm:w-20"></span>
              </h1>
              <form
                action=""
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col space-y-4"
              >
                <div>
                  <label
                    for="email"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Your billing name
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="name"
                    placeholder="Plese type your billing name"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div className="relative">
                  <label
                    for="card-number"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Your phone number
                  </label>
                  <input
                    type="text"
                    id="phone-number"
                    name="number"
                    placeholder="01734--XXXX-XXXX"
                    className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-red-500"
                  />
                  <img
                    src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                    alt=""
                    className="absolute bottom-3 right-3 max-h-4"
                  />
                </div>
                <div className="relative">
                  <label
                    for="card-number"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Your address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Please type your address"
                    className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-red-500"
                  />
                  <img
                    src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                    alt=""
                    className="absolute bottom-3 right-3 max-h-4"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500">
                    Select your Currency
                  </p>
                  <div className="mr-6 flex flex-wrap">
                    <div className="my-1">
                      <label for="month" className="sr-only">
                        Select expiration month
                      </label>
                      <select
                        name="currency"
                        id="month"
                        className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-red-500"
                      >
                        <option value="BDT">BDT</option>
                        <option value="USDT">USDT</option>
                        <option value="EUR">EUR</option>
                      </select>
                    </div>
                  </div>
                </div>
                <p className="mt-10 text-center text-sm font-semibold text-gray-500">
                  By placing this order you agree to the{" "}
                  <a
                    href="#"
                    className="whitespace-nowrap text-red-500 underline hover:text-teal-600"
                  >
                    Terms and Conditions
                  </a>
                </p>
                <button
                  type="submit"
                  className="mt-4 inline-flex w-full items-center justify-center rounded bg-red-500 py-2.5 px-4 text-base font-semibold tracking-wide text-white outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 hover::ring-teal-500 sm:text-lg"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
          <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
            <h2 className="sr-only">Order summary</h2>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
            </div>
            {mycart.map((contest, index) => (
              <div className="relative">
                <ul className="space-y-5">
                  <li className="flex justify-between">
                    <div className="inline-flex">
                      <img src={contest.image} alt="" className="max-h-16" />
                      <div className="ml-3">
                        <p className="text-base font-semibold text-white">
                          {contest.name}
                        </p>
                        <p className="text-sm font-medium text-white text-opacity-80">
                          Pdf, doc Kindle
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-white">
                      ${contest.price}
                    </p>
                  </li>
                </ul>
                <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
              </div>
            ))}

            <div className="relative text-white">
              <div className="space-y-2">
                <p className="flex justify-between text-lg font-bold text-white">
                  <span>Total price:$ {totalPrice}</span>
                  <span>${totalPrice}</span>
                </p>
                <p className="flex justify-between text-sm font-medium text-white">
                  <span>Vat: 10%</span>
                  <span>${vatPrice}</span>
                </p>
              </div>
              <h3 className="mb-5 text-lg mt-12 font-bold">Support</h3>
              <p className="text-sm font-semibold">
                +01 653 235 211{" "}
                <span className="font-light">(International)</span>
              </p>
              <p className="mt-1 text-sm font-semibold">
                support@nanohair.com <span className="font-light">(Email)</span>
              </p>
              <p className="mt-2 text-xs font-medium">
                Call us now for payment related issues
              </p>
            </div>
            <div className="relative mt-10 flex">
              <p className="flex flex-col">
                <span className="text-sm font-bold text-white">
                  Money Back Guarantee
                </span>
                <span className="text-xs font-medium text-white">
                  within 30 days of purchase
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
