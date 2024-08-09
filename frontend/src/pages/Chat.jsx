import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import chatsData from '../data/chats.json';
import usersData from '../data/users.json';

const Chat = () => {
    const [selectedUser, setSelectedUser] = useState('Seller 1');
    const [message, setMessage] = useState('');
    const [chats, setChats] = useState({});
    const [users, setUsers] = useState([]);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        // Set chats and users data
        setChats(chatsData);
        setUsers(usersData);
    }, []);

    useEffect(() => {
        // Scroll to bottom when messages change
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [selectedUser, chats]);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleSendMessage = () => {
        if (selectedUser && message.trim()) {
            // Add the new message to the chat history
            setChats((prevChats) => ({
                ...prevChats,
                [selectedUser]: [
                    ...(prevChats[selectedUser] || []),
                    { text: message, type: 'outgoing' },
                ],
            }));
            setMessage('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default behavior (new line in input field)
            handleSendMessage();
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
            <MyNavbar />
            <div className="flex flex-1 mt-16 mb-16 mx-8 sm:mx-16 lg:mx-32">
                <div className="w-full md:w-1/4 bg-white p-4 text-gray-800 shadow-lg rounded-lg border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl overflow-y-auto" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
                    <div className="flex items-center mb-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-gray-100 text-gray-800 border border-gray-300 rounded-full px-4 py-2 w-full transition-shadow duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <ul>
                        {users.map((user) => (
                            <li
                                key={user.name}
                                onClick={() => handleUserClick(user.name)}
                                className={`flex items-center p-2 mb-2 rounded-lg cursor-pointer hover:bg-gray-200 ${
                                    selectedUser === user.name ? 'bg-gray-300' : ''
                                }`}
                            >
                                <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full mr-3" />
                                <div>
                                    <p className="font-semibold">{user.name}</p>
                                    <p className={`text-sm ${user.status === 'online' ? 'text-green-500' : 'text-gray-500'}`}>
                                        {user.status}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 flex flex-col ml-4">
                    <div
                        className="flex-1 bg-white p-4 shadow-lg rounded-lg border border-gray-200 overflow-y-auto"
                        style={{ maxHeight: 'calc(100vh - 8rem)' }} // Adjusted height for the chat area
                        ref={chatContainerRef}
                    >
                        <div className="space-y-4">
                            {chats[selectedUser]?.map((chat, index) => (
                                <div
                                    key={index}
                                    className={`flex ${chat.type === 'incoming' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div
                                        className={`p-3 rounded-lg ${chat.type === 'incoming' ? 'bg-gray-100' : 'bg-blue-500 text-white'}`}
                                    >
                                        {chat.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-200">
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="flex-1 bg-gray-100 text-gray-800 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Type a message..."
                            />
                            <button
                                onClick={handleSendMessage}
                                className="ml-4 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 ease-in-out"
                            >
                                <FaPaperPlane />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Chat;
