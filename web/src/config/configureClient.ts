// https://medium.com/@garganurag893/next-js-apollo-graphql-client-setup-a55e9f692a72

import { ApolloClient } from 'apollo-client'
import { from } from '@apollo/client'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import withApollo from 'next-with-apollo'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'
import { SERVER } from './index'

let authToken = null


const httpLink = new HttpLink({
  fetch,
  uri: SERVER,
})

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: '',
    },
  });
  // Add onto payload for WebSocket authentication
  // eslint-disable-next-line no-param-reassign
  (operation as any & { authToken: string | undefined }).authToken = authToken

  return forward(operation)
})


export default withApollo(
  ({ initialState }) => new ApolloClient({
    // @ts-ignore
    link: from([authMiddleware, httpLink]),
    cache: new InMemoryCache().restore(initialState || {}),
  }),
)
