import { Comment, CommentInputType } from '../types/Comment';
import { fakeDatabase } from '../../FakeDatabase';

export default {
  addPost: {
    type: Comment,
    description: "Creates a new comment for a blog post",
    args: {
      comment: { type: CommentInputType },
    },
    resolve: (_, { comment }) => {
      return fakeDatabase.addNewComment(comment);
    }
  }
}