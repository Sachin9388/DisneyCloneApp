import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import Png from "../../../../assets/Png/Pngs";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";

export const MySpace = () => {
  const [size, setSize] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(false);

  const handleGenerateOtp = () => {
    // Logic to generate OTP goes here
    // For simplicity, let's generate a random 6-digit OTP
    const generatedOtp = Math.floor(1000 + Math.random() * 9000);
    setOtp(generatedOtp);
    setShowOtpSection(true); // Display the OTP section
  };

  const handleOpen = (value) => setSize(value);

  return (
    <>
      <div className="flex justify-end bg-[#0e141f]">
        <div className="my-6 pt-8 pb-5">
          <a className="text-white px-7 py-3 mr-10 rounded-lg bg-[#202839]">
            <button>
              <FontAwesomeIcon className="pr-1" icon={faCircleQuestion} />
              <span className="font-medium"> Help & Support</span>
            </button>
          </a>
        </div>
      </div>
      <div className="ml-44 bg-[#0d1421] ">
        <div className="flex items-center justify-center">
          <img className="bg-[#0d1421] mt-10 w-[35%]" src={Png.Loginpng} />
        </div>
        <div className="text-center pt-8">
          <div>
            <h1 className="text-white font-medium text-xl">
              Login to Disney+ Hotstar
            </h1>
          </div>
          <div className="pt-2">
            <p className="text-[#5f6576]">
              Start watching from where you left off,personalise for kids and
              more
            </p>
          </div>
        </div>
        <div className="pt-8 pb-48 bg-[#0e121b]">
          <div className="flex items-center justify-center">
            <Button
              onClick={() => handleOpen("sm")}
              className="text-white py-3 px-20 transition-all  duration-100 transform shadow  hover:shadow-lg font-semibold hover:translate-x-1 hover:-translate-y-1 bg-blue-800 focus:outline-none rounded "
            >
              Log In
            </Button>
            <div>
              <Dialog
                className="w-[80%] h-[85%] mt-11 ml-56 shadow-md rounded-3xl text-white bg-[#16181f]"
                open={size === "sm"}
                size={size || "sm"}
                handler={handleOpen}
              >
                <DialogBody>
                  <div className="flex">
                    <div
                      className="rounded-2xl opacity-20 bg-cover bg-right relative"
                      style={{
                        backgroundImage:
                          "url('https://wallpaperaccess.com/full/699699.jpg')",
                        height: "470px",
                        width: "350px",
                      }}
                    ></div>
                    <div className="ml-24">
                      <div>
                        <div className="mt-6 ml-96">
                          <FontAwesomeIcon
                            onClick={handleOpen}
                            icon={faX}
                            size="xl"
                            className="text-[#707a94] cursor-pointer"
                          />
                        </div>
                      </div>
                      <div className="mt-20">
                        <h1 className="ml-2 font-semibold text-2xl my-5">
                          Log in or sign up to continue
                        </h1>
                      </div>
                      <div className=" flex space-x-3">
                        <div>
                          <input
                            placeholder="+91"
                            type="number"
                            className="text-black placeholder-gray-600 rounded-lg w-16 h-[50px] pl-4 border-[1px] border-[#353948] bg-[#16181f]"
                            disabled
                          />
                        </div>
                        <div className="relative">
                          <div>
                            <input
                              type="number"
                              id="floating_outlined"
                              className="cursor-text block pt-4 w-64 px-3 h-[50px] text-sm text-white rounded-lg border-[1px] bg-[#16181f] border-[#353948] appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                              placeholder=""
                              maxLength="10"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <label
                              htmlFor="floating_outlined"
                              className="cursor-text absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#16181f]  px-2 peer-focus:px-1 peer-focus:ml-2 peer-focus:text-gray-500 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Enter mobile number
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        {phoneNumber.length === 10 && (
                          <button
                            className="mt-10 text-white py-3 px-36 transition-all  duration-100 transform shadow  hover:shadow-lg font-semibold hover:translate-x-1 hover:-translate-y-1  bg-blue-800 focus:outline-none rounded "
                            onClick={handleGenerateOtp}
                          >
                            Get OTP
                          </button>
                        )}
                        {showOtpSection && (
                          <div className="space-x-6">
                            <input
                              maxLength="1"
                              type="number"
                              className="text-white placeholder-gray-600 rounded-lg w-16 h-[50px] pl-4 border-[1px] border-[#353948] bg-[#16181f]"
                            />
                            <input
                              type="number"
                              className="text-white placeholder-gray-600 rounded-lg w-16 h-[50px] pl-4 border-[1px] border-[#353948] bg-[#16181f]"
                            />
                            <input
                              type="number"
                              className="text-white placeholder-gray-600 rounded-lg w-16 h-[50px] pl-4 border-[1px] border-[#353948] bg-[#16181f]"
                            />
                            <input
                              type="number"
                              className="text-white placeholder-gray-600 rounded-lg w-16 h-[50px] pl-4 border-[1px] border-[#353948] bg-[#16181f]"
                            />
                          </div>
                        )}
                        {otp && <p>Your OTP: {otp}</p>}
                        <h2 className="text-[#515767] mt-10 text-center">
                          Having trouble logging in?
                          <span className="text-blue-600 font-semibold ml-1 cursor-pointer">
                            Get Help
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </DialogBody>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
