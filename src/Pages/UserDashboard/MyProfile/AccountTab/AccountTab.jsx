import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import AccountTabOne from './AccountTabDetails/AccountTabOne';
import AccountTabTwo from './AccountTabDetails/AccountTabTwo';
import AccountTabThree from './AccountTabDetails/AccountTabThree';
import AccountTabFour from './AccountTabDetails/AccountTabFour';

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

const AccountTab=({user})=> {
  const {accountNumber, balance} = user;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='w-full'>
      <Box  className="md:flex justify-between gap-5 lg:gap-10">
      <Tabs
        className='bg-white p-5 w-full md:w-1/3  text-right '
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Current Account" {...a11yProps(0)} />
        <Tab label="Savings Account" {...a11yProps(1)} />
        <Tab label="Salary Account" {...a11yProps(2)} />
        <Tab label="Student Account" {...a11yProps(3)} />
      </Tabs>
    <div className='w-full md:w-2/3 '>
    <TabPanel value={value} index={0}>
        <AccountTabOne user={user} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AccountTabTwo user={user} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AccountTabThree user={user} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AccountTabFour user={user} />
      </TabPanel>
    </div>

    </Box>
    </div>

  );
}

export default AccountTab;