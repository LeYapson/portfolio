import React from 'react';

const LoaderFallback = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-blue-600 motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      <p 
        className="ml-4 text-gray-700 dark:text-gray-300 font-medium"
      >
        Chargement...
      </p>
    </div>
  );
};

export default LoaderFallback;