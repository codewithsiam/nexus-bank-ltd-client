import CurrentAccTab from "./AccountTabDetails/CurrentAccTab";
import StudentAccTab from "./AccountTabDetails/StudentAccTab";
import SavingsAccTab from "./AccountTabDetails/SavingsAccTab";
import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Box, Tab, Tabs } from "@mui/material";

// this is design part with mui
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
  };
}

const AccountTab=({myAccountData})=> {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className=' w-full'>
      <Box sx={{ flexGrow: 1 }} className="md:flex gap-5 lg:gap-10">
        <div className='w-1/3 text-right '>
            <Tabs
                className='bg-white p-5 h-[200px]'
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Current Account" {...a11yProps(0)} />
                <Tab label="Student Account" {...a11yProps(1)} />
                <Tab label="Savings Account" {...a11yProps(2)} />
            </Tabs>
        </div>
        <div className='w-2/3'>
        <TabPanel value={value} index={0}>
            <CurrentAccTab myAccountData={myAccountData} />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <StudentAccTab myAccountData={myAccountData} />
        </TabPanel>
        <TabPanel value={value} index={2}>
            <SavingsAccTab myAccountData={myAccountData} />
        </TabPanel>
        </div>
        </Box>
    </div>
  );
}

export default AccountTab;