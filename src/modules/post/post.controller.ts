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

export const PostController = { createPost };
