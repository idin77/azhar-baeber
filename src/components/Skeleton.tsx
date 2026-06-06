import React from 'react';

export default function Skeleton({ className = '', ...props }: any) {
  return (
    <div className={`animate-pulse bg-gray-800 rounded-lg ${className}`} {...props}></div>
  );
}
