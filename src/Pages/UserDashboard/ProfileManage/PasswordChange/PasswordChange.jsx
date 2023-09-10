import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { baseUrl } from "../../../../config/server";
import Swal from "sweetalert2";

const PasswordChange = () => {
  const [showOldPassword, setShowOldPassword] = React.useState(false);
  const handleClickShowOldPassword = () => setShowOldPassword((show) => !show);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
  const [showRetypePassword, setShowRetypePassword] = React.useState(false);
  const handleClickShowRetypePassword = () =>
    setShowRetypePassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccess("");
    // Validate passwords
    if (newPassword !== confirmPassword) {
      setErrorMessage("New passwords do not match.");
      return;
    }
    if (newPassword.length > 5) {
      setErrorMessage("Password must be minimum 6 character long");
      return;
    }

    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await fetch(`${baseUrl}/change-password`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${storedToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setSuccess(data.message);
        Swal.fire("success", `${data.message}`);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setErrorMessage(data.message || "Password change failed.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while changing the password.");
      console.error(error);
    }
  };

  return (
    <div
      className="mt-16 border bg-white border-blue-200 px-10 py-5 rounded border-spacing-1"
      style={{ boxShadow: "1px 1px 5px lightblue" }}
    >
      <h1 className="text-xl md:text-3xl font-semibold text-primary ">
        Change Password
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-200 my-5 p-10 rounded">
          <div className="grid lg:grid-cols-2 mb-3">
            <div className=" ">
              <div className="form-control w-full mb-5">
                <label className="label">
                  <span className="label-text font-bold text-lg md:text-lg">
                    Old Password
                  </span>
                </label>
                <FormControl
                  sx={{ m: 1, background: "white", borderRadius: "15px" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    required
                    id="outlined-adornment-password"
                    type={showOldPassword ? "text" : "password"}
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
                  <span className="label-text font-bold text-lg">
                    New Password
                  </span>
                </label>
                <FormControl
                  sx={{ m: 1, background: "white", borderRadius: "15px" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    required
                    id="outlined-adornment-password"
                    type={showNewPassword ? "text" : "password"}
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
                  <span className="label-text font-bold text-lg">
                    Re-type Password
                  </span>
                </label>
                <FormControl
                  sx={{ m: 1, background: "white", borderRadius: "15px" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    required
                    id="outlined-adornment-password"
                    type={showRetypePassword ? "text" : "password"}
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
                          {showRetypePassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
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
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          {success && <div className="text-green-500">{success}</div>}

          <div className="h-[1px] w-full border border-dashed bg-primary"></div>
          <input
            type="submit"
            className="cursor-pointer bg-primary text-white text-lg mt-6 input input-bordered w-full max-w-xs"
            value="Change Password"
          />
        </div>
      </form>
    </div>
  );
};

export default PasswordChange;
