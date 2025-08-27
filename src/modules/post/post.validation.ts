import { z } from 'zod';

const createPostSchema = z.object({
  body: z.object({
    title: z
      .string()
      .trim()
      .min(3, { message: 'Title must be at least 3 characters long' })
      .max(200, { message: 'Title must not exceed 200 characters' }),

    content: z
      .string()
      .min(10, { message: 'Content must be at least 10 characters long' }),

    image: z.url({ message: 'Image must be a valid URL' }),

    author: z
      .string()
      .trim()
      .min(2, { message: 'Author name must be at least 2 characters long' })
      .max(100, { message: 'Author name must not exceed 100 characters' }),

    tags: z
      .array(z.string().trim().min(1, { message: 'Tag cannot be empty' }))
      .default([]),

    likes: z
      .number()
      .int({ message: 'Likes must be an integer' })
      .min(0, { message: 'Likes cannot be negative' })
      .default(0),
  }),
});

export type CreatePostInput = z.infer<typeof createPostSchema>['body'];

export const PostValidation = { createPostSchema };
