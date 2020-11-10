import React from "react"
import CartStatus from '../components/CartStatus'
import Product from "../components/Product"

const productData = [
  {
    name: 'Water Bottle',
    sku: 'price_1HiNkpEncg17e61HdiErZOkH',
    price: 1500,
    image: 'https://www.fillmurray.com/300/300',
    currency: 'USD'
  },
  {
    name: 'Formal Shoe',
    sku: 'price_1HiJklEncg17e61HJvgC9VGR',
    price: 3000,
    image: 'https://www.fillmurray.com/300/300',
    currency: 'USD'
  }
]


export default function Home() {
  
  return (
    <div> 
      <CartStatus />
      <div style={{margin:"20px"}}>
        {
          productData.map((product)=>(
            <Product key={product.sku} product={product} />
          ))
        }
      </div>
    </div>
  )
}
