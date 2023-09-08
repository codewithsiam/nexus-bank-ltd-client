import React from 'react';
import JobList from './JobList';
import CenterTitle from '../../Components/Title/CenterTitle';
const Careers = () => {
  const jobListings = [
    {
      title: 'Financial Analyst',
      vacancy: '2 positions',
      salaryRange: '$60,000 - $80,000 per year',
      experience: '2+ years of financial analysis',
      description: 'Join our team as a Financial Analyst and help drive financial excellence.',
      applyLink: 'https://example.com/apply/financial-analyst',
    },
    {
      title: 'Customer Service Representative',
      vacancy: '3 positions',
      salaryRange: '$40,000 - $50,000 per year',
      experience: '1+ year of customer service',
      description: 'Provide top-notch customer service and support to our valued clients.',
      applyLink: 'https://example.com/apply/customer-service-rep',
    },
    {
      title: 'Loan Officer',
      vacancy: '1 position',
      salaryRange: '$70,000 - $90,000 per year',
      experience: '3+ years of lending experience',
      description: 'Help clients secure loans and achieve their financial goals.',
      applyLink: 'https://example.com/apply/loan-officer',
    },
    {
      title: 'Bank Branch Manager',
      vacancy: '1 position',
      salaryRange: '$80,000 - $100,000 per year',
      experience: '5+ years of branch management',
      description: 'Lead our branch team and oversee daily operations.',
      applyLink: 'https://example.com/apply/bank-branch-manager',
    },
    {
      title: 'Compliance Officer',
      vacancy: '1 position',
      salaryRange: '$75,000 - $95,000 per year',
      experience: '4+ years of compliance experience',
      description: 'Ensure adherence to banking regulations and internal compliance standards.',
      applyLink: 'https://example.com/apply/compliance-officer',
    },
    {
      title: 'Mortgage Specialist',
      vacancy: '2 positions',
      salaryRange: '$65,000 - $85,000 per year',
      experience: '2+ years of mortgage expertise',
      description: 'Guide clients through the mortgage process and facilitate home financing.',
      applyLink: 'https://example.com/apply/mortgage-specialist',
    },
    {
      title: 'Investment Advisor',
      vacancy: '2 positions',
      salaryRange: '$70,000 - $90,000 per year',
      experience: '3+ years of investment advisory',
      description: 'Provide expert investment advice and financial planning to clients.',
      applyLink: 'https://example.com/apply/investment-advisor',
    },
    {
      title: 'Teller',
      vacancy: '4 positions',
      salaryRange: '$35,000 - $45,000 per year',
      experience: 'None required (entry-level)',
      description: 'Handle customer transactions, including deposits and withdrawals.',
      applyLink: 'https://example.com/apply/teller',
    },
    {
      title: 'Credit Analyst',
      vacancy: '2 positions',
      salaryRange: '$55,000 - $75,000 per year',
      experience: '2+ years of credit analysis',
      description: 'Assess creditworthiness and manage credit portfolios for clients.',
      applyLink: 'https://example.com/apply/credit-analyst',
    },
    {
      title: 'Wealth Management Advisor',
      vacancy: '1 position',
      salaryRange: '$90,000 - $120,000 per year',
      experience: '5+ years of wealth management',
      description: 'Manage high-net-worth client portfolios and provide wealth planning services.',
      applyLink: 'https://example.com/apply/wealth-management-advisor',
    },
  ];  

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobListings.map((job, index) => (
          <JobList key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Careers;