import React from "react";
import Image from "../../../../assets/Images/Images";

export const Footer = () => {
  return (
    <>
      <footer className="pl-44" style={{ backgroundColor: "#0f1014" }}>
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
                      href="/"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="w-7 h-7"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                        viewBox="0 0 20 17"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="pl-6">
                    <a
                      href="/"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="w-7 h-7"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                        viewBox="0 0 20 17"
                      >
                        <path
                          fillRule="evenodd"
                          d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                          clipRule="evenodd"
                        />
                      </svg>
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
                href="/README.md"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <img className="w-28 h-10" src={Image.Googleplaystore} />
              </a>
              <a
                href="/"
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
