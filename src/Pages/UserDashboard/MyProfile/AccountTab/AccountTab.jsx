import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import AccountTabOne from './AccountTabOne';

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

  
  //--------------------------- this is backend function
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [transactionType, setTransactionType]=React.useState('')
  console.log(user)

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleTransactionTypeChange = (event) => {
    setTransactionType(event.target.value);
  };

  const handleTransaction = () => {
    setError('');
    setTransactionSuccess(false);

    if (isNaN(amount) || parseFloat(amount) <= 0) {
      setError('Invalid amount');
      return;
    }

    if (transactionType === 'withdraw' && parseFloat(amount) > balance) {
      setError('Insufficient balance');
      return;
    }

    // Simulate deposit and withdraw logic with a delay
    setTimeout(() => {
      const newBalance = transactionType === 'deposit' 
      ? balance + parseFloat(amount) 
      : balance - parseFloat(amount);

      // Update user balance and perform necessary actions
      // You can make an API call or use a state management library here

      // Assuming you have a function like setUserBalance(newBalance);
      // setUserBalance(newBalance);

      setTransactionSuccess(true);
    }, 1000);
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      <Tabs
        className='bg-white p-5 w-96 text-right'
        orientation="vertical"
        variant="scrollable"
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
      <TabPanel value={value} index={0}>
        <AccountTabOne user={user} amount={amount} handleAmountChange={handleAmountChange} transactionType={transactionType} handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AccountTabOne/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item four
      </TabPanel>
    </Box>
  );
}

export default AccountTab;