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
    <div>
      <MyNavbar />  {/* Navbar added here */}
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Real-Time Market Prices</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Select Ticker:
          </label>
          <select
            value={selectedTicker}
            onChange={handleTickerChange}
            className="w-full p-2 border border-gray-300 rounded-md"
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
            className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Submit
          </button>
        </form>

        {filteredData.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Prices for {selectedTicker}:</h2>
            <ul className="space-y-2">
              {filteredData.map((item, index) => (
                <li key={index} className="p-4 border rounded-md shadow">
                  <p><strong>Market:</strong> {item.market}</p>
                  <p><strong>Max Price:</strong> {item.maxPrice}</p>
                  <p><strong>Min Price:</strong> {item.minPrice}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />  {/* Footer added here */}
    </div>
  );
};

export default RealTimeMarket;
