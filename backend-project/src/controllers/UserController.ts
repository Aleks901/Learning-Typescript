import { Request, Response } from 'express';
import { User } from '../models/User';

const users: User[] = [];

export const createUser = (req: Request, res: Response): void => {
  const { userName, emailAddress } = req.body;

  if (!userName) {
    res.status(400).json({ message: 'A username is required to register.' });
    return;
  }

  if (!emailAddress) {
    res.status(400).json({ message: 'An email address is required to register.' });
    return;
  }

  const newUser = new User(userName, emailAddress);
  users.push(newUser);

  res.status(201).json({ message: `New user added! ${newUser.userName}.` });
};
