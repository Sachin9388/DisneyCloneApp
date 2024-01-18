import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { BsTv } from "react-icons/bs";
import { MdOutlineMovie } from "react-icons/md";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import Png from "../../../../assets/Png/Pngs";
import { FaAngleRight } from "react-icons/fa6";

export const Header = () => {
  const [isHoveredSpace, setIsHoveredSpace] = useState("");
  const [isHoveredSearch, setIsHoveredSearch] = useState("");
  const [isHoveredHome, setIsHoveredHome] = useState("");
  const [isHoveredTv, setIsHoveredTv] = useState("");
  const [isHoveredMovies, setIsHoveredMovies] = useState("");
  const [isHoveredSports, setIsHoveredSports] = useState("");
  const [isHoveredCategories, setIsHoveredCategories] = useState("");

  return (
    <>
      <div className="">
        <div className="fixed">
          <div className="w-24 bg-[#0f1014]">
            <div className="pl-2 pt-4">
              <Link to="/paywall">
                <img className="w-14 ml-3" src={Png.DisneyPlus} />
                <button className=" flex rounded-xl text-sm font-semibold text-[#ffe08c] ml-[-4px] px-1 pb-[1px] bg-[#27231e]">
                  Subscribe
                  <FaAngleRight size={13} className="mt-1 ml-1" />
                </button>
              </Link>
            </div>
            <div className="pl-6 h-screen">
              <nav className="space-y-7 font-medium hover:w-36 ">
                <Link
                  to="/myspace"
                  className={`flex mt-5 gap-3 items-center p-[6px] text-[#9f9fa1] rounded-lg hover:text-white transition-transform duration-300 transform ${
                    isHoveredSpace ? "scale-110" : "scale-100"
                  }`}
                  onMouseEnter={() => setIsHoveredSpace(true)}
                  onMouseLeave={() => setIsHoveredSpace(false)}
                >
                  <CgProfile size={22} />
                  {isHoveredSpace && "My Space"}
                </Link>
                <Link
                  to="/search"
                  className={`flex mt-5 gap-3 items-center p-[6px] text-[#9f9fa1] rounded-lg hover:text-white transition-transform duration-300 transform ${
                    isHoveredSearch ? "scale-110" : "scale-100"
                  }`}
                  onMouseEnter={() => setIsHoveredSearch(true)}
                  onMouseLeave={() => setIsHoveredSearch(false)}
                >
                  <IoMdSearch size={25} />
                  {isHoveredSearch && "Search"}
                </Link>
                <Link
                  to="/home"
                  className={`flex mt-5 gap-3 items-center p-[6px] text-[#9f9fa1] rounded-lg hover:text-white transition-transform duration-300 transform ${
                    isHoveredHome ? "scale-110" : "scale-100"
                  }`}
                  onMouseEnter={() => setIsHoveredHome(true)}
                  onMouseLeave={() => setIsHoveredHome(false)}
                >
                  <GoHome size={25} />
                  {isHoveredHome && "Home"}
                </Link>
                <Link
                  to="/tvshows"
                  className={`flex mt-5 gap-3 items-center p-[6px] text-[#9f9fa1] rounded-lg hover:text-white transition-transform duration-300 transform ${
                    isHoveredTv ? "scale-110" : "scale-100"
                  }`}
                  onMouseEnter={() => setIsHoveredTv(true)}
                  onMouseLeave={() => setIsHoveredTv(false)}
                >
                  <BsTv size={25} />
                  {isHoveredTv && "TV"}
                </Link>
                <Link
                  to="/movies"
                  className={`flex mt-5 gap-3 items-center p-[6px] text-[#9f9fa1] rounded-lg hover:text-white transition-transform duration-300 transform ${
                    isHoveredMovies ? "scale-110" : "scale-100"
                  }`}
                  onMouseEnter={() => setIsHoveredMovies(true)}
                  onMouseLeave={() => setIsHoveredMovies(false)}
                >
                  <MdOutlineMovie size={25} />
                  {isHoveredMovies && "Movies"}
                </Link>
                <Link
                  to="/sports"
                  className={`flex mt-5 gap-3 items-center p-[6px] text-[#9f9fa1] rounded-lg hover:text-white transition-transform duration-300 transform ${
                    isHoveredSports ? "scale-110" : "scale-100"
                  }`}
                  onMouseEnter={() => setIsHoveredSports(true)}
                  onMouseLeave={() => setIsHoveredSports(false)}
                >
                  <MdOutlineSportsBaseball size={25} />
                  {isHoveredSports && "Sports"}
                </Link>
                <Link
                  to="/categories"
                  className={`flex mt-5 gap-3 items-center p-[6px] text-[#9f9fa1] rounded-lg hover:text-white transition-transform duration-300 transform ${
                    isHoveredCategories ? "scale-110" : "scale-100"
                  }`}
                  onMouseEnter={() => setIsHoveredCategories(true)}
                  onMouseLeave={() => setIsHoveredCategories(false)}
                >
                  <BiCategory size={25} />
                  {isHoveredCategories && "Categories"}
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};
