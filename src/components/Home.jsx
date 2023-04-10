import React from "react";
// import Lottie from "lottie-react";
import man from "../assets/All Images/man.png";
// import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link, useLoaderData } from "react-router-dom";
// import JobCategoryList from "./JobCategoryList";

const Home = () => {
  // const jobCategoryList = useLoaderData();
  // console.log(jobCategoryList);
  return (
    <div className="my-container">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        {/* Text Content */}
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
              One Step <br className="hidden md:block" /> Closer To Your{" "}
              <br className="hidden md:block" />
              <span className="inline-block text-blue-400">Dream Job</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
          </div>
          <div className=" flex-col items-center md:flex-row">
            <Link to="/books" className="btn  md:w-auto md:mr-4">
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
      {/* <JobCategoryList /> */}
      {/* {JobCategoryList.map((JobCategoryLists) => (
        <h1>console.log(JobCategoryLists)</h1>
      ))} */}
      <div className="my-container">
        <div className="flex flex-col items-center">
          <h1 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Job Category List
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="my-container  grid grid-cols-4 gap-4">
          <div className="card w-22 glass bg-indigo-100 ">
            <figure>
              <img src="https://i.ibb.co/xF1gW72/chip-1.png" alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Engineering Job</h2>
              <p>300 Jobs Available</p>
            </div>
          </div>
          <div className="card w-22 glass bg-indigo-100">
            <figure>
              <img src="https://i.ibb.co/xF1gW72/chip-1.png" alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Engineering Job</h2>
              <p>300 Jobs Available</p>
            </div>
          </div>
          <div className="card w-22 glass bg-indigo-100">
            <figure>
              <img src="https://i.ibb.co/xF1gW72/chip-1.png" alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Engineering Job</h2>
              <p>300 Jobs Available</p>
            </div>
          </div>
          <div className="card w-22 glass bg-indigo-100">
            <figure>
              <img src="https://i.ibb.co/xF1gW72/chip-1.png" alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Engineering Job</h2>
              <p>300 Jobs Available</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Job Category List
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
