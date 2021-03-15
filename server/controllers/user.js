import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModal from '../models/user.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await UserModal.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res
      .status(200)
      .json({
        user: { id: existingUser._id, username: existingUser.username },
        token,
      });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
export const register = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  console.log(req.body, 'body');

  try {
    const existingUser = await UserModal.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: 'User already exists' });

    if (!password || password.length < 6)
      return res.status(400).json({
        message: 'Password is required and should be atleast 6 characters long',
      });

    if (!username) return res.status(400).json({ message: 'Name is required' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'Password does not match' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({
      email,
      password: hashedPassword,
      username,
    });

    const token = jwt.sign({ email, id: result._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ user: { id: result._id, username }, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });

    console.log(error);
  }
};
