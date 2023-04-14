import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "./FeaturedJobs";

const AppliedJobs = () => {
  const saveCart = useLoaderData();
  const [allJobs, setAllJobs] = useState(saveCart);
  const [newJobs, setNewJobs] = useState(saveCart);

  const filterHandler = (event) => {
    const target = event.target.value;
    if (target) {
      const filterJob = allJobs.filter((job) => job.remoteOrOnsite == target);
      // console.log(filterJob);
      setNewJobs(filterJob);
    } else {
      setNewJobs(newJobs);
    }
  };

  return (
    <>
      <div className="bg-gray-100 rounded -mt-24">
        <div className="flex justify-between">
          <img src="https://i.ibb.co/gF5CfdD/Vector.png" alt="" />
          <h2 className="text-center mt-12 pt-12 font-bold text-3xl mb-5">
            Applied Jobs
          </h2>
          <img src="https://i.ibb.co/cQkpWvG/Vector-1.png" alt="Vector1" />
        </div>
      </div>
      <div className="pt-7 mb-5 text-end px-12">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn m-1">
            Filter By Job
          </label>
          <select
            onChange={filterHandler}
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <option value={`Onsite`}>Onsite</option>
            <option value={`Remote`}>Remote</option>
          </select>
        </div>
        {newJobs.map((jobInfo) => (
          <FeaturedJobs key={jobInfo.id} job={jobInfo} />
        ))}
      </div>
    </>
  );
};

export default AppliedJobs;
