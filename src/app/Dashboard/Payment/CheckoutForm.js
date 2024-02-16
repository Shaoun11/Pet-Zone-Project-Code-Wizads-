import { AuthContext } from '@/app/Provider/AuthProvider';
import useCart from '@/app/hooks/useCart';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const CheckoutForm = () => {
    const [error, setError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const { mycart, refetch } = useCart();


<<<<<<< HEAD
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'http://localhost:5001/petshop'
                );
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
=======
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(
    //                 'https://pet-zone-project-next-js.vercel.app/mycart'
    //             );
    //             const data = await response.json();
    //             setAllCart(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);
>>>>>>> ce972aa0f1f075fbc3a1202a771fd597584e44ae

    // const myCart = allCart.filter((cart) => cart.customerEmail === user.email);
    // console.log(mycart);


    const totalPrice = mycart.reduce((total, item) => total + ((parseFloat(item.price)) * (item.quantity)), 0);
    console.log(totalPrice);


    useEffect(() => {
        const createPaymentIntent = async () => {
            if (totalPrice > 0) {
                try {
                    const response = await fetch("http://localhost:5001/create-payment-intent", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ price: totalPrice })
                    });
                    if (response.ok) {
                        const data = await response.json();
                        console.log(data.clientSecret);
                        setClientSecret(data.clientSecret);
                    } else {
                        console.error("Failed to create payment intent:", response.statusText);
                    }
                } catch (error) {
                    console.error("Error creating payment intent:", error);
                }
            }
        };

        createPaymentIntent();
    }, [totalPrice]);



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if (error) {
            console.log("Payment error: ", error);
            setError(error.message);
        }
        else {
            console.log("Payment method: ", paymentMethod);
            setError("");
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.displayName || "anonymous",
                }
            }
        })

        if (confirmError) {
            console.log("Confirm error");
        }
        else {
            console.log("Payment intent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log("Transaction id: ", paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // const address = e.target.address.value;

                const payment = {
                    customerEmail: user.email,
                    customerName: user.displayName,
                    // address: address,
                    amount: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: mycart.map(item => item._id),
                    petItemIds: mycart.map(item => item.petId),
                    status: "pending",
                }
                const res = await axios.post("https://pet-zone-project-next-js.vercel.app/payments", payment);
                console.log("payment saved ", res.data);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        }
    }

    return (
        <div className='mt-20'>
            <form onSubmit={handleSubmit}>
                <CardElement className='border-2 border-red-200 py-5 px-3  mx-60'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='text-center'>
                    <button className="btn bg-red-500 text-white px-10 my-7" type='submit' disabled={!stripe || !clientSecret}>
                        Pay
                    </button>

                    {/* <button className="btn bg-red-500 text-white px-10 my-7" disabled={!stripe || !clientSecret} onClick={() => document.getElementById('my_modal_1').showModal()}>Pay</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Please Enter your delivery address</h3>
                            <div className="modal-action justify-center">
                                <form method="dialog" className='w-full'>
                                    <input type='text' name='address' className='w-full rounded-sm border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] p-2 mb-3' /><br></br>
                                    <button type="submit" className="btn bg-red-500 text-white text-lg px-10">Confirm</button>
                                </form>
                            </div>
                        </div>
                    </dialog> */}

                </div>
                <p className="text-red-600 text-center">{error}</p>
                {
                    transactionId && <p className="text-green-500 text-center">Your transaction id: {transactionId}</p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;