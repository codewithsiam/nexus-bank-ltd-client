import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DepositTab from './DepositTab';
import DPSTab from './DPSTab';

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

const SavingsTab=({user})=> {
  const {accountNumber, balance} = user;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className=' w-full'>
      <Box sx={{ flexGrow: 1 }} className="md:flex gap-5 lg:gap-10">
        <div className='md:w-[250px] lg:w-96 text-right '>
            <Tabs
                className='bg-white p-5 h-[200px]'
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Deposit" {...a11yProps(0)} />
                <Tab label="DPS" {...a11yProps(1)} />
            </Tabs>
        </div>
        <TabPanel value={value} index={0}>
            <DepositTab user={user} />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <DPSTab user={user} />
        </TabPanel>
        </Box>
    </div>

  );
}

export default SavingsTab;