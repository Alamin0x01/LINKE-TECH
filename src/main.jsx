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
import JobDetails from "./components/JobDetails";
import cartJobApplyed from "./components/Loaders/cartJobApplyed";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "jobdetails/:id",
        element: <JobDetails />,
        loader: () => fetch("/FeaturedJobs.json"),
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
        loader: cartJobApplyed,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
