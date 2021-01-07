import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { createUploadLink } from "apollo-upload-client";
import { SubscriptionClient } from "subscriptions-transport-ws";

const {
  REACT_APP_HASURA_GQL = "http://207.154.241.194:8080/v1/graphql",
  REACT_APP_HASURA_SUBS = "ws://207.154.241.194:8080/v1/graphql",
  REACT_APP_FORMIC_API = "http://207.154.241.194:4000",
} = process.env;

export const FORMIC_MEDIA_URI = `${REACT_APP_FORMIC_API}/media`;
export const FORMIC_GQL_URI = `${REACT_APP_FORMIC_API}/graphql`;
export const HASURA_SUBS_URI = REACT_APP_HASURA_SUBS;
export const HASURA_GQL_URI = REACT_APP_HASURA_GQL;

const tokenKey = "FORMICA_AUTH_KEY";
export const getToken = () => localStorage.getItem(tokenKey);

export const setToken = (token: string) =>
  localStorage.setItem(tokenKey, token);

export const clearToken = () => localStorage.removeItem(tokenKey);

const setAuthHeaders = async (headers: any) => {
  const token = await getToken();
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  }
  return {
    headers,
  };
};

const authLink = setContext(async (_, { headers }) => setAuthHeaders(headers));

const httpLink = createHttpLink({
  uri: HASURA_GQL_URI,
});

const wsClient = new SubscriptionClient(HASURA_SUBS_URI, {
  reconnect: true,
  connectionParams: () => setAuthHeaders({}),
});
const wsLink = new WebSocketLink(wsClient);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: from([authLink, splitLink]),
  cache: new InMemoryCache({
    possibleTypes: {},
  }),
});

const uploadLink = createUploadLink({
  uri: FORMIC_GQL_URI,
});

export const uploadClient = new ApolloClient({
  link: from([authLink, uploadLink]),
  cache: new InMemoryCache(),
});

export default client;
