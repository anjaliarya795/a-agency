'use client'

import { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa6";

function ScrollTop({ children }: { children: import('react').ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  // Show the "scroll to top" button when the user scrolls down 100px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Listen for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full relative">
      {children}

      {/* Scroll to top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 text-3xl z-50 size-16 flex items-center justify-center right-6 p-4 bg-secondary hover:scale-105 text-white rounded-full shadow-lg transition duration-500"
          aria-label="Scroll to top"
        >
          <FaArrowUp className='animate-bounce' />
        </button>
      )}
    </div>
  );
}

export default ScrollTop;
