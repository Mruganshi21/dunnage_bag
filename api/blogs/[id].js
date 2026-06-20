import { connectDB, Blog } from '../../lib/mongodb.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  await connectDB();

  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const blog = await Blog.findById(id);
      return res.json(blog);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch blog' });
    }
  }

  if (req.method === 'PUT') {
    try {
      const blog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
      return res.json({ success: true, blog });
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Failed to update blog' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      await Blog.findByIdAndDelete(id);
      return res.json({ success: true });
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Failed to delete blog' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
