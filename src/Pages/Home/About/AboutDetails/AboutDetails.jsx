import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import BankOverview from "./BankOverview/BankOverview";
import History from "./History/History";
import Mission from "./Mission/Mission";
import { BiSolidChevronsRight } from "react-icons/bi";
import Management from "./Management/Management";
import Gallery from "./Gallery/Gallery";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    }
};

const AboutDetails = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabClick = () => {
    const googleDriveLink = 'https://drive.google.com/file/d/1y1xbvQWvQSpfXLE0ad0jSaAuECq5V6cl/view?usp=drive_link';   
    window.open(googleDriveLink, '_blank');
  };

  return (
    <div className="max-w-screen-xl mx-auto h-full mt-10 bg-gray-300">
      <Box 
      className="md:flex lg:gap-10 md:gap-5 justify-between"
      sx={{ flexGrow: 1, bgcolor: 'background.paper' }}>
        <Tabs className="bg-white px-3 py-10 mb-4 md:w-1/4 w-full border border-primary shadow-lg"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ 
            borderRight: 1, 
            borderColor: 'divider' ,
            '& .MuiTab-label': {
            color: 'white', 
            },
        }}
        >
          <Tab label={<span 
          className="text-primary font-semibold my-3 text-xl flex gap-2 items-center">Overview 
            <BiSolidChevronsRight/> </span>} {...a11yProps(0)} />
          <Tab label={<span 
          className="text-primary font-semibold my-3 text-xl flex gap-2 items-center">History 
            <BiSolidChevronsRight/></span>} {...a11yProps(1)} />
          <Tab label={<span 
          className="text-primary font-semibold my-3 text-xl flex gap-2 items-center">Vision and Mission 
            <BiSolidChevronsRight/></span>} {...a11yProps(2)} />
          <Tab label={<span 
          className="text-primary font-semibold my-3 text-xl flex gap-2 items-center">Management 
            <BiSolidChevronsRight/></span>} {...a11yProps(3)} />
          {/* <Tab label={<span 
          className="text-white font-semibold my-3 text-xl flex gap-2 items-center">Gallery 
            <BiSolidChevronsRight/></span>} {...a11yProps(4)} /> */}
          <Tab label={<span 
          className="text-primary font-semibold my-3 text-xl flex gap-2 items-center"
           onClick={handleTabClick}>Organogram <BiSolidChevronsRight/></span>} {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0} className="md:w-3/4 w-full"><BankOverview/></TabPanel>
        <TabPanel value={value} index={1} className="md:w-3/4 w-full"><History/></TabPanel>
        <TabPanel value={value} index={2} className="md:w-3/4 w-full"><Mission/></TabPanel>
        <TabPanel value={value} index={3} className="md:w-3/4 w-full"><Management/></TabPanel>
        <TabPanel value={value} index={4} className="md:w-3/4 w-full"><Gallery/></TabPanel>
        <TabPanel value={value} index={5} className="md:w-3/4 w-full"></TabPanel>
      </Box>
    </div>
  );
}

export default AboutDetails;

// https://i.ibb.co/5jCz6N7/hasan-emplyee.jpg
// https://i.ibb.co/M5y086D/mahdee.jpg
// https://i.ibb.co/G27pq0J/shuvo-employee.jpg
// https://i.ibb.co/jJQBg2n/siam-employee.png