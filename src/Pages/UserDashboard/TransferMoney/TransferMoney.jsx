import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TransferMoney = () => {
    return (
        <div className='bg-cover bg-center pt-16 bg-[url("https://i.ibb.co/Rz5hnKC/bg-moneytransfer.jpg")]'>
            <div>
                <h1 className='text-xl text-center font-bold underline uppercase text-blue-900'>Money Transfer</h1>
            </div>
            <div className='grid md:grid-cols-2 bg-white mx-20 mt-10 gap-10'>
                <div className='ml-5 md:ml-10 mt-5'>
                    <Box component="form" 
                    sx={{'& .MuiTextField-root': { m: 1, width: '100%' }, }} 
                    noValidate autoComplete="off">
                        <div>
                            {/* <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/> */}
                            {/* <TextField required id="standard-required" label="Required" defaultValue="Hello World" variant="standard" /> */}
                            {/* <TextField id="standard-search" label="Search field" type="search" variant="standard" /> */}
                        </div>
                        <div>
                            <div className='mb-5'>
                                <h1 className='ml-[8px] text-base font-bold'>Receiver Name</h1>
                                <TextField id="filled-helperText" label="Receiver name" variant="filled" />
                            </div>
                            <div className='mb-5'>
                                <h1 className='ml-[8px] text-base font-bold'>Receiver Account Number</h1>
                            <TextField id="filled-number" label="Account Number" variant="filled" />
                            </div>
                            <div className='mb-5'>
                                <h1 className='ml-[8px] text-base font-bold'>Account Type</h1>
                            <TextField id="filled-helperText" label="Account Type" variant="filled" />
                            </div>
                            <div className='mb-5'>
                                <h1 className='ml-[8px] text-base font-bold'>Your Email Address</h1>
                            <TextField id="filled-helperText" label="Your email" variant="filled" />
                            </div>
                            <div className='mb-4'>
                                <h1 className='ml-[8px] text-base font-bold'>Receiver Name</h1>
                                <TextField id="Standard-helperText" label="Receiver name" variant="filled" />
                            </div>

                        </div>
                    </Box>
                </div>
                <div className=''>
                    <img className='w-full' src="https://i.ibb.co/8KmTYGc/Money-Transfer-1.png" alt="" />
                </div>
            </div>
        </div>

    );
};

export default TransferMoney;
