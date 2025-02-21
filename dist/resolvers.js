import { GraphQLError } from "graphql";
import users from "./users";
const resolvers = {
    Mutation: {
        createUser: (__, args) => {
            const latestId = String(users.length + 1);
            const newUser = {
                id: latestId,
                ...args.input
            };
            users.push(newUser);
            return newUser;
        },
    },
    Query: {
        getAllUsers: () => {
            // mocking db calls
            return users;
        },
        getUser: (__, args) => {
            try {
                console.log(args);
                // mocking db callls
                // users.findOne({where:{ id:args.id}})
                const data = users.filter((user) => user.id === args.id)[0];
                console.log(data);
                return data;
            }
            catch (error) {
                throw new GraphQLError(error.message);
            }
        }
    }
};
export default resolvers;
