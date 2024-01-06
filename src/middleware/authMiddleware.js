import jwt from 'jsonwebtoken';
import UserModel from '../../database/models/user.model.js';

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('token');

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - Token not provided' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET,'MyDataisSoData');
    const user = await UserModel.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized - Invalid user' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Error in authentication middleware', error });
  }
};

export default authMiddleware;
