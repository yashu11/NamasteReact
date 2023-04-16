import { createBrowserHistory } from "@remix-run/router";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./About";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Error from "./Error";
import Contact from "./Contact";
import ResturantMenu from "./ResturantMenu";
import Profile from "./Profile";
import ShimmerUI from "./Shimmer";
import Instamart from "./Instamart";
import Cart from "./Cart";
import Me from "./Me";
// const Instamart = lazy(() => {
//   import("./instamart");
// });

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "me",
            element: <Me />,
          },
        ],
      },

      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:id",
        element: <ResturantMenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
