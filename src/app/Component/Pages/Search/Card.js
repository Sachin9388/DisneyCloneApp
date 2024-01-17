// MovieCard.js

import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-36 rounded overflow-hidden shadow-lg transform hover:scale-y-[2]  hover:scale-x-[2] transition-transform duration-300   hover:rounded-lg hover:z-30">
      <div className="relative">
        <img className="w-full " src={imageUrl} alt={title} />
        <div className="absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="text-white mt-28 w-80 bg-black text-center">
            <div className='flex mt-1 mx-4'>
            <button className="bg-white text-[14px] text-black font-normal  rounded-md mr-2">
              Watch Now
            </button>
            <span className="text-lg bg-red-400 px-2 pb- rounded-md  text-white">+</span>
            </div>
            <h2 className="text-lg  font-bold mb-2">{title}</h2>
            <p className="text-sm mb-4">{description}</p>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
