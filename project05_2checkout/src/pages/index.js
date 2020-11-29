import React from "react"

export default function Home() {

  console.log("TwoCoInlineCart = ",window.TwoCoInlineCart);


  return (
    <div>
      <div>Hello world!</div>


      <div>
        <button onClick={()=>{
            window.open("https://secure.2checkout.com/checkout/buy?merchant=250567165059&tpl=default&prod=W3QB872UAG&qty=1&prod=9VJT643VM2&qty=2")
        }}>
          Buy Now
        </button>
      </div>     


        <div>
          <button onClick={()=>{
            window.TwoCoInlineCart.products.removeAll();
                  window.TwoCoInlineCart.products.add({
                    code: 'W3QB872UAG',
                    quantity: 1
                }); // add products to cart

                console.log(window.TwoCoInlineCart);
          }}>
              Add To Cart Catalog Product
          </button>
          <br/>
          <button onClick={()=>{
            window.TwoCoInlineCart.setup.setMode('DYNAMIC');
            window.TwoCoInlineCart.cart.setCurrency('USD');
            window.TwoCoInlineCart.products.add({
              name: 'T-Shirt',
              quantity: 1,
              price: 20,
            });
          }}>
            Add To Cart Dynamic Product
          </button>
          
            <button onClick={()=>{
                  window.TwoCoInlineCart.cart.checkout();
                  console.log(window.TwoCoInlineCart);
            }}>
              Checkout
          </button>
        </div>



    </div>
   )
}
