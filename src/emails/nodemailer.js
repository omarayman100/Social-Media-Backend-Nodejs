import nodemailer from 'nodemailer';
const sendemail=async()=>{


const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: "omar.zain.1001@gmail.com",
      pass: "hcfbbctsxfkvxibb",
    },
  });





  const info = await transporter.sendMail({
    from: '"Saraha-support-team 👻" <omar.zain.1001@gmail.com>', // sender address
    to: "omar.ayman.fekry@outlook.com", // list of receivers
    subject: "Confirmation email ✔", // Subject line
    text: "Email is now confirmed", // plain text body
    html: "<h1>Hello world?</h1>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

export default sendemail