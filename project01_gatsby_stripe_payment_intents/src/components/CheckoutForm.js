import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js"
import React from "react"
import './checkoutForm.css'

const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const checkoutSubmit = async()=>{
        const response = await fetch("/.netlify/functions/checkout", {method: "post"});
        const data = await response.json();
        console.log("DAta = ",data);

        const result = await stripe.confirmCardPayment(data.client_secret, {
            payment_method: {
                card: elements.getElement(CardNumberElement),
                billing_details: {
                  name: 'Zia Khan',
                  email: "abc@gmail.com"
                },
            }
        })

        console.log("Result = ",result);


    }
  return (
    <div>
      Checkout Form
      <div>
          {/*<CardElement options={CARD_ELEMENT_OPTIONS} />*/ }

        <CardNumberElement options={CARD_ELEMENT_OPTIONS}/>
        <CardExpiryElement options={CARD_ELEMENT_OPTIONS}/>
        <CardCvcElement options={CARD_ELEMENT_OPTIONS}/>

      </div>
      <button onClick={checkoutSubmit}>
          Checkout
      </button>
    </div>
  )
}
