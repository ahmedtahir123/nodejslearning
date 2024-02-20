import * as nodemailer from "nodemailer";
import { BlogComment } from "./sender";

async function sendMail(
  comment: BlogComment
): Promise<void> {

  // SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ahmed.tahir000000@gmail.com",
      pass: "ckmd 1234 4321 vigj",
    },
  });

  // configure Email
  const mailOption =  {
    from: "ahmed.tahir000000@gmail.com", 
    to: "amuhammad@nisum.com", 
    subject: "Welcome to Node js app",
    text: `this email is through nodemail in nodejs`,
  }


  try {
    const result = await transporter.sendMail(mailOption)
    console.log(result);
  } catch (error) {
    console.log(error)
    
  }
}

export default sendMail;