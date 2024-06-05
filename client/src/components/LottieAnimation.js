import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../animation.json'; // Adjusted path

const LottieAnimation = () => {
  return (
    <Lottie 
      animationData={animationData} 
      loop={true} 
      autoplay={true} 
      style={{ width: 600, height: 600 }} 
    />
  );
};

export default LottieAnimation;
