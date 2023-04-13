import React, { useEffect, useState } from "react";
import man from "../assets/All Images/man.png";
import { Link } from "react-router-dom";
import JobCategoryLists from "./JobCategoryLists";
import FeaturedJobs from "./FeaturedJobs";
const Home = () => {
  const [JobCategoryList, setJobCategoryList] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [seeAllJobs, setSeeAllJobs] = useState(false);
  useEffect(() => {
    fetch("/JobCategoryList.json")
      .then((res) => res.json())
      .then((data) => setJobCategoryList(data));
  }, []);
  useEffect(() => {
    fetch("/FeaturedJobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  const handleSellAllJob = () => {
    setSeeAllJobs(true);
  };
  const displayJobs = seeAllJobs ? jobs : jobs.slice(0, 4);
  return (
    <div className="my-container">
      <div className="flex flex-col items-center justify-between  lg:flex-row">
        {/* Text Content */}
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-7xl ">
              One Step <br className="hidden md:block" /> Closer To Your{" "}
              <br className="hidden md:block" />
              <span className="inline-block text-purple-500">Dream Job</span>
            </h2>
            <p className="text-base text-gray-400 md:text-lg">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
          </div>
          <div className=" flex flex-col items-center md:flex-row">
            <Link to="/" className="btn  md:w-auto md:mr-4">
              <div className="inline-flex items-center  w-full h-full">
                <p className="mr-3">Get Started</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <img src={man} alt="" />
          </div>
        </div>
      </div>
      {/* Job Category Lists */}

      <div className="text-center mt-40 ">
        <h2 className="font-bold text-4xl">Job Category List</h2>
        <p className="text-gray-400 pt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid lg:grid-cols-4 my-container gap-5">
        {JobCategoryList.map((job) => (
          <JobCategoryLists key={job.id} job={job} />
        ))}
      </div>

      {/* Featured Job lists */}

      <div className=" text-center flex flex-col items-center">
        <h1 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Featured Jobs
        </h1>
        <p className="text-gray-400 pt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="my-container grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        {displayJobs.map((job) => (
          <FeaturedJobs key={job.id} job={job} />
        ))}
      </div>
      {!seeAllJobs && (
        <button
          onClick={handleSellAllJob}
          className="btn btn-primary  block mx-auto mb-5"
        >
          See All Jobs
        </button>
      )}
    </div>
  );
};

export default Home;
