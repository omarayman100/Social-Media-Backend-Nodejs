import nodemailer from 'nodemailer';
import { htmlCode } from './html.js';
const sendemail=async(options)=>{


const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: "omar.zain.1001@gmail.com",
      pass: "hcfbbctsxfkvxibb",
    },
  });





  const info = await transporter.sendMail({
    from: '"Saraha-support-team 👻" <omar.zain.1001@gmail.com>', // sender address
    to: options.email, // list of receivers
    subject: "Confirmation email ✔", // Subject line
    html:htmlCode(`http://localhost:3030/verify/${options.email}`), // html body
  });

  console.log("Message sent: %s", info.messageId);
}

export default sendemail