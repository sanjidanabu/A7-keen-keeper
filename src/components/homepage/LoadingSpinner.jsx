import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
    
      <div className="w-16 h-16 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin"></div>
      
     
      <p className="mt-4 text-emerald-800 font-medium animate-pulse">Loading Friends...</p>
    </div>
  );
};

export default LoadingSpinner;