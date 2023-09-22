import React from 'react';
import JobList from './JobList';
import CenterTitle from '../../Components/Title/CenterTitle';
import { useLoaderData } from 'react-router-dom';
const Careers = () => {
  const jobListings = useLoaderData()

  return (
    <div className="container mx-auto py-8">
      <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="w-full px-4 py-10">
          <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[700px]">
            <CenterTitle
              subHeading={"Join Our Team"}
              heading={"Explore Career Opportunities"}>
            </CenterTitle>
            <p className="text-base text-body-color">
            Welcome to our dynamic team at Nexus Bank Ltd. We're on a mission to redefine banking and financial services, and we're looking for talented individuals like you to join us.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {jobListings.map((job, index) => (
          <JobList key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Careers;