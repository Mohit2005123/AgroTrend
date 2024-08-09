import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@nextui-org/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import products from '../data/products.json';

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === null || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const carouselItems = [
    {
      image: 'https://odishaseedsportal.nic.in/assets/images/slider-1.jpg',
      title: 'Quality Seeds',
      description: 'High-yield seeds for better crop production.',
    },
    {
      image: 'https://m.media-amazon.com/images/I/91Y3l-BVm-L._AC_UF1000,1000_QL80_.jpg',
      title: 'Organic Fertilizers',
      description: 'Eco-friendly fertilizers to boost your crop yield.',
    },
    {
      image: 'https://www.easygardenirrigation.co.uk/cdn/shop/files/pop-up-sprinklers-decription.jpg?v=1679761948&width=439',
      title: 'Irrigation Systems',
      description: 'Advanced irrigation systems to ensure optimal water usage.',
    },
    {
      image: 'https://i0.wp.com/katiespring.com/wp-content/uploads/2018/05/fyQDPIA0QS2MBT4tLjUoSg.jpg?fit=4032%2C3024&ssl=1',
      title: 'Farming Tools',
      description: 'Essential tools for modern farming.',
    },
  ];

  return (
    <div>
      <MyNavbar />
      <div className="container mx-auto px-4 py-8 mt-16">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          transitionTime={500}
          className="mb-8"
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="carousel-item relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105" 
                style={{ height: '500px', width: '100%' }} 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-transparent bg-opacity-50 p-4 rounded-b-lg">
                <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                <p className="text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
        <Categories onCategoryChange={handleCategoryChange} />
        <h1 className="text-2xl font-bold mb-6">Marketplace</h1>
        <div className="mb-6">
          <Input
            clearable
            underlined
            fullWidth
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="custom-search-input"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover transition-opacity duration-500 hover:opacity-80" />
              <div className="p-4 transition-transform transform hover:translate-y-2 font-roboto">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-xl font-bold mb-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
