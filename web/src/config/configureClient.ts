import {  ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { SERVER } from './index'

  const WithApollo = new ApolloClient<NormalizedCacheObject>({
    uri: SERVER,
    cache: new InMemoryCache(),
  });
  
export default WithApollo;
  