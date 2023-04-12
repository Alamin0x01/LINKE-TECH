import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
// import Statistics from "./components/Statistics";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
// import JobCategoryList from "./components/JobCategoryList";
import ErrorPage from "./components/ErrorPage";
import Statistics from "./components/Statistics";
import JobCategoryList from "./components/JobCategoryList";
// import JobCategoryList from "./components/JobCategoryList";

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
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/sss",
        element: <JobCategoryList />,
        loader: () => fetch("JobCategoryList.json"),
      },
      // {
      //   path: "/aaa",
      //   element: <JobCategoryList />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
