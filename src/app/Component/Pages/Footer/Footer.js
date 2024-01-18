import React from "react";
import Image from "../../../../assets/Images/Images";
import { SlSocialFacebook } from "react-icons/sl";
import { PiTwitterLogoBold } from "react-icons/pi";

export const Footer = () => {
  return (
    <>
      <footer className="pl-44 bg-[#0f1014]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className=" md:justify-between">
            <div className="grid grid-cols-4 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                  Company
                </h2>
                <ul className=" text-gray-500 text-xs dark:text-gray-400">
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                  View Website In
                </h2>
                <ul className=" text-gray-500 text-xs dark:text-gray-400">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      English
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                  Need Help ?
                </h2>
                <ul className=" text-gray-500  text-xs dark:text-gray-400">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Visit Help Center
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Share Feedback
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                  Connect With US
                </h2>
                <ul className="flex text-gray-500 dark:text-gray-400 font-medium">
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-gray-900 dark:hover:text-gray-400"
                    >
                      <SlSocialFacebook size={30} />
                    </a>
                  </li>
                  <li className="pl-6">
                    <a
                      href="#"
                      className="text-white hover:text-gray-900 dark:hover:text-gray-400"
                    >
                      <PiTwitterLogoBold size={30} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className=" text-gray-500 sm:text-center text-xs dark:text-gray-400">
              © 2023 STAR. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <img className="w-28 h-10" src={Image.Googleplaystore} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <img className="w-28 h-10" src={Image.Iosappstore} />
              </a>
            </div>
          </div>
          <div>
            <ul className="flex space-x-4 text-gray-500 dark:text-gray-400 font-normal text-xs">
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline "
                >
                  Terms Of Use
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline "
                >
                  Privacy policy
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline "
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
