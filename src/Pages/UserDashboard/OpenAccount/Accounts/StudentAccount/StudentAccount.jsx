import React from "react";
import LeftSide from "../SavingAccount/LeftSide";
import StudentForm from "./StudentForm";

const StudentAccount = () => {
  return (
    <div className="mt-20 px-4 lg:flex gap-10 w-full max-w-screen-xl mx-auto">
      <div className="w-full lg:w-2/5">
        <LeftSide accountName={"Student Account"} accountImage={"https://media.istockphoto.com/id/1295025460/vector/education-fund-collect-money-for-school-college-and-university-cost-or-student-scholarship.jpg?s=612x612&w=0&k=20&c=F1GxRdA0eo_qqEOHLOExZHrFBZzfE9rAIuqgAHOahBU="} description={"A Student Account is specifically designed for students who are pursuing their education. It typically offers benefits such as low or no fees, a low minimum balance requirement, and features like online banking. It's a great way for students to manage their finances while focusing on their studies."}/>
      </div>
      <div className="w-full lg:w-3/5">
       <StudentForm/>
      </div>
    </div>
  );
};

export default StudentAccount;
