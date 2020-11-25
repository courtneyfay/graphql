import { GraphQLInt, GraphQLNonNull } from "graphql";
import { Post } from '../types/Post';
import { fakeDatabase } from '../../FakeDatabase';

export default {
  post: {
    type: Post,
    description: "Gets details about a specific post",
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve: (_, { id }) => {
      return fakeDatabase.getBlogPost(id);
    }
  }
}