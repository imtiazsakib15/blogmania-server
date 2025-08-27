import { catchAsync } from '../../utils/catchAsync';
import { PostService } from './post.service';

const createPost = catchAsync(async (req, res) => {
  const post = await PostService.createPost(req.body);

  res.status(201).json({
    success: true,
    message: 'Post created successfully',
    data: post,
  });
});

const getAllPosts = catchAsync(async (req, res) => {
  const posts = await PostService.getAllPosts();

  res.status(200).json({
    success: true,
    message: 'Posts fetched successfully',
    data: posts,
  });
});

const getPostById = catchAsync(async (req, res) => {
  const post = await PostService.getPostById(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Post fetched successfully',
    data: post,
  });
});

export const PostController = { createPost, getAllPosts, getPostById };
