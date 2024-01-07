import nodemailer from 'nodemailer';
import { html } from './user.email.html.js';
import jwt from 'jsonwebtoken'
const sendemail=async(options)=>{


const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: process.env.email,
      pass: process.env.pass,
    },
  });




  const token = jwt.sign({email:options.email},'Sercetoken')
  
  const info = await transporter.sendMail({
    from: `"Saraha-support-team 👻"<${process.env.email}> `, // sender address
    to: options.email, // list of receivers
    subject: "Confirmation email ✔", // Subject line
    html:html(token), // html body
  });

}

export default sendemail