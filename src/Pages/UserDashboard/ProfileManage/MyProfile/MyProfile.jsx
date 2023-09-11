import {FaPencilAlt} from "react-icons/fa";
import * as React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import AboutTab from "./AboutTab";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseUrl } from "../../../../config/server";
import LoadingSpinner from "../../../Shared/LoadingSpinner/LoadingSpinner";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const myAccountData=[
    {
      account_type: 'Current Account', 
      balance: 1000,
      email: "rupu.pharm@gmail.com",
      status: "approved",
      account_number:"1003465000788",
    },
    {
        account_type: 'Millionaire', 
        balance: 1000,
        email: "rupu.pharm@gmail.com",
        status: "approved",
        account_number:"1003465000788",
    },
    {
        account_type: 'Payroll Card', 
        balance: 5600,
        email: "rupu.pharm@gmail.com",
        status: "approved",
        account_number:"1003465000788",
    },
    {
        account_type: 'Credit Card', 
        balance: 946,
        email: "rupu.pharm@gmail.com",
        status: "approved",
        account_number:"1003465000788",
    },
    {
        account_type: 'Savings Account', 
        balance: 500,
        email: "rupu.pharm@gmail.com",
        status: "approved",
        account_number:"1003465000320",
    },
    {
        account_type: 'Student Account', 
        balance: 70,
        email: "rupu.pharm@gmail.com",
        status: "approved",
        account_number:"1003465000320",
    },
]

const MyProfile = () => {
    const {user}=useContext(AuthContext)
    console.log(user)
    const [loadingProfile, setLoadingProfile] = useState(true);
    const [myProfileData, setMyProfileData] = useState([]);

    useEffect(() => {
      if (user && user.email) {
        fetch(`${baseUrl}/approved-account?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMyProfileData(data);
          setLoadingProfile(false); 
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoadingProfile(false); 
      });
      } else {
        setLoadingProfile(false);
      }
    }, [user]);
    // console.log(myProfileData);
    
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  
  return(
    
    <div className=" pt-10 bg-gray-100">
      <div class="relative w-full text-white">
        <img src="https://i.ibb.co/3rg7VGN/profile-banner.jpg" class="w-full h-[230px]" alt="Louvre" />
        <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-gradient-to-r from-[rgb(1,87,155)] via-blue-600 to-blue-300 opacity-60"></div>
        <div className="pl-5 md:pl-10 lg:pl-20 absolute top-12">
          <h1 className="text-4xl mb-3">Hey 
            {user?.nickName ? nickName : " User"}
          </h1>
          <p>This is your profile page. You can see the all history and you can update your profile.</p>
        </div>
      </div>
      <div className="mb-5 h-[230px] md:h-[90px] bg-white border-b-2 ">
          <div className="w-full max-w-screen-xl mx-auto md:flex gap-20 items-center justify-center xl:justify-evenly">
            <div className="flex justify-center">
              <div className="relative w-[153px] h-[75px]">
                <img
                  className="absolute w-[150px] h-[150px] -top-[75px] md:-top-[80px] left-0 border-gray-300 border-[5px] rounded-full"
                  src={user?user.photoURL: "https://i.ibb.co/7kT8phM/profile5.png"} alt="user"
                />
              </div>
            </div>
            <div className="md:flex gap-8 justify-around text-center">
              <div className="mt-3">
                <h4 className="text-xl md:text-2xl font-semibold">{user?user.displayName:"User Name"}</h4>
                <h3 className="text-md md:text-lg text-gray-500">{user?user.profession:"User Profession"}</h3>
              </div>
              <div className="inline-block overflow-hidden mt-4">
                <Link
                  to={`/dashboard/edit-profile`}
                  className="flex gap-1 items-center border-2 border-white bg-primary rounded text-white cursor-pointer px-3 py-2"
                >
                  <FaPencilAlt className="mr-1"></FaPencilAlt> Edit profile
                </Link>
              </div>
            </div>
          </div>
      </div>
      <div>
        {user ? 
          <AboutTab user={user} /> 
          : <h1 className="mt-12 text-center text-blue-800 font-bold text-2xl">Please Login first</h1> 
        }
      </div>
    </div>
  )
};

export default MyProfile;
