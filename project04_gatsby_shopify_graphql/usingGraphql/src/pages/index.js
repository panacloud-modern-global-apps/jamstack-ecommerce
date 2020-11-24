import { gql, useMutation } from "@apollo/client";
import React, { useEffect } from "react"

const createCheckout = gql`
mutation checkoutCreate($input: CheckoutCreateInput!) {
  checkoutCreate(input: $input) {
    checkout {
      id
      webUrl
      lineItems(first:100){
        edges{
          node{
            quantity
            id
            title,
            variant{
              id
              priceV2{
                amount
              }
            }
          }
        }
      }
    }
    checkoutUserErrors {
      code
      field
      message
    }
  }
}
`

const addLineItem = gql`
mutation checkoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
  checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
    checkout {
      id
      webUrl
      lineItems(first:100){
        edges{
          node{
            quantity
            id
            title,
            variant{
              id
              priceV2{
                amount
              }
            }
          }
        }
      }
    }
    checkoutUserErrors {
      code
      field
      message
    }
  }
}
`

export default function Home({data}) {

  const [createCheckoutMutaiton, {data:checkoutData}] = useMutation(createCheckout);
  const [addLineItemMuation, {data:addLineItemData}] = useMutation(addLineItem);


  useEffect(()=>{
    (async()=>{
      
      const response = await createCheckoutMutaiton({
        variables: {
          input: {}
        }
      });
      console.log("checkout session created ",response);
    
    })()
    


  },[])

  return (
    <div>
        <div>Hello Shopify Gatsby Apollo</div>
        <div>
          <button onClick={()=>{
            window.open(checkoutData.checkoutCreate.checkout.webUrl)
          }}>
            Checkout
          </button>
        </div>
        <div>
          {
            data.allShopifyProduct.edges.map(({node})=>(
              <div key={node.id} style={{border: "1px solid gray", borderRadius:"5px", margin:"10px", padding:"10px"}}>
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
                  <button onClick={async()=>{
                    console.log("add to cart clicked");

                    const responseAfterAdd = await addLineItemMuation({
                      variables:{
                        lineItems:[
                          {
                            quantity:1,
                            variantId: node.variants[0].id.split("__")[2]
                          }
                        ],
                        checkoutId: checkoutData.checkoutCreate.checkout.id
                      }
                    });
                    console.log("resposne after adding line item = ",responseAfterAdd);
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
