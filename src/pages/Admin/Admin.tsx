import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

interface Message {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

interface Blog {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

const Admin = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'messages' | 'blogs'>('messages');
  const [showModal, setShowModal] = useState(false);
  const [blogForm, setBlogForm] = useState({ title: '', content: '', image: '' });
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const ADMIN_PASSWORD = 'dunnagebag123';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  if (!authenticated) {
    return (
      <div className="admin-page">
        <div className="admin-container">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            {error && <p className="error-msg">{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }

  const loadMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/messages');
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error('Failed to load messages:', error);
    }
    setLoading(false);
  };

  const loadBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/blogs');
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error('Failed to load blogs:', error);
    }
    setLoading(false);
  };

  const handleTabChange = (tab: 'messages' | 'blogs') => {
    setActiveTab(tab);
    if (tab === 'messages') loadMessages();
    else loadBlogs();
  };

  const handleAddBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogForm)
      });
      setShowModal(false);
      setBlogForm({ title: '', content: '', image: '' });
      loadBlogs();
    } catch (error) {
      console.error('Failed to add blog:', error);
    }
  };

  const handleDeleteBlog = async (id: string) => {
    if (!confirm('Delete this blog?')) return;
    try {
      await fetch(`http://localhost:5000/api/blogs/${id}`, { method: 'DELETE' });
      loadBlogs();
    } catch (error) {
      console.error('Failed to delete blog:', error);
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-container">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h2>Admin Panel</h2>

        <div className="admin-tabs">
          <button 
            className={activeTab === 'messages' ? 'active' : ''} 
            onClick={() => handleTabChange('messages')}
          >
            Messages ({messages.length})
          </button>
          <button 
            className={activeTab === 'blogs' ? 'active' : ''} 
            onClick={() => handleTabChange('blogs')}
          >
            Blogs ({blogs.length})
          </button>
        </div>

        {activeTab === 'messages' && (
          <div className="messages-list">
            {loading ? <p>Loading...</p> : messages.length === 0 ? <p>No messages yet.</p> : (
              messages.map((msg) => (
                <div key={msg._id} className="message-card">
                  <h4>{msg.subject}</h4>
                  <p><strong>From:</strong> {msg.name} ({msg.email})</p>
                  <p><strong>Phone:</strong> {msg.phone}</p>
                  <p>{msg.message}</p>
                  <span className="msg-date">{new Date(msg.createdAt).toLocaleString()}</span>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'blogs' && (
          <div className="blogs-management">
            <button className="add-blog-btn" onClick={() => setShowModal(true)}>
              + Add New Blog
            </button>
            
            {loading ? <p>Loading...</p> : blogs.length === 0 ? <p>No blogs yet.</p> : (
              <div className="blogs-list">
                {blogs.map((blog) => (
                  <div key={blog._id} className="blog-item">
                    {blog.image && <img src={blog.image} alt={blog.title} />}
                    <div className="blog-info">
                      <h4>{blog.title}</h4>
                      <p>{blog.content.substring(0, 100)}...</p>
                      <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                    </div>
                    <button 
                      className="delete-btn" 
                      onClick={() => handleDeleteBlog(blog._id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              <h3>Add New Blog</h3>
              <form onSubmit={handleAddBlog}>
                <div className="form-group">
                  <label>Title</label>
                  <input 
                    type="text" 
                    value={blogForm.title}
                    onChange={e => setBlogForm({...blogForm, title: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Image URL</label>
                  <input 
                    type="text" 
                    value={blogForm.image}
                    onChange={e => setBlogForm({...blogForm, image: e.target.value})}
                    placeholder="https://..."
                  />
                </div>
                <div className="form-group">
                  <label>Content</label>
                  <textarea 
                    value={blogForm.content}
                    onChange={e => setBlogForm({...blogForm, content: e.target.value})}
                    rows={5}
                    required
                  />
                </div>
                <div className="modal-actions">
                  <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
                  <button type="submit">Add Blog</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;