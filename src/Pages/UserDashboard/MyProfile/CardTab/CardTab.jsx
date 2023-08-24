import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardTabOne from './CardTabDetails/CardTabOne';
import CardTabTwo from './CardTabDetails/CardTabTwo';

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

const CardTab=({user})=> {
  const {accountNumber, balance} = user;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // kdjkdjkdj

  return (
    <div className=' w-full h-full'>
      <Box className="md:flex justify-between space-y-4 gap-5 lg:gap-10">
        <div className='bg-white p-5 w-full md:w-1/3  text-right '>
            <Tabs
                className='bg-white '
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Credit Card" {...a11yProps(0)} />
                <Tab label="Payroll Card" {...a11yProps(1)} />
            </Tabs>
        </div>
       <div className='w-full md:w-2/3 '>
       <TabPanel value={value} index={0}>
            <CardTabOne user={user} />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <CardTabTwo user={user} />
        </TabPanel>
       </div>
        </Box>
    </div>

  );
}

export default CardTab;