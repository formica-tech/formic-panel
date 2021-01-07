import { ApolloProvider } from "@apollo/client";
import React, { FunctionComponent } from "react";
import client from "gql/apollo";

const Gql: FunctionComponent = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Gql;
