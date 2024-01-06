import express from 'express';
import { AddMsg, GetUserMsg } from './message.controller.js';
import authMiddleware from '../../middleware/authMiddleware.js';



const mesgrouter= express.Router();
mesgrouter.post('/',authMiddleware,AddMsg)
mesgrouter.get('/',authMiddleware,GetUserMsg)


export default mesgrouter;
