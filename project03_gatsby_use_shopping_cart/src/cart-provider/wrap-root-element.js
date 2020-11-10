import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"

const stripePromise = loadStripe("pk_test_KLSysmXwiDBAfXUzFYLUxwnw")

export const wrapRootElement = ({element})=> {
    return (
        <CartProvider
        mode="client-only"
        stripe={stripePromise}
        successUrl="http://localhost:8888/payment-success"
        cancelUrl="http://localhost:8888/"
        currency="USD"
        >
            {element}
        </CartProvider>
    )
}
