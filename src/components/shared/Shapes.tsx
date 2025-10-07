import React from 'react';
import { twMerge } from 'tailwind-merge';

function Shapes({className=''}:{className?:string}) {
  return (
    <svg 
      id="sw-js-blob-svg" 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg" 
      version="1.1"
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(142.37, 85.051, 57.923, 1)" offset="0%" />
          <stop id="stop2" stopColor="rgba(144.647, 116.591, 70.282, 1)" offset="100%" />
        </linearGradient>
      </defs>
      <path 
        fill="none" 
        className={twMerge('fill-primary-900 opacity-10 z-10',className)}
        d="M24.1,-28.5C29.5,-24.3,30.8,-15,30.6,-6.8C30.3,1.4,28.6,8.4,25.8,16.5C23.1,24.6,19.3,33.7,12.2,38.5C5,43.3,-5.5,43.7,-14.2,40.1C-22.9,36.5,-29.8,28.8,-35.1,20.1C-40.4,11.3,-44.1,1.4,-43,-8C-41.8,-17.4,-35.7,-26.3,-27.7,-30.1C-19.7,-33.9,-9.9,-32.6,-0.2,-32.3C9.4,-32,18.8,-32.8,24.1,-28.5Z" 
        width="100%" 
        height="100%" 
        transform="translate(50 50)" 
        strokeWidth="0" 
        style={{ transition: '0.3s' }} 
        stroke="url(#sw-gradient)" 
      />
    </svg>
  );
}

export default Shapes;
