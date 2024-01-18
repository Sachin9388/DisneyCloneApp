import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import Png from "../../../../assets/Png/Pngs";
import CommonDialog from "../../Common/CommonDialog";

export const MySpace = () => {
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
      <div className="bg-[#0d1421]">
        <div className="ml-44">
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
        </div>
        <div className="pt-8 pb-48 bg-[#0e121b]">
          <div className="flex items-center justify-center">
            <CommonDialog
              BtnclassName="text-lg text-white py-[10px] px-10 bg-blue-800 focus:outline-none rounded-lg  items-center justify-center"
              Btntext="Log In"
              h1text=" Log in or sign up to continue"
            />
          </div>
        </div>
      </div>
    </>
  );
};
