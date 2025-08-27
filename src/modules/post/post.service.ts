import { Post } from './post.model';
import { CreatePostInput } from './post.validation';

const createPost = async (payload: CreatePostInput) => {
  const post = await Post.create(payload);
  return post;
};

const getAllPosts = async () => {
  const posts = await Post.find().sort({ createdAt: -1 });
  return posts;
};

export const PostService = { createPost, getAllPosts };
