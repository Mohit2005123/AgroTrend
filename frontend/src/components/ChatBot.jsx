import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyC6tmEypaRp_iI3qR605anTGNOzoxD7erQ');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const ChatBot = ({ visible, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, user: 'user' }]);
      setInput('');

      // Get the bot response from the Gemini API
      const botResponse = await getBotResponse(input);

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, user: 'bot' },
      ]);
    }
  };

  const getBotResponse = async (prompt) => {
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error fetching bot response:', error);
      return 'Sorry, I am unable to respond at the moment.';
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 right-4 w-96 bg-white shadow-2xl rounded-lg overflow-hidden animate-fadeIn">
      <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-3 animate-slideDown">
        <h3 className="text-xl font-semibold">ChatBot</h3>
        <button onClick={onClose} className="hover:bg-blue-700 rounded-full p-1 transition duration-300">
          <AiOutlineClose size={24} />
        </button>
      </div>
      <div className="p-4 max-h-96 min-h-[200px] overflow-y-auto bg-blue-50"> {/* Set minimum height */}
        {messages.length === 0 ? (
          <div className="text-center text-blue-500 animate-pulse">
            Start a conversation...
          </div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-3 flex ${
                msg.user === 'user' ? 'justify-end' : 'justify-start'
              } animate-fadeIn`}
            >
              <div
                className={`px-4 py-2 rounded-xl max-w-xs ${
                  msg.user === 'user' ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-800'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex items-center p-3 border-t bg-blue-100">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          placeholder="Type a message..."
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 animate-bounce"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
