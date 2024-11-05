import React from 'react';
import { FaSpinner } from 'react-icons/fa'; 

const LoadingPage = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundColor: '#004d1a', // Dark Green background
      }}
    >
      <div className="text-center">
        <div
          className="animate-spin text-gold text-6xl mb-4"
          style={{
            color: '#FFD700', // Gold color for spinner
          }}
        >
          <FaSpinner />
        </div>
        <p
          className="text-2xl font-semibold"
          style={{
            color: '#FFD700', // Gold color for text
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Adding a subtle shadow for text to enhance visibility
          }}
        >
          Please Wait...
        </p>
        <p
          className="mt-2 text-lg"
          style={{
            color: 'white', // White text for a softer contrast
            fontWeight: 'bold',
          }}
        >
          Tailoring Your Perfect Outfit
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
