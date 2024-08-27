import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body.jsx";
import BookTicket from "./components/BookTicket.jsx";
import MainBanner from "./components/MainBanner.jsx";
import Login from "./components/Login.jsx";
import UserProfile from "./components/UserProfile.jsx";
import AllMovies from "./components/AllMovies.jsx";
import AboutUs from "./components/AboutUs.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/book",
        element: <BookTicket />,
      },
      {
        path: "/currently-playing",
        element: <AllMovies category={"Currently Playing"} />,
      },
      {
        path: "/comming-soon",
        element: <AllMovies category={"Comming Soon"} />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>
);
