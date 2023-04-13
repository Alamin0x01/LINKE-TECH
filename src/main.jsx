import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import ErrorPage from "./components/ErrorPage";
import Statistics from "./components/Statistics";
import AppliedJobs from "./components/AppliedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => fetch("JobCategoryList.json"),
      },
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
