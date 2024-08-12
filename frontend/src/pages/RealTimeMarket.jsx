import React from 'react';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import MarketItem from '../components/MarketItem';
import marketData from '../data/marketData.json';

const RealTimeMarket = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MyNavbar />
      <main className="flex-grow mt-16 p-6 bg-gray-100"> {/* Adjust mt-16 based on your navbar height */}
        <h1 className="text-3xl font-bold text-green-700 mb-6">Agricultural Market Prices</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketData.map((item, index) => (
            <MarketItem
              key={index}
              ticker={item.ticker}
              market={item.market}
              maxPrice={item.maxPrice}
              minPrice={item.minPrice}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RealTimeMarket;
