import express from 'express';
import { signIn, signUp, verify } from './user.controller.js';

const Userrouter = express.Router();


Userrouter.post('/signup',signUp)
Userrouter.post('/signin',signIn)
Userrouter.post('/verify/:token',verify)









export default Userrouter;
