import { Post } from './post.model';
import { CreatePostInput } from './post.validation';

const createPost = async (payload: CreatePostInput) => {
  const post = await Post.create(payload);
  return post;
};

export const PostService = { createPost };
