// src/pages/RealTimeMarket.jsx
import React from 'react';
import MarketItem from '../components/MarketItem';
const marketData = [
    {
        ticker: 'Wheat',
        market: '147 Average',
        maxPrice: '2550',
        minPrice: '2350'
      },
      {
        ticker: 'Wheat',
        market: 'Dara',
        maxPrice: '2460',
        minPrice: '2380'
      },
      {
        ticker: 'Wheat',
        market: 'Lok-1',
        maxPrice: '2800',
        minPrice: '2750'
      },
      {
        ticker: 'Wheat',
        market: 'Lokwan Gujrat',
        maxPrice: '2715',
        minPrice: '2305'
      },
      {
        ticker: 'Wheat',
        market: 'Sonalika',
        maxPrice: '3000',
        minPrice: '2400'
      },
      {
        ticker: 'Paddy(Dhan)(Common)',
        market: 'ADT 37',
        maxPrice: '2252',
        minPrice: '1933'
      },
      {
        ticker: 'Paddy(Dhan)(Common)',
        market: '1001',
        maxPrice: '2183',
        minPrice: '2100'
      },
      {
        ticker: 'Paddy(Dhan)(Common)',
        market: 'MTU-1010',
        maxPrice: '2203',
        minPrice: '2203'
      },
      {
        ticker: 'Paddy(Dhan)(Common)',
        market: 'Swarna Masuri (New)',
        maxPrice: '2250',
        minPrice: '2150'
      },
      {
        ticker: 'Paddy(Dhan)(Common)',
        market: 'Common',
        maxPrice: '2223',
        minPrice: '2183'
      },
      {
        ticker: 'Rice',
        market: 'Fine',
        maxPrice: '4600',
        minPrice: '4450'
      },
      {
        ticker: 'Rice',
        market: 'Common',
        maxPrice: '3700',
        minPrice: '3350'
      },
      {
        ticker: 'Maize',
        market: 'Deshi Red',
        maxPrice: '4000',
        minPrice: '1600'
      },
      {
        ticker: 'Maize',
        market: 'Yellow',
        maxPrice: '2230',
        minPrice: '2210'
      },
      {
        ticker: 'Jowar(Sorghum)',
        market: 'Jowar (Yellow)',
        maxPrice: '2850',
        minPrice: '2500'
      },
      {
        ticker: 'Bengal Gram(Gram)(Whole)',
        market: 'Average (Whole)',
        maxPrice: '8800',
        minPrice: '6400'
      },
      {
        ticker: 'Bengal Gram(Gram)(Whole)',
        market: 'Desi (F.A.Q. Split)',
        maxPrice: '7000',
        minPrice: '6900'
      },
      {
        ticker: 'Black Gram (Urd Beans)(Whole)',
        market: 'Black Gram (Whole)',
        maxPrice: '13200',
        minPrice: '12000'
      },
      {
        ticker: 'Groundnut',
        market: 'Big (With Shell)',
        maxPrice: '8000',
        minPrice: '3300'
      },
      {
        ticker: 'Groundnut',
        market: 'Balli/Habbu',
        maxPrice: '5600',
        minPrice: '5500'
      },
      {
        ticker: 'Groundnut',
        market: 'G20',
        maxPrice: '6650',
        minPrice: '6625'
      },
      {
        ticker: 'Sesamum(Sesame,Gingelly,Til)',
        market: 'White',
        maxPrice: '11750',
        minPrice: '11500'
      },
      {
        ticker: 'Mustard',
        market: 'Mustard',
        maxPrice: '5800',
        minPrice: '5450'
      },
      {
        ticker: 'Soyabean',
        market: 'Yellow',
        maxPrice: '4015',
        minPrice: '3430'
      },
      {
        ticker: 'Apple',
        market: 'American',
        maxPrice: '24000',
        minPrice: '7000'
      },
      {
        ticker: 'Apple',
        market: 'Delicious',
        maxPrice: '2500',
        minPrice: '2400'
      },
      {
        ticker: 'Apple',
        market: 'Kasmir/Shimla - II',
        maxPrice: '8990',
        minPrice: '8900'
      },
      {
        ticker: 'Apple',
        market: 'Apple',
        maxPrice: '18000',
        minPrice: '3000'
      },
      {
        ticker: 'Orange',
        market: 'Darjeeling',
        maxPrice: '16000',
        minPrice: '6000'
      },
      {
        ticker: 'Banana',
        market: 'Besrai',
        maxPrice: '11000',
        minPrice: '1800'
      },
      {
        ticker: 'Banana',
        market: 'Medium',
        maxPrice: '7500',
        minPrice: '2100'
      },
      {
        ticker: 'Banana',
        market: 'Nendra Bale',
        maxPrice: '9000',
        minPrice: '1000'
      },
      {
        ticker: 'Banana',
        market: 'Banana - Ripe',
        maxPrice: '7200',
        minPrice: '1800'
      },
      {
        ticker: 'Banana',
        market: 'Red Banana',
        maxPrice: '9200',
        minPrice: '8800'
      },
      {
        ticker: 'Banana',
        market: 'Rasakathai',
        maxPrice: '6200',
        minPrice: '5800'
      },
      {
        ticker: 'Banana',
        market: 'Poovan',
        maxPrice: '8600',
        minPrice: '5000'
      },
      {
        ticker: 'Banana',
        market: 'Robusta',
        maxPrice: '5500',
        minPrice: '3200'
      },
      {
        ticker: 'Banana',
        market: 'Palayamthodan',
        maxPrice: '6000',
        minPrice: '1000'
      },
      {
        ticker: 'Mango',
        market: 'Safeda',
        maxPrice: '18000',
        minPrice: '4500'
      },
      {
        ticker: 'Mango',
        market: 'Dusheri',
        maxPrice: '5500',
        minPrice: '2100'
      },
      {
        ticker: 'Pineapple',
        market: 'Pine Apple',
        maxPrice: '8000',
        minPrice: '3000'
      },
      {
        ticker: 'Grapes',
        market: 'Annabesahai',
        maxPrice: '14000',
        minPrice: '7000'
      },
      {
        ticker: 'Onion',
        market: 'Bellary',
        maxPrice: '5500',
        minPrice: '3000'
      },
      {
        ticker: 'Onion',
        market: 'Nasik',
        maxPrice: '4000',
        minPrice: '3200'
      },
      {
        ticker: 'Onion',
        market: 'Red',
        maxPrice: '3500',
        minPrice: '1900'
      },
      {
        ticker: 'Onion',
        market: 'White',
        maxPrice: '3600',
        minPrice: '3400'
      },
      {
        ticker: 'Onion',
        market: 'Onion',
        maxPrice: '8600',
        minPrice: '2800'
      },
      {
        ticker: 'Onion',
        market: 'Big',
        maxPrice: '4700',
        minPrice: '3600'
      },
      {
        ticker: 'Onion',
        market: 'Medium',
        maxPrice: '4600',
        minPrice: '1000'
      },
      {
        ticker: 'Potato',
        market: '(Red Nanital)',
        maxPrice: '9000',
        minPrice: '3000'
      },
      {
        ticker: 'Potato',
        market: 'Desi',
        maxPrice: '2480',
        minPrice: '1500'
      },
      {
        ticker: 'Potato',
        market: 'F.A.Q.',
        maxPrice: '1800',
        minPrice: '1400'
      },
      {
        ticker: 'Potato',
        market: 'Jyoti',
        maxPrice: '3800',
        minPrice: '2250'
      },
      {
        ticker: 'Potato',
        market: 'Local',
        maxPrice: '4200',
        minPrice: '4000'
      },
      {
        ticker: 'Potato',
        market: 'Potato',
        maxPrice: '5200',
        minPrice: '1300'
      },
      {
        ticker: 'Garlic',
        market: 'Average',
        maxPrice: '36000',
        minPrice: '10000'
      },
      {
        ticker: 'Garlic',
        market: 'Desi',
        maxPrice: '12000',
        minPrice: '9000'
      },
      {
        ticker: 'Garlic',
        market: 'Garlic',
        maxPrice: '21000',
        minPrice: '5300'
      },
      {
        ticker: 'Chili Red',
        market: 'Bold',
        maxPrice: '24000',
        minPrice: '14000'
      },
      {
        ticker: 'Bajra(Pearl Millet/Cumbu)',
        market: 'Hybrid',
        maxPrice: '2615',
        minPrice: '2380'
      },
      {
        ticker: 'Cauliflower',
        market: 'Ranchi',
        maxPrice: '7000',
        minPrice: '2000'
      },
      {
        ticker: 'Cauliflower',
        market: 'African Sarson',
        maxPrice: '1500',
        minPrice: '1500'
      },
      {
        ticker: 'Cauliflower',
        market: 'Local',
        maxPrice: '2000',
        minPrice: '2000'
      },
      {
        ticker: 'Cauliflower',
        market: 'Cauliflower',
        maxPrice: '7050',
        minPrice: '900'
      },
      {
        ticker: 'Brinjal',
        market: 'Round',
        maxPrice: '8000',
        minPrice: '2000'
      },
      {
        ticker: 'Brinjal',
        market: 'Round/Long',
        maxPrice: '6000',
        minPrice: '1100'
      },
      {
        ticker: 'Brinjal',
        market: 'Brinjal',
        maxPrice: '7000',
        minPrice: '1300'
      },
      {
        ticker: 'Coriander(Leaves)',
        market: 'I Sort',
        maxPrice: '7000',
        minPrice: '1500'
      },
      {
        ticker: 'Coriander(Leaves)',
        market: 'Coriander',
        maxPrice: '7550',
        minPrice: '6850'
      },
      {
        ticker: 'Green Peas',
        market: 'Green Peas',
        maxPrice: '25000',
        minPrice: '10800'
      },
      {
        ticker: 'Field Pea',
        market: 'Field Pea',
        maxPrice: '8000',
        minPrice: '6000'
      },
      {
        ticker: 'Chikoos(Sapota)',
        market: 'Sapota',
        maxPrice: '7000',
        minPrice: '2500'
      },
      {
        ticker: 'Papaya',
        market: 'Papaya',
        maxPrice: '5000',
        minPrice: '1500'
      },
      {
        ticker: 'Water Melon',
        market: 'Water Melon',
        maxPrice: '3000',
        minPrice: '800'
      },
      {
        ticker: 'Guar',
        market: 'Gwar',
        maxPrice: '8050',
        minPrice: '7350'
      },
      {
        ticker: 'Mousambi(Sweet Lime)',
        market: 'Mousambi',
        maxPrice: '16000',
        minPrice: '2500'
      },
      {
        ticker: 'Mousambi(Sweet Lime)',
        market: 'Mosambi-Organic',
        maxPrice: '4700',
        minPrice: '4300'
      },
      {
        ticker: 'Tomato',
        market: 'Deshi',
        maxPrice: '7000',
        minPrice: '1000'
      },
      {
        ticker: 'Tomato',
        market: 'Local',
        maxPrice: '6050',
        minPrice: '3500'
      },
      {
        ticker: 'Tomato',
        market: 'Hybrid',
        maxPrice: '4200',
        minPrice: '2400'
      },
      {
        ticker: 'Tomato',
        market: 'Tomato',
        maxPrice: '6000',
        minPrice: '2000'
      },
      {
        ticker: 'Cluster beans',
        market: 'Cluster Beans',
        maxPrice: '6000',
        minPrice: '1500'
      },
      {
        ticker: 'Bitter gourd',
        market: 'Bitter Gourd',
        maxPrice: '13000',
        minPrice: '2500'
      },
      {
        ticker: 'Bottle gourd',
        market: 'Bottle Gourd',
        maxPrice: '4500',
        minPrice: '800'
      },
      {
        ticker: 'Ashgourd',
        market: 'Gouard',
        maxPrice: '4000',
        minPrice: '800'
      },
      {
        ticker: 'Ashgourd',
        market: 'Ashgourd',
        maxPrice: '4500',
        minPrice: '3000'
      },
      {
        ticker: 'Pumpkin',
        market: 'Pumpkin',
        maxPrice: '4500',
        minPrice: '600'
      },
      {
        ticker: 'Bhindi(Ladies Finger)',
        market: 'Bhindi',
        maxPrice: '6000',
        minPrice: '1000'
      },
      {
        ticker: 'Amaranthus',
        market: 'Amaranthus',
        maxPrice: '9000',
        minPrice: '800'
      },
      {
        ticker: 'Green Chilli',
        market: 'Green Chilly',
        maxPrice: '12000',
        minPrice: '800'
      },
      {
        ticker: 'Cowpea(Veg)',
        market: 'Cowpea (Veg)',
        maxPrice: '7000',
        minPrice: '1500'
      },
      {
        ticker: 'Banana - Green',
        market: 'Banana - Green',
        maxPrice: '7500',
        minPrice: '1000'
      },
      {
        ticker: 'Beans',
        market: 'Beans (Whole)',
        maxPrice: '12000',
        minPrice: '2500'
      },
      {
        ticker: 'Tapioca',
        market: 'Tapioca',
        maxPrice: '5000',
        minPrice: '2000'
      },
      {
        ticker: 'Amphophalus',
        market: 'Amphophalus',
        maxPrice: '7600',
        minPrice: '5000'
      },
      {
        ticker: 'Ginger(Green)',
        market: 'Green Ginger',
        maxPrice: '20000',
        minPrice: '3800'
      },
      {
        ticker: 'Corriander seed',
        market: 'Coriander Seed',
        maxPrice: '6650',
        minPrice: '6500'
      },
      {
        ticker: 'Coconut',
        market: 'Coconut',
        maxPrice: '5000',
        minPrice: '1000'
      },
      {
        ticker: 'Coconut',
        market: 'Big',
        maxPrice: '1300',
        minPrice: '1300'
      },
      {
        ticker: 'Coconut',
        market: 'Medium',
        maxPrice: '770',
        minPrice: '770'
      }
  ];
const RealTimeMarket = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
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
    </div>
  );
};

export default RealTimeMarket;
