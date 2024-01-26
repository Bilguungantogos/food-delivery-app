import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "gantogos.bilguun48@gmail.com",
    pass: "ghaqsctapbqvgljs",
  },
});

export const sendEmail = async (email: string, subject: string) => {
  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email, // list of receivers
    subject: subject, // Subject line
    text: "Hello world?", // plain text body
    html: "<h1>Hello world?</h1>", // html body
  });
};
