import React, { useEffect, useState } from "react";
import { addToDb } from "../utilities/fakedb";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import JobDetailSection from "./JobDetailSection";
const JobDetails = () => {
  const jobDetail = useLoaderData();
  let jobId = useParams();
  const [jobDetails, setJobDetail] = useState([]);

  useEffect(() => {
    let savedCart = [];
    const jobData = jobDetail.find((job) => job.id == jobId.id);
    if (jobData) {
      savedCart.push(jobData);
      setJobDetail(savedCart);
    }
  }, []);

  const handleAddToCart = (job) => {
    let newCart = [];
    const exist = jobDetails.find((jobs) => jobs.id === job.id);
    if (!exist) {
      job.quantity = 1;
      newCart = [...jobDetails, job];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = jobDetails.filter((jobs) => jobs.id !== job.id);
      newCart = [...remaining, exist];
      toast.success("Add this Item Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    setJobDetail(newCart);
    addToDb(job.id);
  };
  return (
    <div>
      <div className="bg-gray-100 rounded -mt-24 ">
        <div className="flex justify-between">
          {/* <img src={Vector} alt="" /> */}
          <h1 className="mt-12 pt-12 text-4xl font-bold">Job Details</h1>
          {/* <img src={Vector1} alt="" /> */}
        </div>
      </div>
      <div>
        {jobDetails.map((job) => (
          <JobDetailSection
            key={job.id}
            job={job}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default JobDetails;
