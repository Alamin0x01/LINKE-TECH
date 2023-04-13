import React from "react";

const JobCategoryLists = ({ job }) => {
  const { categoryLogo, categoryName, jobsAvailable } = job;
  return (
    <div className="card w-22 glass bg-indigo-100 ">
      <figure className="pl-4">
        <img src={categoryLogo} />
      </figure>

      <div className="card-body">
        <h2 className="card-title ">{categoryName}</h2>
        <p>{jobsAvailable} Jobs Available</p>
      </div>
    </div>
  );
};

export default JobCategoryLists;
