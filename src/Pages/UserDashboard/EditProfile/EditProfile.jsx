import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const EditProfile = () => {
  const profileData = useLoaderData();
  console.log(profileData)
  const { user } = useContext(AuthContext);
  console.log(user)

  return (
    <div>
      <h1 className="mt-20">hellow</h1>
    </div>
  );
};

export default EditProfile;
