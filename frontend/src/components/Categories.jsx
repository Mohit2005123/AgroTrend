import React, { useState } from 'react';
import { Button } from '@nextui-org/react';

const categories = [
  { name: 'Seeds', image: 'https://hips.hearstapps.com/hmg-prod/images/flaxseed-close-up-royalty-free-image-1636392298.jpg' },
  { name: 'Fertilizers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx5-0xolzI-KFVTsq1Z_u7Xwu7rNHVzzUJw&s' },
  { name: 'Irrigation', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UYl--I81Z-SEi48k4g04we4lCSaiu4cpvw&s' },
  { name: 'Tools', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZffUOl370gSV5Al7wlrWbHAh_zb1gt9UDpA&s' },
  { name: 'Machinery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJ5yH76NWos_lLzV86Zsg7fYgAtgb9puDBA&s' },
  { name: 'Pesticides', image: 'https://grist.org/wp-content/uploads/2023/01/India-agriculture-pesticides.jpg' },
  { name: 'Greenhouses', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXiIegzSpFRS6FwofCS8jXNFlPQ00kLuriVw&s' },
  { name: 'Feed', image: 'https://www.allaboutfeed.net/app/uploads/2020/12/001_563_IMG_hsk408307-033.jpg' },
  { name: 'Tractors', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-qHqH_yTQQwPOh1Dhvce0vmc5ZSKPqdiTzg&s' },
  { name: 'Sprayers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP66WI9OOYRIJajt3gxx1DsjjPSjCct6dv2g&s' },
  { name: 'Harvesters', image: 'https://example.com/harvesters.jpg' },
  { name: 'Plows', image: 'https://example.com/plows.jpg' },
  { name: 'Cultivators', image: 'https://example.com/cultivators.jpg' },
  { name: 'Planters', image: 'https://example.com/planters.jpg' },
  { name: 'Combines', image: 'https://example.com/combines.jpg' },
  { name: 'Hoes', image: 'https://example.com/hoes.jpg' },
  { name: 'Rakes', image: 'https://example.com/rakes.jpg' },
  { name: 'Shovels', image: 'https://example.com/shovels.jpg' },
  { name: 'Wheelbarrows', image: 'https://example.com/wheelbarrows.jpg' },
  { name: 'Sprinklers', image: 'https://example.com/sprinklers.jpg' },
  { name: 'Drip Irrigation', image: 'https://example.com/drip-irrigation.jpg' },
  { name: 'Pumps', image: 'https://example.com/pumps.jpg' },
  { name: 'Soil Testers', image: 'https://example.com/soil-testers.jpg' },
  { name: 'Weather Stations', image: 'https://example.com/weather-stations.jpg' },
  { name: 'Pond Liners', image: 'https://example.com/pond-liners.jpg' },
  { name: 'Beehives', image: 'https://example.com/beehives.jpg' },
  { name: 'Composters', image: 'https://example.com/composters.jpg' },
  { name: 'Solar Panels', image: 'https://example.com/solar-panels.jpg' },
];

const Categories = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleCategoryClick = (categoryName) => {
    const newSelectedCategory = selectedCategory === categoryName ? null : categoryName;
    setSelectedCategory(newSelectedCategory);
    onCategoryChange(newSelectedCategory);
  };

  const handleViewMoreClick = () => {
    setShowAll(!showAll);
  };

  const displayedCategories = showAll ? categories : categories.slice(0, 8);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {displayedCategories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div
              className={`w-24 h-24 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
                selectedCategory === category.name ? 'relative' : ''
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              {selectedCategory === category.name && (
                <div className="absolute inset-0 rounded-full border-4 border-green-500 pointer-events-none z-10"  />
              )}
            </div>
            <p className="text-center mt-2 text-lg font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Button
          color="primary"
          auto
          shadow
          onClick={handleViewMoreClick}
          css={{
            backgroundColor: '#1E3A8A', // Dark blue color
            '&:hover': {
              backgroundColor: '#2563EB', // Slightly lighter blue
            },
          }}
        >
          {showAll ? 'View Less' : 'View More'}
        </Button>
      </div>
    </div>
  );
};

export default Categories;
