import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { baseUrl } from '../../../../config/server';

const PasswordChange = () => {
    const [showOldPassword, setShowOldPassword] = React.useState(false);
    const handleClickShowOldPassword = () => setShowOldPassword((show) => !show);
    const [showNewPassword, setShowNewPassword] = React.useState(false);
    const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
    const [showRetypePassword, setShowRetypePassword] = React.useState(false);
    const handleClickShowRetypePassword = () => setShowRetypePassword((show) => !show);
    const handleMouseDownPassword = (event) => { event.preventDefault(); };

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Validate passwords
      if (newPassword !== confirmPassword) {
        setMessage('New passwords do not match.');
        return;
        }
    // Send a request to the server to change the password
    try {
        const response = await fetch(`${baseUrl}/change-password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ oldPassword, newPassword }),
        });
        
        if (response.ok) {
          setMessage('Password changed successfully.');
          setOldPassword('');
          setNewPassword('');
          setConfirmPassword('');
        } else {
          const data = await response.json();
          setMessage(data.error || 'Password change failed.');
        }
      } catch (error) {
        setMessage('An error occurred while changing the password.');
        console.error(error);
      }
    }
    return (
        <div className='mt-16 border bg-white border-blue-200 px-10 py-5 rounded border-spacing-1' style={{ boxShadow: '1px 1px 5px lightblue' }}>
            <h1 className='text-xl md:text-3xl font-semibold text-primary '>Change Password</h1>
            <form onSubmit={handleSubmit}>
                <div className='bg-gray-200 my-5 p-10 rounded'>
                <div className='grid lg:grid-cols-2 mb-3'>
                    <div className=' '>
                        <div className="form-control w-full mb-5">
                            <label className="label">
                                <span className="label-text font-bold text-lg md:text-lg">Old Password</span>
                            </label>
                            <FormControl sx={{ m: 1, background:"white", borderRadius:"15px" }} 
                            variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                required
                                id="outlined-adornment-password"
                                type={showOldPassword ? 'text' : 'password'}
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowOldPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {showOldPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </div>
                        <div className="form-control w-full mb-5">
                            <label className="label">
                                <span className="label-text font-bold text-lg">New Password</span>
                            </label>
                            <FormControl sx={{ m: 1, background:"white", borderRadius:"15px" }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                required
                                id="outlined-adornment-password"
                                type={showNewPassword ? 'text' : 'password'}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowNewPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </div>
                        <div className="form-control w-full mb-5">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Re-type Password</span>
                            </label>
                            <FormControl sx={{ m: 1, background:"white", borderRadius:"15px" }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                required
                                id="outlined-adornment-password"
                                type={showRetypePassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowRetypePassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {showRetypePassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </div>
                    </div>
                </div>
                {/* Error/Success Message */}
                {message && <div className="text-red-500">{message}</div>}

                <div className='h-[1px] w-full border border-dashed bg-primary'></div>
                <input type="submit" 
                className="cursor-pointer bg-primary text-white text-lg mt-6 input input-bordered w-full max-w-xs" 
                value="Change Password" />
                </div>
            </form>
        </div>
    );
};

export default PasswordChange;