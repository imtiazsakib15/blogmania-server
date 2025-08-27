import mongoose, { Schema } from 'mongoose';
import { CreatePostInput } from './post.validation';

const postSchema = new Schema<CreatePostInput>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 200,
    },
    content: {
      type: String,
      required: true,
      minlength: 10,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

postSchema.index({ title: 'text', content: 'text' });

export const Post = mongoose.model<CreatePostInput>('Post', postSchema);
