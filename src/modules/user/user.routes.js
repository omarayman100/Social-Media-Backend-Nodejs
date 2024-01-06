import express from 'express';
import { signIn, signUp } from './user.controller.js';

const Userrouter = express.Router();


Userrouter.post('/signup',signUp)
Userrouter.post('/signin',signIn)









export default Userrouter;
