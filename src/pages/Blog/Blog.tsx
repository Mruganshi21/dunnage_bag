import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/blogs');
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="blog-page"><div className="blog-container">Loading...</div></div>;
  }

  if (blogs.length === 0) {
    return (
      <div className="blog-page">
        <div className="blog-container">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h2>Blog</h2>
          <p>No blog posts yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="blog-container">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h2>Blog</h2>
        
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div key={blog._id} className="blog-card">
              {blog.image && (
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                </div>
              )}
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.content.substring(0, 150)}...</p>
                <span className="blog-date">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;