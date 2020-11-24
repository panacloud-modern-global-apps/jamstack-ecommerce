import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from 'cross-fetch'

export const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://shanstore2.myshopify.com/api/graphql",
        fetch,
        headers: {
            "X-Shopify-Storefront-Access-Token": "a9da41bccc9eb31891047c268e893226"
        }
    }),
    cache: new InMemoryCache()
})