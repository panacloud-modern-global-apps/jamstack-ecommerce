import React, { useEffect } from "react"
import { useShoppingCart } from "use-shopping-cart"
export default function Product({product}) {

    const {clearCart} = useShoppingCart();
    useEffect(()=>{
        clearCart();
    },[])
    
  return (
   <div>
       Payment Successful
   </div>
  )
}
