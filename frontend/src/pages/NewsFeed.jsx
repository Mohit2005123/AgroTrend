// src/NewsFeed.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';

const NewsFeed = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.post('/api/news/');
        console.log(response.data);
        setNewsData(response.data.newsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <div>
      <MyNavbar className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md" />
      <div className="pt-20 max-w-2xl mx-auto my-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Agriculture News Feed</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="space-y-6">
          {newsData.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 hover:bg-gray-100 transition duration-300"
              >
                <h2 className="text-xl font-semibold text-blue-600">{item.text}</h2>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsFeed;
