import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/posts/${id}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error('Error fetching post:', err);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-2">by {post.author}</p>
      {post.image && (
        <img src={post.image} alt="Blog" className="w-full h-64 object-cover rounded mb-4" />
      )}
      <p className="text-gray-700 mb-6">{post.content}</p>

      {/* Optional Edit Button */}
      <Link
        to={`/edit/${post._id}`}
        className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded"
      >
        Edit Post
      </Link>
    </div>
  );
};

export default PostDetails;
