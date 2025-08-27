import { ZodObject } from 'zod';
import { NextFunction, Request, Response } from 'express';

export const validateRequest = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedData = await schema.parseAsync(req.body);
      req.body = parsedData;
      next();
    } catch (error) {
      next(error);
    }
  };
};
