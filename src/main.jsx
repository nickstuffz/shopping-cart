import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
