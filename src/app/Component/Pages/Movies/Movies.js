import React, { useState } from "react";

export const Movies = () => {
  const photos = [
    "/SVG/download (1).jpeg",
    "/SVG/download.jpeg",
    "/SVG/download (2).jpeg",
    "/SVG/download (3).jpeg",
    "/SVG/download (4).jpeg",
    "/SVG/download.jpeg",
    // "/SVG/download (1).jpeg",
    // "/SVG/download (1).jpeg",
    // "/SVG/download (1).jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevies = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="flex items-center  w-[100%] justify-center">
        <div className="flex mt-5 bg-[#14161d] mb-5 ml-20 ">
          <a
            href="/"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover  w-4 rounded-t-lg  md:h-48 md:w-96 md:rounded-none md:rounded-s-lg"
              src="/SVG/download (2).jpeg"
              alt=""
            /></a>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <button className="bg-gray-600 w-fit px-5 rounded-md place-self-start text-white inline-block" >Trailer</button>
            </div>
          
        </div>

        <div className="flex ">
          <img
            className="w-44 h-40 rounded-md "
            src={photos[currentIndex]}
            alt={`Movie ${currentIndex}`}
          />
        </div>
      </div>
      <div>
        <div className="flex pl-44 ">
          <button
            className="bg-green-400 border-none rounded-md mr-1 px-1 text-white "
            onClick={handlePrevies}
          >
            Pre
          </button>
          {photos.map((image, index) => (
            <img
              className="w-44 h-40 hover:scale-150 rounded-md  "
              key={index}
              src={image}
              alt={`Movie ${index}`}
            />
          ))}
          <button
            onClick={handleNext}
            className="bg-green-400 border-none rounded-md ml-1 px-1 text-white "
          >
            Next
          </button>
        </div>
       
      </div>
    </>
  );
};
