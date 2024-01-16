import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import Png from "../../../../assets/Png/Pngs";
import badgeColors from "@material-tailwind/react/theme/components/badge/badgeColors";

export const MySpace = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex justify-end" style={{ backgroundColor: "#0e141f" }}>
        <div className="my-6 pt-8 pb-5">
          <a
            className="text-white px-7 py-3 mr-10 rounded-lg"
            style={{ backgroundColor: "#202839" }}
          >
            <button>
              <FontAwesomeIcon className="pr-1" icon={faCircleQuestion} />
              <span className="font-medium"> Help & Support</span>
            </button>
          </a>
        </div>
      </div>
      <div className="ml-44" style={{ backgroundColor: "#0d1421" }}>
        <div className="flex items-center justify-center">
          <img
            style={{
              backgroundColor: "#0d1421",
              width: "500px",
              height: "200px",
            }}
            src={Png.Loginpng}
          />
        </div>
        <div className="text-center pt-8">
          <div>
            <h1 className="text-white font-medium text-xl">
              Login to Disney+ Hotstar
            </h1>
          </div>
          <div className="pt-2">
            <p className="" style={{ color: "#5f6576" }}>
              Start watching from where you left off,personalise for kids and
              more
            </p>
          </div>
        </div>
        <div className="pt-8 pb-48" style={{ backgroundColor: "#0e121b" }}>
          <div className="flex items-center justify-center">
            <button
              className="text-white py-2 px-24 transition-all  duration-100 transform shadow  hover:shadow-lg font-semibold hover:translate-x-1 hover:-translate-y-1 bg-blue-800 focus:outline-none rounded "
              onClick={handleButtonClick}
            >
              Log In
            </button>

            {isModalOpen && (
              <div
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
                style={{ backgroundColor: "#010307" }}
              >
                <div
                  className="h-[90%] w-[90%]  shadow-md rounded-3xl text-white"
                  style={{ backgroundColor: "#16181f" }}
                >
                  <div className="space-x-3">
                    <input
                      placeholder="+91"
                      type="number"
                      className="text-black placeholder-gray-600 rounded-lg w-16 h-12 pl-4"
                      style={{
                        backgroundColor: "#16181f",
                        border: "#353948 solid 1px",
                      }}
                      disabled
                    />
                    <input
                      placeholder="Enter mobile number"
                      type="number"
                      className="text-black placeholder-gray-600 rounded-lg w-72 h-12 pl-4"
                      style={{
                        backgroundColor: "#16181f",
                        border: "#353948 solid 1px",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
