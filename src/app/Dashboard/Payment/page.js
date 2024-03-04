"use client";

import React from 'react';
import Dashboard from "../page";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe("pk_test_51OK2mgGYIbORFhiIxImIV8kNhzFykiQOt0I0SNjAmswgFHVagf9GUYen0d4YWyLDpMHGoIyIv8nJ8pj6xxdfL45h00DgZEsEcD");

const Page = () => {
    return (
        <Dashboard>
         
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </Dashboard>
    );
};

export default Page;
