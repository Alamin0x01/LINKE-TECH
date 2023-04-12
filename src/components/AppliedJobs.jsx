import React from "react";

const AppliedJobs = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Applied Jobs</h1>
      <div className="my-container grid md:grid-cols-1 lg:grid-cols-1 gap-2">
        <div className=" card card-compact w-50% bg-base-100 shadow-xl">
          <div className="flex justify-between ">
            {" "}
            <figure>
              <img src="https://i.ibb.co/z2ZGQk5/google-1-1-1.png" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Software Engineer</h2>
              <p>Google LLC</p>
              <p>Dhaka, Bangladesh</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" card card-compact w-50% bg-base-100 shadow-xl">
          <div className="flex justify-between ">
            {" "}
            <figure>
              <img src="https://i.ibb.co/zV8HJjK/netflix-4-1.png" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Senior Product Designer</h2>
              <p>Netflix</p>
              <p>Dhaka, Bangladesh</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" card card-compact w-50% bg-base-100 shadow-xl">
          <div className="flex justify-between ">
            {" "}
            <figure>
              <img src="https://i.ibb.co/z2ZGQk5/google-1-1-1.png" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Software Engineer</h2>
              <p>Google LLC</p>
              <p>Dhaka, Bangladesh</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" card card-compact w-50% bg-base-100 shadow-xl">
          <div className="flex justify-between ">
            {" "}
            <figure>
              <img src="https://i.ibb.co/zV8HJjK/netflix-4-1.png" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Senior Product Designer</h2>
              <p>Netflix</p>
              <p>Dhaka, Bangladesh</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
