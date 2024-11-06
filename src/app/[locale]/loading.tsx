import React from 'react';
import { FaSpinner, FaCircle, FaStar } from 'react-icons/fa';

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#002a12] bg-opacity-90 backdrop-blur-md">
      <div className="flex space-x-4">
        {/* Pulsing Circle Icon */}
        <FaCircle className="text-[30px] text-[#FFD700] animate-pulse" />
        
        {/* Spinning Spinner Icon */}
        <FaSpinner className="text-[50px] text-[#FFD700] animate-spin" />

        {/* Twinkling Star Icon */}
        <FaStar className="text-[30px] text-[#FFD700] animate-pulse delay-500" />
      </div>
    </div>
  );
};

export default LoadingPage;
