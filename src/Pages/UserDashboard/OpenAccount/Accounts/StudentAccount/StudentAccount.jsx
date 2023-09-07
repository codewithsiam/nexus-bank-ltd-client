import React from "react";
import LeftSide from "../SavingAccount/LeftSide";
import StudentForm from "./StudentForm";

const StudentAccount = () => {
  return (
    <div className="mt-20 flex gap-10 w-full max-w-screen-xl mx-auto">
      <div className="w-2/5">
        <LeftSide />
      </div>
      <div className="w-full md:w-3/5">
       <StudentForm/>
      </div>
    </div>
  );
};

export default StudentAccount;
