import React from "react"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_KLSysmXwiDBAfXUzFYLUxwnw")

export default function CheckoutSession({location}) {
  
    const redirectToCheckout = async ()=> {
        const stripe = await stripePromise;
        const response = await fetch('/.netlify/functions/checkout');
        const data = await response.json();

        const result = await stripe.redirectToCheckout({
            sessionId: data.id
        })
    }

  return (
      <div>
        <div>Hello Checkout Session</div>

        <button onClick={redirectToCheckout}>Checkout</button>
      </div>
    )
}
