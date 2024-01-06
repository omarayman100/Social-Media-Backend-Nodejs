import jwt from 'jsonwebtoken';
import MessageModel from '../../../database/models/message.model.js';
import authMiddleware from '../../middleware/authMiddleware.js'; 

const AddMsg = async (req, res) => {
  try {
    const { message, recivedId } = req.body;

    await MessageModel.create({ message, recivedId });

    res.json({ message: 'Message is sent' });
  } catch (error) {
    res.status(500).json({ message: 'Error while adding message', error });
  }
};

const GetUserMsg = async (req, res) => {
  try {
    const { recivedId } = req.body;

    const messages = await MessageModel.find({ recivedId: req.user._id });

    res.json({ message: 'success', data: messages });
  } catch (error) {
    res.status(500).json({ message: 'Error while getting user messages', error });
  }
};

export { AddMsg, GetUserMsg };
