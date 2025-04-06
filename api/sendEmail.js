import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, phone, service, message, appointmentDate } = req.body;

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Change this if using another email provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "kharghardentist@gmail.com", // Change to dentist's email
      subject: "New Appointment Request",
      text: `Details of the person contacted you are as follows:
      
      Name: ${name}
      Email: ${email}
      Mobile: ${phone}
      Purpose: ${service}
      Appointment Date: ${appointmentDate}
      Message: ${message}`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return res.status(500).json({ error: error.message });
  }

}
