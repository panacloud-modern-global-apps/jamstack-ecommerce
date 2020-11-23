import React, { useEffect, useState } from "react"

import Client from 'shopify-buy'

const client = Client.buildClient({
  domain:`shanstore2.myshopify.com`,
  storefrontAccessToken: "a9da41bccc9eb31891047c268e893226"
})

export default function Cart() {

    const [checkoutSession, setCheckoutSession] = useState();
    useEffect(()=>{
        (async()=>{
            const session = await client.checkout.fetch(localStorage.getItem("checkoutid"));
            setCheckoutSession(session);
            console.log("session loadded test = ",session);
            console.log("checkoutSession.lineItems = ",session.lineItems);
        })()
    },[]);
    return (
        <div>
            <div>Cart</div>
            <div>
                <button onClick={()=>{

                    window.open(checkoutSession.webUrl);

                }} >Checkout</button>
            </div>
            {
                checkoutSession && checkoutSession.lineItems.map((item)=>(
                    <div key={item.id} style={{border: "1px solid gray", borderRadius:"5px", margin:"10px", padding:"10px"}}>
                        <div>
                            Name: {item.title}
                        </div>
                        <div>
                            <img width="100px" src={item.variant.image.src} />
                        </div>
                        <div>
                            Price: {item.variant.price}
                        </div>
                        <div>
                            quantity: {item.quantity}
                        </div>
                        <div>
                            <button onClick={async()=>{
                                const sessionAdd = await client.checkout.updateLineItems(checkoutSession.id, [
                                    {
                                        id: item.id,
                                        quantity: item.quantity+1
                                    }
                                ])
                                setCheckoutSession(sessionAdd);
                                console.log("seesion after = ",sessionAdd);
                            }}>+</button>
                            <button onClick={async()=>{
                                const sessionMinus = await client.checkout.updateLineItems(checkoutSession.id, [
                                    {
                                        id: item.id,
                                        quantity: item.quantity-1
                                    }
                                ])
                                setCheckoutSession(sessionMinus);
                            }}>-</button>
                        </div>
                </div>
                ))
            }
        </div>
    );
}