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

const getPostById = async (id: string) => {
  const post = await Post.findById(id);
  if (!post) throw new Error('Post not found');

  return post;
};

export const PostService = { createPost, getAllPosts, getPostById };
