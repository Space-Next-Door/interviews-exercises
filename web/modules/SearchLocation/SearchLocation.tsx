import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import { SearchLocation } from "../search/components/SearchLocation";

const LocationSearch = ({ onBackClick }) => {
  const clientParam = { uri: "https://api-dev.spacenextdoor.com/graphql" };
  const client: any = new ApolloClient(clientParam);
  return (
    <ApolloProvider client={client}>
      <SearchLocation onBackClick={onBackClick} />
    </ApolloProvider>
  );
};
export default LocationSearch;
