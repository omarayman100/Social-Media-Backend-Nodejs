import express from 'express';
import dbConnection from './database/dbConnection.js';
import Userrouter from './src/modules/user/user.routes.js';
import mesgrouter from './src/modules/message/message.routes.js';
import dotenv from 'dotenv'
import UserModel from './database/models/user.model.js';

const app = express();
const port =3030;
dotenv.config()

app.use(express.json())


app.use(Userrouter)
app.use('/messages',mesgrouter)

dbConnection()
app.get('/', (req, res) => {
    res.send('Welcome to the server ')
})
app.get('/verify/:email',async (req, res) => {
    await UserModel.findOneAndUpdate({email:req.params.email},{verified:true})
    res.json({message:'User has been verified'})
})

app.listen(port, ()=>console.log(`Social media server listening on port ${port}`))