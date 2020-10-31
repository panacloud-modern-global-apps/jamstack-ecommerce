import React from "react"
import { loadStripe } from "@stripe/stripe-js"


const stripePromise = loadStripe("pk_test_KLSysmXwiDBAfXUzFYLUxwnw")


export default function Home({location}) {

  

  const redirectToCheckout = async () => {
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1HiNkpEncg17e61HdiErZOkH", quantity: 3 },
          { price: "price_1Hhx11Encg17e61HRwNwsnuv", quantity: 3 }],
      successUrl: `${location.origin}/payment-success/`,
      cancelUrl: `${location.origin}/payment-error`,
    });
  }

  return (
      <div>
        <div>Hello world!</div>

        <button onClick={redirectToCheckout}>Checkout</button>
      </div>
    )
}
