import React from 'react';
import Lottie from 'lottie-react';
import bankLoading from '../../../../public/jsonAmination/bankLoading.json';

const LoadingComponent = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Lottie
        animationData={bankLoading}
        className="w-72 h-72" // Customize the width and height as needed
      />
    </div>
  );
};

export default LoadingComponent;
