import { navigate } from "gatsby";
import React from "react"
import { useShoppingCart } from "use-shopping-cart"
import './cartstatus.css'
export default function CartStatus() {
  const { totalPrice, cartCount, clearCart } = useShoppingCart();
  return (
   <div  style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
       <div className="statusMargin">Total Price: {totalPrice}</div>
       <div className="statusMargin">Count: {cartCount}</div>
       <button className="statusMargin" onClick={()=>{
           navigate("/cart")
       }}>
           Go To Cart
       </button>
       <button className="statusMargin" onClick={()=> {
           clearCart();
       }}>
           Clear Cart
       </button>
   </div>
  )
}
