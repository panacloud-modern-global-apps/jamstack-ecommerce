import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"

import Client from 'shopify-buy'

const client = Client.buildClient({
  domain:`shanstore2.myshopify.com`,
  storefrontAccessToken: "a9da41bccc9eb31891047c268e893226"
})


export default function Home({data}) {

  const [checkoutSession, setCheckoutSession] = useState();

  useEffect(()=>{
    (async () =>{
      const sessoin = await client.checkout.create();
      console.log("session = ",sessoin);
    })()
  },[]);


  console.log(data.allShopifyProduct.edges);
  return (
      <div>
        <div>Hello world!</div>
        <div>
          {
            data.allShopifyProduct.edges.map(({node})=>(
              <div key={node.id}>
                <div>
                  Name: {node.title}
                </div>
                <div>
                  Description: {node.description}
                </div>
                <div>
                  <img width="100px" src={node.images[0].originalSrc} />
                </div>
                <div>
                  Price: {node.variants[0].price}
                </div>
                <div>
                  <button onClick={()=>{
                    console.log("Test")
                  }}>Add to Cart</button>
                </div>
              </div>
            ))
          }
        </div>
        
        
      </div>
  ) 
}


export const query = graphql`
{
  allShopifyProduct {
    edges {
      node {
        handle
        id
        title
        shopifyId
        variants {
          price
          sku
          title
          id
        }
        images {
          originalSrc
        }
        description
      }
    }
  }
}
`