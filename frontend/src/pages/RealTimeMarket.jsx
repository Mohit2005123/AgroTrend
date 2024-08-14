import React, { useState } from 'react';
import marketData from '../data/marketData.json';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';

const RealTimeMarket = () => {
  const [selectedTicker, setSelectedTicker] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleTickerChange = (event) => {
    setSelectedTicker(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = marketData.filter(item => item.ticker === selectedTicker);
    setFilteredData(result);
  };

  const uniqueTickers = [...new Set(marketData.map(item => item.ticker))];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col text-white"> {/* Ensure text is white */}
      <MyNavbar />
      <div className="flex-grow p-8 mt-16">
        <h1 className="text-3xl font-bold mb-6 text-center transition duration-500 ease-in-out transform hover:scale-105">
          Real-Time Market Prices
        </h1>
        <form onSubmit={handleSubmit} className="mb-6 max-w-lg mx-auto">
          <label className="block mb-2 text-lg font-medium">
            Select Ticker:
          </label>
          <select
            value={selectedTicker}
            onChange={handleTickerChange}
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
          >
            <option value="" disabled>Select a ticker</option>
            {uniqueTickers.map((ticker, index) => (
              <option key={index} value={ticker}>
                {ticker}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="mt-4 w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
        </form>

        {filteredData.length > 0 && (
          <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-md shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-green-400 mb-4 text-center">
              Prices for {selectedTicker}:
            </h2>
            <ul className="space-y-4">
              {filteredData.map((item, index) => (
                <li key={index} className="p-4 bg-gray-700 border border-gray-600 rounded-md shadow transition duration-300 ease-in-out transform hover:bg-green-600 hover:text-white">
                  <p><strong>Market:</strong> {item.market}</p>
                  <p><strong>Max Price:</strong> {item.maxPrice}</p>
                  <p><strong>Min Price:</strong> {item.minPrice}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RealTimeMarket;
