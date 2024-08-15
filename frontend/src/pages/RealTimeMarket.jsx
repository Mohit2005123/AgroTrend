import React, { useState } from 'react';
import marketData from '../data/marketData.json';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

// Register Chart.js components
Chart.register(...registerables);

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

  // Ensure that filteredData has date and price fields for charts
  const pricesData = filteredData.map(item => ({
    market: item.market,
    maxPrice: parseFloat(item.maxPrice),
    minPrice: parseFloat(item.minPrice),
    date: item.date ? new Date(item.date) : new Date(), // Handle missing date
    price: item.price ? parseFloat(item.price) : 0, // Handle missing price
  }));

  // Bar Chart Data
  const barChartData = {
    labels: pricesData.map(item => item.market),
    datasets: [
      {
        label: 'Max Price',
        data: pricesData.map(item => item.maxPrice),
        backgroundColor: 'rgba(34, 197, 94, 0.6)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1,
      },
      {
        label: 'Min Price',
        data: pricesData.map(item => item.minPrice),
        backgroundColor: 'rgba(129, 199, 132, 0.6)',
        borderColor: 'rgba(129, 199, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Pie Chart Data
  const pieChartData = {
    labels: pricesData.map(item => item.market),
    datasets: [
      {
        label: 'Market Share',
        data: pricesData.map(item => item.maxPrice), // Example data
        backgroundColor: [
          'rgba(34, 197, 94, 0.6)',
          'rgba(129, 199, 132, 0.6)',
          'rgba(34, 197, 94, 0.4)',
          'rgba(129, 199, 132, 0.4)',
          'rgba(34, 197, 94, 0.3)',
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(129, 199, 132, 1)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(129, 199, 132, 0.8)',
          'rgba(34, 197, 94, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Fake data for Line Chart
  const fakePriceTrendsData = [
    { date: '2024-08-10T00:00:00Z', price: 175.00 },
    { date: '2024-08-11T00:00:00Z', price: 180.00 },
    { date: '2024-08-12T00:00:00Z', price: 185.00 },
    { date: '2024-08-13T00:00:00Z', price: 190.00 },
    { date: '2024-08-14T00:00:00Z', price: 195.00 },
    { date: '2024-08-15T00:00:00Z', price: 200.00 }
  ];

  // Line Chart Data
  const lineChartData = {
    labels: fakePriceTrendsData.map(item => new Date(item.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Price Trend',
        data: fakePriceTrendsData.map(item => ({
          x: new Date(item.date),
          y: item.price
        })),
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        fill: true,
      },
    ],
  };

  // Data Table Columns
  const columns = [
    { header: 'Market', accessor: 'market' },
    { header: 'Date', accessor: 'date' },
    { header: 'Max Price', accessor: 'maxPrice' },
    { header: 'Min Price', accessor: 'minPrice' },
    { header: 'Price', accessor: 'price' },
  ];

  // Function to format data values
  const formatValue = (value, isDate = false) => {
    if (isDate) {
      return value instanceof Date ? value.toLocaleDateString() : 'N/A';
    }
    return typeof value === 'number' ? value.toFixed(2) : value;
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col text-white">
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
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Bar Chart */}
            <div className="bg-gray-800 p-6 rounded-md shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-green-400 mb-4 text-center">
                Price Comparison
              </h2>
              <Bar
                data={barChartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    tooltip: {
                      callbacks: {
                        label: (context) => `${context.dataset.label}: $${context.raw.toFixed(2)}`,
                      },
                    },
                  },
                  scales: {
                    x: {
                      stacked: true,
                    },
                    y: {
                      stacked: true,
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>

            {/* Line Chart */}
            <div className="bg-gray-800 p-6 rounded-md shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-green-400 mb-4 text-center">
                Historical Price Trend
              </h2>
              <Line
                data={lineChartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    tooltip: {
                      callbacks: {
                        label: (context) => `Price: $${context.raw.y.toFixed(2)}`,
                      },
                    },
                  },
                  scales: {
                    x: {
                      type: 'time',
                      time: {
                        unit: 'day',
                        tooltipFormat: 'll', // Adjust tooltip format if needed
                      },
                      title: {
                        display: true,
                        text: 'Date',
                      },
                      ticks: {
                        source: 'auto',
                      },
                    },
                    y: {
                      title: {
                        display: true,
                        text: 'Price',
                      },
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>

            {/* Pie Chart */}
            <div className="bg-gray-800 p-6 rounded-md shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-green-400 mb-4 text-center">
                Market Share
              </h2>
              <Pie
                data={pieChartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    tooltip: {
                      callbacks: {
                        label: (context) => `${context.label}: $${context.raw.toFixed(2)}`,
                      },
                    },
                  },
                }}
              />
            </div>

            {/* Data Table */}
            <div className="bg-gray-800 p-6 rounded-md shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-green-400 mb-4 text-center">
                Data Table
              </h2>
              <table className="w-full border-collapse border border-gray-600">
                <thead>
                  <tr>
                    {columns.map((col, index) => (
                      <th key={index} className="border border-gray-600 p-2">
                        {col.header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricesData.map((data, index) => (
                    <tr key={index}>
                      {columns.map((col, index) => (
                        <td key={index} className="border border-gray-600 p-2">
                          {formatValue(data[col.accessor], col.accessor === 'date')}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RealTimeMarket;
