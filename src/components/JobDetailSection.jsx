import React from "react";
import {
  BriefcaseIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
const JobDetailSection = (props) => {
  const {
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    salary,
    jobTitle,
    contactInformation,
    location,
  } = props.job;

  //   const handleAddToCart = props.handleAddToCart;
  return (
    <div className="grid lg:grid-cols-4">
      <div className="pt-8 col-span-3 px-4">
        <div className="mb-8">
          <h1 className="text-xl">
            <span className="text-2xl font-bold">Job Description:</span>{" "}
            {jobDescription}
          </h1>
        </div>

        <div className="mb-8">
          <h1 className="text-xl">
            <span className="text-2xl font-bold">Job REsponsibility:</span>{" "}
            {jobResponsibility}
          </h1>
        </div>

        <div className="mb-8">
          <h1 className="text-xl">
            <span className="text-2xl font-bold">
              Educational Requirements:
            </span>{" "}
            {educationalRequirements}
          </h1>
        </div>

        <div className="mb-8">
          <h1 className="text-xl">
            <span className="text-2xl font-bold">Experiences:</span>{" "}
            {experiences}
          </h1>
        </div>
      </div>
      <div className="col-span-1 rounded-md bg-violet-200 mt-8">
        <h1 className="pl-4 pt-4 text-3xl font-bold pb-2">Job Details</h1>
        <hr />

        <div className="py-8">
          <span className="flex gap-3 pb-4 pl-4">
            <CurrencyDollarIcon className="h-8 w-8 text-violet-400" />{" "}
            <p className="text-2xl">
              <span className="text-2xl font-bold">Salary</span>: {salary}
            </p>
          </span>

          <span className="flex gap-3 pb-4 pl-4">
            {" "}
            <BriefcaseIcon className="h-8 text-violet-400 w-8" />{" "}
            <p className="text-xl">
              <span className="text-2xl font-bold">Job Title:</span> {jobTitle}
            </p>
          </span>
          <h2 className="text-3xl font-bold p-2">Contact Information</h2>
          <hr />
          <div className="pt-8">
            <span className="flex gap-3 pb-4 pl-4">
              {" "}
              <PhoneIcon className="h-8 text-violet-400 w-8" />{" "}
              <p className="text-xl">
                <span className="text-2xl font-bold">Phone:</span>{" "}
                {contactInformation.phone}
              </p>
            </span>

            <span className="flex gap-3 pb-4 pl-4">
              {" "}
              <EnvelopeIcon className="h-8 text-violet-400 w-8" />{" "}
              <p className="text-xl">
                <span className="text-2xl font-bold">Email:</span>{" "}
                {contactInformation.email}
              </p>
            </span>
            <span className="flex gap-3 pb-4 pl-4">
              {" "}
              <MapPinIcon className="h-8 text-violet-400 w-8" />{" "}
              <p className="text-xl">
                <span className="text-2xl font-bold">Address:</span> {location}
              </p>
            </span>
          </div>
        </div>
        <button
          //   onClick={() => handleAddToCart(props.job)}
          className="btn btn-primary w-[64%] block mx-auto mb-5"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetailSection;
