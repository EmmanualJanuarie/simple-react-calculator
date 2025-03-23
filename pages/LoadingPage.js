import React, { useState, useEffect } from 'react';
import Calculator from './Calculator';
import LoadingImage from '../components/LoadingImage';

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Set a delay of 2 seconds (2000 milliseconds)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }); 

  return (
    <>
      {isLoading ? (
        <div 
          style={{
            backgroundColor: '#9D7651',
            height: '100vh', // Full height for loading screen
            display: 'flex', // Center the content
            justifyContent: 'center', // Center the content
            alignItems: 'center' // Center the content
          }}>
          <div>
            <LoadingImage />
          </div>
        </div>
      ) : (
        <Calculator /> 
      )}
    </>
  );
};

export default LoadingPage;