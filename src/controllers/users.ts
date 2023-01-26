import { Response, NextFunction, Request } from 'express';
import User from '../models/User';
import UserRequest from 'interfaces/UserRequest';
import validator from '../validation/validator';
import userSchema from '../validation/userValidation';
import GenericError from '../utils/GenericError';
import bcrypt from 'bcrypt';

export const signup = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error } = await validator({ schema: userSchema, data: req.body });
    if (error) throw new GenericError(error, 400);

    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = { ...req.body, password: hashedPassword };
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) throw new GenericError('Email already exists', 400);

    const user = new User(userData);
    await user.save();

    res.json({
      status: 201,
      message: 'Success',
      user: user
    });
  } catch (error: unknown) {
    next(error);
  }
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find({});

    res.json({
      status: 200,
      message: 'Success',
      totalCount: users.length,
      items: users
    });
  } catch (error) {
    next(error);
  }
};
