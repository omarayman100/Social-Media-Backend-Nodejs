import UserModel from "../../../database/models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sendemail from "../../emails/nodemailer.js";

const signUp = async (req, res) => {
  try {
    const { name, email, password, age } = req.body;

    // Check if the email is already in use
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use' });
    }

    // Hash the password asynchronously
    const hash = await bcrypt.hash(password, 8);

    // Create or update the user
    const newUser = await UserModel.findOneAndUpdate(
      { email },
      { name, email, password: hash, age },
      { upsert: true, new: true }
    );

    res.json({ message: 'Signed up successfully', user: newUser });
    sendemail({email})
  } catch (error) {
    console.error('Error during sign-up:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user with the given email exists
    const user = await UserModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create a JWT token
      const token = jwt.sign(
        { name: user.name, userId: user._id, email: user.email },
        process.env.JWT_SECRET || 'MyDataisSoData',
        { expiresIn: '1h' }
      );

      // Send the token in the response
      return res.json({ message: 'Logged in successfully', token });
    }

    // If email or password is incorrect
    res.status(401).json({ message: 'Invalid email or password' });
  } catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { signUp, signIn };
