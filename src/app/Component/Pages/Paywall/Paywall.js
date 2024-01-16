import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Png from "../../../../assets/Png/Pngs";
import Dropdown from "../../Dropdown/Dropdown";

export const Paywall = () => {
  return (
    <>
      <div
        className="pt-8 flex flex-wrap justify-between"
        style={{ backgroundColor: "#0f0f14" }}
      >
        <div className="pl-44 flex space-x-8">
          <div className="text-white">
            <button className="pt-10">
              <FontAwesomeIcon icon={faX} size="2x" />
            </button>
          </div>
          <div>
            <img src={Png.DisneyPlus} />
          </div>
        </div>
        <div className="flex space-x-3 pt-5 pr-5">
          <div className="text-white">
            <Dropdown />
          </div>
          <div className="text-white">
            <button className="w-full text-white py-2 px-7 transition-all  duration-100 transform shadow  hover:shadow-lg font-semibold hover:translate-x-1 hover:-translate-y-1 bg-blue-800 focus:outline-none rounded flex items-center justify-center">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <div>
            <div
              className="ml-44 bg-cover bg-right relative"
              style={{
                backgroundImage:
                  "url('https://wallpaperaccess.com/full/699699.jpg')",
                height: "700px",
                width: "450px",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-80 "></div>
              <h1 className="text-center px-10 absolute transform text-4xl font-bold text-white translate-y-1/2">
                Subscribe now and start streaming
              </h1>
            </div>
          </div>
        </div>
        <div
          className="text-white body-font overflow-hidden"
          style={{ backgroundColor: "#0f1014" }}
        >
          <div className="px-5 py-10 mx-auto flex flex-wrap">
            <div className="mt-10 pr-20">
              <div className="space-y-10 mt-4 space-x-4 overflow-hidden">
                <div className="ml-4">
                  <div className=" text-white text-[13px]"> All Content</div>
                  <div className="text-gray-500 text-xs">
                    Movies,Live Sports,TV,Specials
                  </div>
                </div>
                <div className="text-white text-[13px]">
                  Watch on TV or Laptop
                </div>
                <div className="text-white text-[13px]">
                  Ads free movies and shows (except sports)
                </div>
                <div className="text-white text-[13px]">
                  Number of devices that can be logged in
                </div>
                <div className="text-white text-[13px]">Max video quality</div>
                <div className="ml-4">
                  <div className="pt-3 text-white text-[13px]">
                    Max audio quality
                  </div>
                  <div className="text-gray-500 text-xs">
                    Atmos available on select titles only
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-11 rounded-lg">
              <div className=" lg:mt-px w-full mb-10 lg:mb-0 rounded-lg lg:rounded-none">
                <div className="px-2 text-center  flex flex-col items-center justify-center">
                  <h3 className="tracking-widest">Super</h3>
                </div>
                <div className="space-y-8  pt-10 ">
                  <div className="text-white text-center flex items-center justify-center">
                    <div className="inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-white text-center  flex items-center justify-center">
                    <div className="inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-white text-center flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                  </div>
                  <div className="text-xl text-white px-6 text-center leading-relaxed flex items-center justify-center">
                    2
                  </div>
                  <div className="text-white text-center  items-center justify-center">
                    Full HD
                    <div>1080p</div>
                  </div>
                  <div className="text-white text-center w-24">Dolby Atmos</div>
                </div>
              </div>
              <div className=" lg:-mt-px w-full mb-10 lg:mb-0 rounded-lg relative">
                <div className="px-2 text-center flex flex-col items-center justify-center">
                  <h3 className="tracking-widest">Premium</h3>
                </div>
                <div className="space-y-8  pt-10 ">
                  <div className="text-white text-center px-2 flex items-center -mt-px justify-center">
                    <div className="inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-center flex items-center justify-center">
                    <div className="inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-white text-center flex items-center justify-center">
                    <div className="inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-xl text-white px-6 text-center leading-relaxed flex items-center justify-center">
                    4
                  </div>
                  <div className="text-white text-center  items-center justify-center">
                    4K
                    <div>2160p</div>
                  </div>
                  <div className="text-white pt-1 text-center w-24">
                    Dolby Atmos
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex pb-6 space-x-4 text-center">
                <button className="text-start mt-auto text-white w-48 py-1 px-3 border-gray-800 border-2  focus:outline-none rounded">
                  <div className="text-lg font-bold">Super</div>
                  <div>
                    <span> &#8377;</span>
                    <span className="text-2xl pl-1 font-bold">899</span>
                    <span className="text-xs">/Year</span>
                  </div>
                </button>
                <button className="text-start mt-auto text-white w-48 py-1 px-3 border-gray-800 border-2  focus:outline-none rounded">
                  <div className="text-lg font-bold">Premium</div>
                  <div>
                    <span> &#8377;</span>
                    <span className="text-2xl pl-1 font-bold">1499</span>
                    <span className="text-xs">/Year</span>
                  </div>
                </button>
                <button className="text-start mt-auto text-white w-48 py-1 px-3 border-gray-800 border-2  focus:outline-none rounded">
                  <div className="text-lg font-bold">Premium</div>
                  <div>
                    &#8377;
                    <span className="text-2xl pl-1 font-bold">299</span>
                    <span className="text-xs">/Month</span>
                  </div>
                </button>
              </div>
              <div>
                <button className="w-full text-white py-2 px-4 bg-blue-800 focus:outline-none rounded flex items-center justify-center">
                  <span className="pr-2">Continue With Super</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 pt-1"
                    viewBox="0 0 25 25"
                  >
                    <g id="Right-2" data-name="Right">
                      <polygon
                        points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999"
                        style={{ fill: "white" }}
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
