
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CurrentAcc from './CurrentAcc.jsx/CurrentAcc';
import SavingsAcc from './SavingsAcc/SavingsAcc';
import StudentAcc from './StudentAcc/StudentAcc';

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

const AccountsDetails=() =>{

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <div className='w-full max-w-screen-xl mx-auto'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#f7fafc' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            variant="fullWidth"
            aria-label="full width tabs example"
            sx={{fontWeight:"bold"}}
          >
            <Tab label="Current Account" {...a11yProps(0)}
              sx={{fontWeight:"bold",
                '&.Mui-selected': { color: 'white',backgroundColor: 'rgb(1,87,155)'},
              }}
            />
            <Tab label="Savings Account" {...a11yProps(1)}
              sx={{fontWeight:"bold",
                '&.Mui-selected': { color: 'white',backgroundColor: 'rgb(1,87,155)'},
              }}
            />
            <Tab label="Student Account" {...a11yProps(2)} 
              sx={{fontWeight:"bold",
                '&.Mui-selected': { color: 'white',backgroundColor: 'rgb(1,87,155)'},
              }}
            />
          </Tabs>
        </Box>
      </div>
      <CustomTabPanel value={value} index={0}>
        <CurrentAcc/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SavingsAcc/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <StudentAcc/>
      </CustomTabPanel>
    </Box>
  );
}

export default AccountsDetails;