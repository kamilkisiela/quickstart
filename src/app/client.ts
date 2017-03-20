import { ApolloClient } from 'apollo-client';
import { mockNetworkInterface } from './mockedNetworkInterface';
const client = new ApolloClient({
  mockNetworkInterface
  //dataIdFromObject: (object: any) => object.id,
});
export function getClient(): ApolloClient {
  return client;
}
