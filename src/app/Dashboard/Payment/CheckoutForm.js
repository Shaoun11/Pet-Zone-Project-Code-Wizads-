import { AuthContext } from '@/app/Provider/AuthProvider';
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const CheckoutForm = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://pet-zone-project-next-js.vercel.app/petshop'
                );
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // const totalPrice = items.reduce((total, item) => total + item.price, 0);
    const totalPrice = 999;
    console.log(totalPrice);


    useEffect(() => {
        const createPaymentIntent = async () => {
            if (totalPrice > 0) {
                try {
                    const response = await fetch("https://pet-zone-project-next-js.vercel.app/create-payment-intent", {
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
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank you for your payment",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log("Transaction id: ", paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // const payment = {
                //     email: user.email,
                //     price: totalPrice,
                //     transactionId: paymentIntent.id,
                //     date: new Date(),
                //     cartIds: items.map(item => item._id),
                //     menuItemIds: items.map(item => item.menuId),
                //     status: "pending",
                // }
                // console.log("payment saved ", res.data);
                // if (res.data?.paymentResult?.insertedId) {
                //     Swal.fire({
                //         position: "top-end",
                //         icon: "success",
                //         title: "Thank you",
                //         showConfirmButton: false,
                //         timer: 1500
                //     });
                // }
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
                    <button className="btn bg-red-500 text-white px-10 my-7" type="submit" >
                        Pay
                    </button>
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