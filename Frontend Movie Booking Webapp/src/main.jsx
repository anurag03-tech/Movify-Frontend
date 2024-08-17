import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body.jsx";
import CurrentlyPlaying from "./components/CurrentlyPlaying.jsx";
import CommingSoon from "./components/CommingSoon.jsx";
import BookTicket from "./components/BookTicket.jsx";

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
        path: "/book",
        element: <BookTicket />,
      },
      {
        path: "/currently-playing",
        element: <CurrentlyPlaying />,
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
