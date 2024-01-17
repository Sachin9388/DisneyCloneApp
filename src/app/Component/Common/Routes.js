import React from "react";
import { Route, Routes } from "react-router-dom";
import { Paywall } from "../Pages/Paywall/Paywall";
import { MySpace } from "../Pages/MySpace/MySpace";
import  Search  from "../Pages/Search/Search";
import { Home } from "../Pages/Home/Home";
import { TvShows } from "../Pages/TvShows/TvShows";
import { Movies } from "../Pages/Movies/Movies";
import { Sports } from "../Pages/Sports/Sports";
import { Categories } from "../Pages/Categories/Categories";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/paywall" element={<Paywall />} />
    <Route path="/myspace" element={<MySpace />} />
    <Route path="/search" element={<Search />} />
    <Route path="/tvshows" element={<TvShows />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/sports" element={<Sports />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
);

export default Routing;

// const Routing = createBrowserRouter([
//   {
//     path: "/",
//     Component: <Header />,
//     children: [
//       {
//         path: "/paywall",
//         Component: <Paywall />,
//       },
//       {
//         path: "/myspace",
//         Component: <MySpace />,
//       },
//       {
//         path: "/search",
//         Component: <Search />,
//       },
//       {
//         path: "/home",
//         Component: <Home />,
//       },
//       {
//         path: "/tvshows",
//         Component: <TvShows />,
//       },
//       {
//         path: "/movies",
//         Component: <Movies />,
//       },
//       {
//         path: "/sports",
//         Component: <Sports />,
//       },
//       {
//         path: "/categories",
//         Component: <Categories />,
//       },
//     ],
//   },
// ]);
// export default Routing;
