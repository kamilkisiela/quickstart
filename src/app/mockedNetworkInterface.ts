import { 
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
import { typeDefs } from './schema';

const schema = makeExecutableSchema({typeDefs});
addMockFunctionsToSchema({ schema });
console.log('its happening');
export const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });