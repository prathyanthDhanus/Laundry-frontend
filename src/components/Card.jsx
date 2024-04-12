import React from 'react';

const Card = ({ imageUrl, title, description, tags }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg hover:cursor-pointer">
      <img className="w-full" src={imageUrl} alt="image" />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2 text-center ">{title}</div>
        <p className="text-gray-700 text-base text-center">{description}</p>
      </div>
    
    </div>
  );
};

export default Card;