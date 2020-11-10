import React from "react"
import { useShoppingCart } from "use-shopping-cart"
import CartStatus from "../components/CartStatus";

export default function Cart() {

    const { cartDetails, incrementItem, decrementItem, redirectToCheckout } = useShoppingCart();
    console.log("Cart Details = ",cartDetails);
    console.log(Object.keys(cartDetails));

    if(!Object.keys(cartDetails).length) return <div>Cart is Empty</div>

  return (
   <div >
       <h1>Cart</h1>
       <CartStatus />
       <div>
           <button onClick={()=>{
               redirectToCheckout();
           }}>Checkout</button>
       </div>
       {
           Object.keys(cartDetails).map((item)=> (
                <div key={cartDetails[item].sku} style={{border: "1px solid gray", borderRadius: "5px", margin: "20px", padding:"10px"}}>
                    <div>Name: {cartDetails[item].name}</div>
                    <div>Price: {cartDetails[item].price}</div>
                    <div><img width="150px" src={cartDetails[item].image} /></div>
                    <div>
                        <span>Quantity: {cartDetails[item].quantity}</span> -- <span>Total Price: {cartDetails[item].value}</span>
                    </div>
                    <button onClick={()=>{
                        incrementItem(cartDetails[item].sku)
                    }}>+</button>
                    <button onClick={()=>{
                        decrementItem(cartDetails[item].sku)
                    }}>-</button>
                </div>
           ))
       }
   </div>
  )
}
