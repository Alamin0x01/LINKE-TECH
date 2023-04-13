import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const FeaturedJobs = ({ job }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    location,
    fulltimeOrParttime,
    salary,
  } = job;
  return (
    <div>
      <div className="card card-compact w-50% bg-base-100 shadow-xl ">
        <figure>
          <img src={companyLogo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{jobTitle}</h2>
          <p className="font-semibold ">{companyName}</p>

          <div className="flex gap-3">
            <span className="border text-blue-500 font-semibold lg:text-xl lg:p-1  rounded-md">
              <p>{remoteOrOnsite}</p>
            </span>
            <span className="border lg:p-2 text-purple-500 lg:text-xl font-semibold rounded-md">
              <p>{fulltimeOrParttime}</p>
            </span>
          </div>
          <div className="flex gap-1 ">
            <MapPinIcon className="h-5 w-5 " />
            <span>
              <p>{location}</p>
            </span>
            <CurrencyDollarIcon className="h-5 w-5" />
            <span>
              <p>Salary: {salary}</p>
            </span>
          </div>
          <Link to={`/jobdetails/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
