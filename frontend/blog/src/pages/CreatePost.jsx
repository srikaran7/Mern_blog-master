import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    image: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const data = await res.json();
        console.log('Post created:', data);
        navigate('/'); // redirect to homepage
      }
    } catch (err) {
      console.error('Error creating post:', err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-6 p-4">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="w-full p-2 border rounded"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Write your blog..."
          className="w-full p-2 border rounded"
          rows="6"
          value={formData.content}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          className="w-full p-2 border rounded"
          value={formData.image}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
