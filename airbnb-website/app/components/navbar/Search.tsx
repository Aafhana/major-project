'use client';
import { useState, useEffect } from 'react';

  const Search = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 375);
      };
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Call handleResize initially to set initial state
      handleResize();
  
      // Cleanup the event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return ( 
      <div className="text-center ${isSmallScreen ? 'text-sm' : 'text-lg'} md:text-xl lg:text-2xl font-bold text-black p-4">
        <h1>{isSmallScreen ? 'Computer Science& Engg.' : 'Computer Science & Engineering Department'}</h1>
      </div>
    );
  }
   
  export default Search;