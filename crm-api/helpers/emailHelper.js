import nodemailer from "nodemailer";

const emailProcessor = async (emailData) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SMTP,
    port: +process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail(emailData);

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

export const otpNotification = async(userInfo)=>{
   
    const mailBody=
      {
        from: '"Laptop Store 👻" <owcftrfkwww7cnpk@ethereal.email>', // sender address
        to: userInfo.email, // list of receivers
        subject: "You have received an OTP", // Subject line
        text: `Hi there, here is the OTP as per your request ${userInfo.token}`, // plain text body
        html: 
        `
        <p>Hi there</p>
        <br/>
        <br/>
        Hi there, here is the OTP as per your request ${userInfo.token}
        <br/>
        <br/>
        <br/>
        <br/>
        Kind regards,
        IT Support Team
        `, // html body
      }
    
  emailProcessor(mailBody)
  }