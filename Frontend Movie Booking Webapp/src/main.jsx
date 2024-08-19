import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body.jsx";
import CurrentlyPlaying from "./components/CurrentlyPlaying.jsx";
import CommingSoon from "./components/CommingSoon.jsx";
import BookTicket from "./components/BookTicket.jsx";
import MainBanner from "./components/MainBanner.jsx";
import Login from "./components/Login.jsx";

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
        path: "/book",
        element: <BookTicket />,
      },
      {
        path: "/currently-playing",
        element: (
          <>
            <MainBanner></MainBanner>
            <CurrentlyPlaying />
          </>
        ),
      },
      {
        path: "/comming-soon",
        element: <CommingSoon />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>
);
