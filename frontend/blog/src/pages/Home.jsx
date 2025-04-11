import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from "../components/HeroSection";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Home - Blog Website"; // Set page title for SEO

    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/posts');
        if (!res.ok) {
          throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setPosts(data.reverse());
        setError(null);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 text-gray-800">
      {/* Hero Section */}
      <HeroSection />

      {/* Blog posts section */}
      <section className="py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-16">
            Explore Our Latest Blogs
            <span className="block w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></span>
          </h1>

          {loading ? (
            <div className="flex justify-center py-12">
              <div
                className="animate-spin rounded-full h-14 w-14 border-4 border-blue-500 border-t-transparent"
                aria-label="Loading"
              ></div>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-600 text-xl font-semibold">Error: {error}</p>
              <p className="text-gray-500 mt-2">Please try refreshing the page or check the server.</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Retry
              </button>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <Link
                  to={`/post/${post._id}`}
                  key={post._id}
                  className="group transform hover:-translate-y-1 transition duration-300 ease-in-out"
                >
                  <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl overflow-hidden flex flex-col h-full transition-all">
                    {post.image && (
                      <div className="h-52 overflow-hidden max-h-52">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src = '/images/fallback-image.jpg'; // Ensure fallback image exists
                          }}
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-gray-500 mb-2">
                        By <span className="font-semibold text-blue-600">{post.author || 'Unknown'}</span>
                      </p>
                      <p className="text-gray-700 text-sm mb-5 line-clamp-3">
                        {post.content}
                      </p>
                      <span className="mt-auto inline-block text-blue-600 hover:text-blue-800 text-sm font-medium transition">
                        Read full article →
                      </span>
                    </div>
                    {post.tags?.length > 0 && (
                      <div className="px-6 pb-4">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1 rounded-full shadow-sm"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No blog posts found at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;