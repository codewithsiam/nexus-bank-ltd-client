import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import BankOverview from "./BankOverview/BankOverview";

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

  return (
    <div className="max-w-screen-xl mx-auto h-full mt-10">
        <Box 
        className="md:flex lg:gap-10 md:gap-5 justify-between"
        sx={{ flexGrow: 1, bgcolor: 'background.paper' }}>
            <Tabs
            className="bg-primary p-10 mb-4 md:w-1/4 w-full"
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
                <Tab label={<span className="text-white font-semibold mb-3 text-xl">Overview</span>} {...a11yProps(0)} />
                <Tab label={<span className="text-white font-semibold mb-3 text-xl">History</span>} {...a11yProps(1)} />
                <Tab label={<span className="text-white font-semibold mb-3 text-xl">Vision and Mission</span>} {...a11yProps(2)} />
                <Tab label={<span className="text-white font-semibold mb-3 text-xl">Management</span>} {...a11yProps(3)} />
                <Tab label={<span className="text-white font-semibold mb-3 text-xl">Gallery</span>} {...a11yProps(4)} />
                <Tab label={<span className="text-white font-semibold mb-3 text-xl">Organogram</span>} {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0} className="md:w-2/3 w-full">
                <BankOverview/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
        </Box>
    </div>
  );
}

export default AboutDetails;