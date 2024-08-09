import React from 'react';
import { Button } from '@nextui-org/react';
import { FaRegChartBar } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
    return (
        <section className="hero bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white h-screen flex items-center justify-center relative overflow-hidden">
            <div className="text-center z-10">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
                    Empowering Farmers with{' '}
                    <span>
                        <Typewriter
                            words={['Real-Time Market Insights', 'Accurate Price Trends', 'Up-to-Date Information']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <p className="text-lg md:text-2xl mb-6 animate-fade-in animation-delay-1">
                    Get access to up-to-date market information, price trends, and tools to negotiate better deals.
                </p>
                <Button color="primary" size="lg" className="bg-white text-green-600 animate-bounce">
                    Get Started
                </Button>
                <div className="mt-8 animate-fade-in animation-delay-2">
                    <FaRegChartBar size={48} />
                </div>
                <div className="mt-4 text-sm md:text-lg animate-fade-in animation-delay-3">
                    Join thousands of farmers who have transformed their business with real-time insights.
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-75 z-0"></div>
            <div className="absolute bottom-0 left-0 w-full flex justify-center mb-4 z-10">
                <p className="text-sm md:text-lg animate-fade-in animation-delay-4">
                    Making agriculture smarter, one insight at a time.
                </p>
            </div>
        </section>
    );
}

export default Hero;
