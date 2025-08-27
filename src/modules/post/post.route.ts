import { Router } from 'express';
import { PostController } from './post.controller';
import { PostValidation } from './post.validation';
import { validateRequest } from '../../utils/validateRequest';

const router = Router();

router.post(
  '/',
  validateRequest(PostValidation.createPostSchema),
  PostController.createPost,
);

router.get('/', PostController.getAllPosts);

export const PostRoute = router;
