import { connectDB, Blog } from '../lib/mongodb.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  await connectDB();

  if (req.method === 'POST') {
    try {
      const blog = new Blog(req.body);
      await blog.save();
      return res.status(201).json({ success: true, blog });
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Failed to create blog' });
    }
  }

  if (req.method === 'GET') {
    try {
      const blogs = await Blog.find().sort({ createdAt: -1 });
      return res.json(blogs);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch blogs' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
