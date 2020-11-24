import { ApolloProvider } from "@apollo/client";
import { client } from "./client";
import React from 'react'

export const wrapRootElement = ({element})=>(
    <ApolloProvider client={client}>
        {element}
    </ApolloProvider>
)