import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import { SearchLocation } from "../modules/searchLocation";

const LocationSearch = () => {
  const clientParam = { uri: "https://api-dev.spacenextdoor.com/graphql" };
  const client: any = new ApolloClient(clientParam);
  return (
    <ApolloProvider client={client}>
      <SearchLocation />
    </ApolloProvider>
  );
};
export default LocationSearch;
