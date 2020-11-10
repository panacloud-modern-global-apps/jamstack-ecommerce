import React from "react"
import { useShoppingCart } from "use-shopping-cart"

export default function Product({product}) {

    const { addItem } = useShoppingCart();
  return (
   <div style={{border: "1px solid gray", borderRadius: "5px", margin: "20px", padding:"10px"}}>
       <div>Name: {product.name}</div>
       <div>Price: {product.price}</div>
       <div><img width="150px" src={product.image} /></div>
       <button onClick={()=> {
           addItem(product)
       }}
       
       >Add To Cart</button>
   </div>
  )
}
