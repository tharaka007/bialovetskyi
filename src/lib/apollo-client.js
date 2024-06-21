import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://favourites.lk/graphql',
  cache: new InMemoryCache(),
});

export default client;
