import React, { useState, useEffect } from 'react';
import c1 from '../../utils/images/carousel-1.png';
import c2 from '../../utils/images/carousel2.png';
import c3 from '../../utils/images/carousel3.png';
import mobileC1 from '../../utils/images/mobile-carousel-1.png';
import mobileC2 from '../../utils/images/mobile-carousel-2.png';
import mobileC3 from '../../utils/images/mobile-carousel-3.png';
import Navbar from './Navbar';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  const slides = isMobile
    ? [
        { image: mobileC1, text: 'The leading Social Media resource for Brands', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et efficitur lorem, ut condimentum nisi. Integer molestie tellus vel nunc sagittis dignissim' },
        { image: mobileC2, text: 'Mobile Slide 2 Text', desc: 'Mobile Slide 2 Description' },
        { image: mobileC3, text: 'Mobile Slide 3 Text', desc: 'Mobile Slide 3 Description' },
      ]
    : [
        { image: c1, text: 'The leading Social Media resource for Brands', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et efficitur lorem, ut condimentum nisi. Integer molestie tellus vel nunc sagittis dignissim' },
        { image: c2, text: '', desc: '' },
        { image: c3, text: 'Influencer Marketing News and Resources', desc: 'Influencer Marketing Hub offers you all the latest Influencer Marketing news, tools and resources to enable influencers, agencies and platforms to connect and harness the power of Marketing under the Influence' },
      ];

  return (
    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
      <Navbar />
      <div className="relative h-[50vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute duration-700 ease-in-out w-full h-full top-0 left-0 transition-transform transform ${activeIndex === index ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ display: activeIndex === index ? 'block' : 'none' }}
            data-carousel-item={activeIndex === index ? 'active' : undefined}
          >
            <div className='absolute h-full w-full bg-black opacity-25'></div>
            <img
              src={slide.image}
              className={`block w-full ${isMobile ? 'h-[50vh]' : 'h-full'} object-cover`}
              alt={`Slide ${index + 1}`}
            />
            {slide.text && (
              <div className={`absolute inset-0 flex ${isMobile ? 'items-center justify-center text-left p-5' : 'sm:pl-16 items-start justify-center p-5'} flex-col text-white text-xl`}>
                <div className={`md:w-1/2 w-full text-70px ${isMobile ? 'text-xl font-bold' : 'sm:text-5xl font-extrabold'}`}>
                  {slide.text}
                </div>
                <p className={`md:w-1/2 w-full text-sm font-thin pr-4 ${isMobile ? 'mt-4' : 'sm:p-0 sm:font-medium mt-8'}`}>
                  {slide.desc}
                </p>
                <div className='sm:w-1/2 mt-4 flex items-center justify-center w-full'>
                  <button
                    className="flex items-center gap-2 px-6 py-3 mr-5 font-sans text-xs font-bold text-center text-white bg-pink-700 align-middle rounded-full transition-all select-none hover:bg-transparent hover:border-[1px] hover:border-white"
                    type="button"
                  >
                    Contact Us
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                    </svg>
                  </button>
                  <button
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white hover:bg-pink-700 align-middle rounded-full transition-all select-none bg-transparent hover:border-0 border-[1px] hover:border-white"
                    type="button"
                  >
                    About Us
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-20 left-3/4">
        {slides.map((slide, index) => (
          <button
            key={index}
            type="button"
            className={`w-20 h-20 hidden md:block`}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleIndicatorClick(index)}
          >
            <img src={slide.image} className={`${index === activeIndex ? 'opacity-85 rounded-lg' : 'border-2 rounded-lg border-white'}`} />
          </button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
          <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10">
          <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
