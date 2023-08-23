
import { AuthContext } from "../../../providers/AuthProvider";
import { FaFacebook, FaInstagram, FaPencilAlt, FaTwitter, FaUser, FaMobileAlt } from "react-icons/fa";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import AccountTab from "./AccountTab/AccountTab";
import ProfileTabOne from "./AboutTab";
import AboutTab from "./AboutTab";

const myProfileData = [
    {
      id: 1,
      photoURL: 'https://react-material.fusetheme.com/assets/images/avatars/male-04.jpg',
      firstName: "Rukshana Akter",
      nickname: "Rupu",
      email: "rupu.tht@gmail.com",
      facebook: "facebook.com/rukshana.2015",
      number: +8801791687736,
      address: "tongi, Gazipur, Dhaka",
      profession: "Front end developer",
      gender:"female",
      dob: "February 30th, 1980",
      accountNumber: 441965406712489,
      balance: 40000,
      accountType: "savings",
      bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
];

const MyProfile = () => {
    // const { user } = useContext(AuthContext);
    const user = myProfileData[0];
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
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }
  
    const {photoURL,nickname,firstName,profession} = user;
    return (
        <div className=" pt-10 bg-gray-100">
            <div class="relative w-full text-white">
                <img src="https://i.ibb.co/3rg7VGN/profile-banner.jpg" class="w-full h-[300px]" alt="Louvre"/>
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 opacity-70"></div>
                <div className=" pl-5 md:pl-10 lg:pl-20 absolute top-12">
                    <h1 className="text-4xl">Hellow {nickname}</h1>
                    <p>This is your profile page. You can see the all history and you can update your profile.</p>
                    <div className="">
                        <div className="inline-block overflow-hidden mt-4">
                        <a href="#" className="flex gap-1 items-center border-2 border-white nav-btn text-white cursor-pointer px-3 py-2"><FaPencilAlt className="mr-1"></FaPencilAlt> Edit my profile</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[90px] bg-white border-b-2 flex gap-8 shadow-xl">
                <div className="relative w-[300px]">
                    <img className="absolute -top-[80px] right-0 border-gray-300 border-[5px] rounded-full w-[150px] h-[150px]" src={photoURL} alt="user"/>
                </div>
                <div className="flex gap-8 justify-between items-center w-[65%]">
                    <div className="mt-3">
                        <h4 className="text-2xl font-semibold">{firstName}</h4>
                        <h3 className="text-lg text-gray-500">{profession}</h3>
                    </div>
                    <div>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="About" {...a11yProps(0)} />
                                <Tab label="Account" {...a11yProps(1)} />
                                <Tab label="Card" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                    </Box>
                    </div>
                </div>
            </div>
            <div className="container mx-auto ">
                <CustomTabPanel value={value} index={0}>
                    <AboutTab user={user}/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <AccountTab user={user}/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel>
            </div>
        </div>

    );
};

export default MyProfile;