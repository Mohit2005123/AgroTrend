// src/pages/CommunityForum.js
import React, { useState, useRef, useEffect } from 'react';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import postsData from '../data/posts.json'; // Import the posts JSON file
import { Card, CardBody } from '@nextui-org/react';

const CommunityForum = () => {
  const [posts, setPosts] = useState(postsData); // Use the imported JSON data
  const [newPost, setNewPost] = useState({ title: '', content: '', author: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef(null);

  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postId = posts.length + 1;
    const date = new Date().toISOString().split('T')[0];
    const post = { ...newPost, id: postId, date };
    setPosts([...posts, post]);
    setNewPost({ title: '', content: '', author: '' });
    setIsModalOpen(false); // Close the modal after submission
  };

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <MyNavbar />
      <div className="max-w-4xl mx-auto my-8 p-4 pt-24">
        <h1 className="text-4xl font-bold mb-6">Community Forum</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-6"
        >
          Write Post
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {posts.map((post) => (
            <div key={post.id} className="w-full max-w-sm mx-auto">
              <Card isHoverable className="w-full">
                <CardBody>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-700 mb-2">{post.content}</p>
                  <div className="text-sm text-gray-500">
                    <span>By {post.author}</span> | <span>{post.date}</span>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div
              ref={modalRef}
              className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto"
            >
              <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  value={newPost.title}
                  onChange={handleInputChange}
                  placeholder="Post Title"
                  className="w-full p-2 mb-4 border rounded-lg"
                  required
                />
                <textarea
                  name="content"
                  value={newPost.content}
                  onChange={handleInputChange}
                  placeholder="Write your experience..."
                  className="w-full p-2 mb-4 border rounded-lg"
                  rows="6"
                  required
                />
                <input
                  type="text"
                  name="author"
                  value={newPost.author}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full p-2 mb-4 border rounded-lg"
                  required
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  Post
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg ml-4"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CommunityForum;
