import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JobCategoryList from "./components/JobCategoryList";
import FeaturedJobs from "./components/FeaturedJobs";

const App = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>
      <JobCategoryList />
      <FeaturedJobs />
      <Footer />
    </div>
  );
};

export default App;
