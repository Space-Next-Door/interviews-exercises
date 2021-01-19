import {  ApolloClient, InMemoryCache } from '@apollo/client'
import { SERVER } from './index'

  const WithApollo = new ApolloClient({
    uri: SERVER,
    cache: new InMemoryCache(),
  });
  
export default WithApollo;
  