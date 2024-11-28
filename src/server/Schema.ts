import { gql } from "apollo-server-express"; //will create a schema
const Schema = gql`
  type Person {
    id: ID!
    name: String
  }
  type orderItem {
    id: String
    name: String
    value: Int
  }
  type order {
    orderId: String
    sequence: Int
    marketplaceServicesEndpoint: String
    origin: String
    totals: [orderItem]
  }
  #handle user commands
  type Query {
    #will return multiple Person instances
    getAllPeople: [Person]
    #has an argument of id of type Integer.
    getPerson(id: Int): Person
    getOrders: order
  }
`;
export default Schema;
