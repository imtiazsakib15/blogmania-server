import { Router } from 'express';
import { IModuleRoute } from '../interfaces/route';
import { PostRoute } from '../modules/post/post.route';

const router = Router();

const moduleRoutes: IModuleRoute[] = [
  {
    path: '/posts',
    route: PostRoute,
  },
];

moduleRoutes.forEach((route: IModuleRoute) =>
  router.use(route.path, route.route),
);

export default router;
