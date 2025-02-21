const typeDefs = `#graphql

type User {
    id: ID!
    name: String
    email: String
    password: String
}

type Mutation {
createUser(input:InputUser): User

}

type Query {
    getAllUsers: [User]
    getUser(id:ID!): User
}

input InputUser{
    name: String!
    email: String!
    password: String!
}

`;
export default typeDefs;
