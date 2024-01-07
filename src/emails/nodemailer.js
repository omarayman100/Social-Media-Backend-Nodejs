import nodemailer from 'nodemailer';
import { html } from './user.email.html.js';
import jwt from 'jsonwebtoken'
const sendemail=async(options)=>{


const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: "omar.zain.1001@gmail.com",
      pass: "hcfbbctsxfkvxibb",
    },
  });




  const token = jwt.sign({email:options.email},'Sercetoken')
  
  const info = await transporter.sendMail({
    from: '"Saraha-support-team 👻" <omar.zain.1001@gmail.com>', // sender address
    to: options.email, // list of receivers
    subject: "Confirmation email ✔", // Subject line
    html:html(token), // html body
  });

}

export default sendemail