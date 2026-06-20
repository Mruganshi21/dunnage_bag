import { connectDB, Message } from './lib/mongodb.js';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await connectDB();
  } catch (err) {
    console.error('DB connection error:', err);
    return res.status(500).json({ success: false, error: 'Database connection failed' });
  }

  if (req.method === 'POST') {
    try {
      const message = new Message(req.body);
      await message.save();

      const { name, email, phone, subject, message: msgBody } = req.body;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.OWNER_EMAIL,
        replyTo: email,
        subject: `New Contact: ${subject || 'No Subject'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${msgBody}</p>
        `,
      });

      return res.status(201).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error('POST Error:', error);
      return res.status(500).json({ success: false, error: 'Failed to send message' });
    }
  }

  if (req.method === 'GET') {
    try {
      const messages = await Message.find().sort({ createdAt: -1 });
      return res.json(messages);
    } catch (error) {
      console.error('GET Error:', error);
      return res.status(500).json({ error: 'Failed to fetch messages' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
