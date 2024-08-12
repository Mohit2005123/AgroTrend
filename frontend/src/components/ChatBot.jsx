import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const ChatBot = ({ visible, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, user: 'user' }]);
      setInput('');
      
      // Simulate a response from the bot (replace with actual bot logic)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a bot response.', user: 'bot' },
        ]);
      }, 1000);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 right-4 w-80 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-between items-center bg-blue-500 text-white px-4 py-2">
        <h3 className="text-lg">ChatBot</h3>
        <button onClick={onClose}>
          <AiOutlineClose size={20} />
        </button>
      </div>
      <div className="p-4 max-h-64 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 flex ${
              msg.user === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                msg.user === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center p-2 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-2 py-1 border rounded-lg focus:outline-none"
          placeholder="Type a message..."
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
