import React from "react";
import Routing from "./Component/Common/Routes";
import { Header } from "./Component/Pages/Navbar/Header";
import { Footer } from "./Component/Pages/Footer/Footer";

function MainApp() {
  return (
    <>
      <>
        <div className="fixed w-[15rem] top-0 left-0 hidden lg:block overflow-hidden overflow-y-auto">
          <Header />
        </div>

        <div className="z-[9] bg-[#121419] overflow-hidden overflow-y-auto w-full lg:w-[calc(100vw-12rem-8px)] mt-[px] lg:ml-[11rem] p-[px]">
          <Routing />
        </div>

        <Footer />
      </>
    </>
  );
}

export default MainApp;
