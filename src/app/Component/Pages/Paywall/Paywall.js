import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Png from "../../../../assets/Png/Pngs";
import Dropdown from "../../Dropdown/Dropdown";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa6";
import CommonDialog from "../../Common/CommonDialog";

export const Paywall = () => {
  const [selectedPlanType, setSelectedPlanType] = useState("Super");

  const handleIconClick = () => {
    window.location.href = "/home";
  };

  const planImages = {
    Super: "url('https://wallpaperaccess.com/full/1089160.jpg')",
    Premium: "url('https://wallpaperaccess.com/full/2441958.jpg')",
    PremiumMonthly: "url('https://wallpaperaccess.com/full/1755253.jpg')",
  };

  return (
    <>
      <div>
        <div className="pt-8 flex flex-wrap justify-between bg-[#0f0f14] ">
          <div className="ml-32 flex space-x-8">
            <div className="text-white">
              <button className="pt-10" onClick={handleIconClick}>
                <FontAwesomeIcon icon={faX} size="2x" />
              </button>
            </div>
            <div>
              <img src={Png.DisneyPlus} />
            </div>
          </div>
          <div className="flex space-x-6 pt-5 pr-20">
            <div className="text-white">
              <Dropdown />
            </div>
            <div className="text-white">
              <CommonDialog
                BtnclassName="text-lg text-white py-[10px] px-10 bg-blue-800 focus:outline-none rounded-lg  items-center justify-center"
                Btntext="Log In"
                h1text=" Log in or sign up to continue"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-1 bg-[#0f0f14]">
        <div className="ml-40">
          <div>
            <div
              className=" bg-center relative"
              style={{
                backgroundImage: planImages[selectedPlanType],
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
        <div className="text-white bg-[#0f1014]">
          <div className="px-5 py-10 mx-auto flex flex-wrap">
            <div className="mt-10 pr-6">
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
            <div className="flex space-x-6 rounded-lg">
              <div
                className={`px-5 w-full mb-10 lg:mb-0 rounded-lg lg:rounded-none ${
                  selectedPlanType === "Super"
                    ? "border-blue-500 bg-[#22252f] text-[#ffcc75]"
                    : "border-gray-800"
                }`}
              >
                <div className="px-2 text-center flex flex-col items-center justify-center">
                  <h3 className="tracking-widest font-bold text-lg">Super</h3>
                </div>
                <div className="space-y-8  pt-10 ">
                  <div className="text-white text-center flex items-center justify-center">
                    <div className="inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                      <FaCheck size={28} />
                    </div>
                  </div>
                  <div className="text-white text-center  flex items-center justify-center">
                    <div className="inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                      <FaCheck size={28} />
                    </div>
                  </div>
                  <div className="text-white text-center flex items-center justify-center">
                    <RxCross2 size={34} />
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
              <div
                className={`w-full mb-10 px-5 lg:mb-0 rounded-lg lg:rounded-none ${
                  selectedPlanType === "Premium" ||
                  selectedPlanType === "PremiumMonthly"
                    ? "border-blue-500 bg-[#22252f] text-[#ffcc75]"
                    : "border-gray-800"
                }`}
              >
                <div className="px-2 text-center flex flex-col items-center justify-center">
                  <h3 className="tracking-widest font-bold text-lg">Premium</h3>
                </div>
                <div className="space-y-8  pt-10 ">
                  <div className="text-white text-center px-2 flex items-center -mt-px justify-center">
                    <div className="inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                      <FaCheck size={28} />
                    </div>
                  </div>
                  <div className="text-center flex items-center justify-center">
                    <div className="inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                      <FaCheck size={28} />
                    </div>
                  </div>
                  <div className="text-white text-center flex items-center justify-center">
                    <div className="inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                      <FaCheck size={28} />
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
                <button
                  className={`${
                    selectedPlanType === "Super"
                      ? "border-white"
                      : "border-gray-800"
                  } text-start mt-auto text-white relative w-48 py-1 px-3 border-2 focus:outline-none rounded`}
                  onClick={() => setSelectedPlanType("Super")}
                >
                  <div
                    className={`${
                      selectedPlanType === "Super" ? "text-[#ffcc75] " : ""
                    }text-lg font-bold`}
                  >
                    Super
                  </div>
                  <div>
                    <span>₹</span>
                    <span className="text-2xl pl-1 font-bold">899</span>
                    <span className="text-xs">/Year</span>
                  </div>
                  {selectedPlanType === "Super" && (
                    <div className="absolute -top-2 -right-2 rounded-xl bg-[#0f1014]">
                      <IoCheckmarkCircleSharp
                        size={35}
                        className="text-blue-700"
                      />
                    </div>
                  )}
                </button>

                <button
                  className={`${
                    selectedPlanType === "Premium"
                      ? "border-white"
                      : "border-gray-800"
                  } text-start mt-auto text-white relative w-48 py-1 px-3 border-2 focus:outline-none rounded`}
                  onClick={() => setSelectedPlanType("Premium")}
                >
                  <div
                    className={`${
                      selectedPlanType === "Premium" ? "text-[#ffcc75] " : ""
                    }text-lg font-bold`}
                  >
                    Premium
                  </div>
                  <div>
                    <span> &#8377;</span>
                    <span className="text-2xl pl-1 font-bold">1499</span>
                    <span className="text-xs">/Year</span>
                  </div>
                  {selectedPlanType === "Premium" && (
                    <div className="absolute -top-2 -right-2 rounded-xl bg-[#0f1014]">
                      <IoCheckmarkCircleSharp
                        size={35}
                        className="text-blue-700"
                      />
                    </div>
                  )}
                </button>
                <button
                  className={`${
                    selectedPlanType === "PremiumMonthly"
                      ? "border-white"
                      : "border-gray-800"
                  } text-start mt-auto text-white relative w-48 py-1 px-3 border-2 focus:outline-none rounded`}
                  onClick={() => setSelectedPlanType("PremiumMonthly")}
                >
                  <div
                    className={`${
                      selectedPlanType === "PremiumMonthly"
                        ? "text-[#ffcc75] "
                        : ""
                    }text-lg font-bold`}
                  >
                    Premium Monthly
                  </div>
                  <div>
                    <span> &#8377;</span>
                    <span className="text-2xl pl-1 font-bold">299</span>
                    <span className="text-xs">/Month</span>
                  </div>
                  {selectedPlanType === "PremiumMonthly" && (
                    <div className="absolute -top-2 -right-2 rounded-xl bg-[#0f1014]">
                      <IoCheckmarkCircleSharp
                        size={35}
                        className="text-blue-700"
                      />
                    </div>
                  )}
                </button>
              </div>
              <div>
                <div className="pr-2 font-semibold">
                  <CommonDialog
                    BtnclassName="w-full flex text-lg text-white py-3 px-4 bg-blue-800 focus:outline-none rounded-lg  items-center justify-center"
                    Btntext={`Continue With ${selectedPlanType}`}
                    icon={<FaAngleRight size={17} className="mt-1 ml-1" />}
                    h1text={` Log in to Subscribe for ${selectedPlanType} Plan`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
