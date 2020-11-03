import { Elements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react"
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe("pk_test_KLSysmXwiDBAfXUzFYLUxwnw");

export default function Home() {
  return (
    <div>
      Hello world!
      
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}
