import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

export const Comment = new GraphQLObjectType({
  name: "Comment",
  description: "Details of a comment",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    comment: { type: GraphQLString },
  })
})