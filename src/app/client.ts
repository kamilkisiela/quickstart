import { ApolloClient } from 'apollo-client';
import { mockNetworkInterface } from './mockedNetworkInterface';
const client = new ApolloClient({
  networkInterface: mockNetworkInterface,
  // dataIdFromObject: (object: any) => object.id,
});
export function getClient(): ApolloClient {
  return client;
}
