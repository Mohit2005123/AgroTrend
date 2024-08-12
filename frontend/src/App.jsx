import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import ProductDetail from './pages/ProductDetail';
import Chat from './pages/Chat';
import NewsFeed from './pages/NewsFeed';
import Weather from './pages/Weather';
import Resources from './pages/Resources';
import CourseDetails from './pages/CourseDetails';
import CommunityForum from './pages/CommunityForum';
import RealTimeMarket from './pages/RealTimeMarket';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import ChatBot from './components/ChatBot';
import { FiMessageSquare } from 'react-icons/fi';

export default function App() {
  const { authUser }= useAuthContext();
  const [chatBotVisible, setChatBotVisible] = useState(false);

  const toggleChatBot = () => {
    setChatBotVisible(!chatBotVisible);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmermarketplace" element={<Marketplace />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path='/chat' element={<Chat />} />
        <Route path="/news" element={<NewsFeed />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/community" element={<CommunityForum />} />
        <Route path="/realtimemarket" element={<RealTimeMarket />} />
        <Route path="/login" element={authUser ? <Navigate to='/'/> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to='/'/> : <Signup />} />
      </Routes>

      <Toaster />

      {/* Toggle Button for ChatBot */}
      <button
        onClick={toggleChatBot}
        className="fixed bottom-4 right-4 bg-blue-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center"
      >
        <FiMessageSquare size={24} />
      </button>

      {/* ChatBot Component */}
      <ChatBot visible={chatBotVisible} onClose={toggleChatBot} />
    </Router>
  );
}

