import React, { useRef } from "react";
import PeopleIcon from "@mui/icons-material/People";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import Table from "./EmployeeTable";
import SearchFilter from "./SearchFilter";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import EmployeeTable from "./EmployeeTable";
import { useEffect } from "react";
import { baseUrl } from "../../../config/server";
import toast from "react-hot-toast";

// generate random string --------------
function generateRandomString() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

const randomString = generateRandomString();

const Employees = () => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [temporaryPassword, setTemporaryPassword] = useState("");
  const [isCopied, setIsCopied] = React.useState(false);
  const [hidePassword, SetHidePassword] = React.useState(true);
  const [employees, setEmployees] = useState([]);
  const [control, setControl] = useState(true);
  const [error,setError] = useState("");
  console.log(temporaryPassword);

  useEffect(() => {
    fetch(`${baseUrl}/employees`)
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, [control]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setTemporaryPassword("");
  };

  // get data from ------------
  const handleUserDataOnChange = (e) => {
    const newUserData = { ...userData };
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  };
  // click on submit ---------
  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch(`${baseUrl}/add-employee`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        firstName: userData.first_name,
        lastName: userData.last_name,
        username: userData.username,
        email: userData.email,
        designation: userData.designation,
        phoneNumber: userData.phoneNumber,
        password: randomString,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.acknowledged === true){
          setTemporaryPassword(randomString);
   
          setControl(!control);
        }
        else{
          setError(data.message)
          toast.error(data.message)
        }
       
      })
      .catch((err) => console.log(err));
  };

  // copy
  const passRef = useRef(null);
  const handleCopy = () => {
    if (passRef.current) {
      const range = document.createRange();
      range.selectNode(passRef.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    }
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mt-16 border-b-2 border-black">
        <PeopleIcon style={{ fontSize: "42" }} /> EMPLOYEES
      </h1>
      <SearchFilter handleOpen={handleOpen} setEmployees={setEmployees} />
      <EmployeeTable employees={employees && employees} control={control} setControl={setControl} />

      {/* modal data here  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        {temporaryPassword === "" ? (
          <form
            onSubmit={handleOnSubmit}
            //   onSubmit={handleOnSubmit}
            className="mt-32 bg-white rounded p-8 text-black w-10/12 md:w-8/12 lg:w-[700px] mx-auto "
          >
            <div className="border-1 border-gray-300 rounded-md p-4">
              <h3 className="border-b p-2 mb-4 border-gray-300 ">
                Add New Employee
              </h3>

              <div className="space-y-4">
                <div className="md:flex gap-6">
                  <TextField
                    id="standard-basic"
                    label="First Name*"
                    variant="standard"
                    required
                    type="text"
                    name="first_name"
                    onChange={handleUserDataOnChange}
                    sx={{ width: "100%" }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Last Name*"
                    type="text"
                    variant="standard"
                    name="last_name"
                    required
                    onChange={handleUserDataOnChange}
                    sx={{ width: "100%" }}
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <TextField
                      id="standard-basic"
                      type="text"
                      label="Username*"
                      variant="standard"
                      name="username"
                      required
                      onChange={handleUserDataOnChange}
                      style={{ width: "300px" }}
                    />
                    <div className="mt-4"></div>
                  </div>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={userData.role}
                      label="Role"
                      name="designation"
                      required
                      onChange={handleUserDataOnChange}
                    >
                      <MenuItem value={"Assistant Manager"}>
                        Assistant Manager
                      </MenuItem>
                      <MenuItem value={"Bank Teller"}>Bank Teller</MenuItem>
                      <MenuItem value={"Loan Officer"}>Loan Officer</MenuItem>
                      <MenuItem value={"Relationship Manager"}>
                        Relationship Manager
                      </MenuItem>
                      <MenuItem value={"Financial Advisor"}>
                        Financial Advisor
                      </MenuItem>
                      <MenuItem value={"Credit Analyst"}>
                        Credit Analyst
                      </MenuItem>
                      <MenuItem value={"Risk Manager"}>Risk Manager</MenuItem>
                      <MenuItem value={"Collections Officer"}>
                        Collections Officer
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="md:flex gap-6">
                  <TextField
                    id="standard-basic"
                    type="email"
                    label="Email*"
                    variant="standard"
                    name="email"
                    required
                    onChange={handleUserDataOnChange}
                    sx={{ width: "100%" }}
                  />
                  <TextField
                    id="standard-basic"
                    type="number"
                    label="Phone Number*"
                    variant="standard"
                    name="phoneNumber"
                    required
                    onChange={handleUserDataOnChange}
                    sx={{ width: "100%" }}
                  />
                </div>
              </div>
            {
              error &&   <p className="mt-4 text-red-600">
              {error}
              
            </p>
            }
            </div>
            <div className="flex gap-2 justify-end my-2">
              <span
                className="cursor-pointer bg-red-500 py-2 px-4 text-white rounded-md"
                onClick={handleClose}
              >
                Cancel
              </span>
              {/* <input
              className="my-btn py-2 px-4 text-white rounded-md"
              type="submit"
              value="Add New Employee"
            /> */}
              <button className="my-btn py-2 px-4 text-white rounded-md">
                {" "}
                Add New Employee
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-32 bg-white text-black rounded w-10/12 md:w-8/12 lg:w-[700px] mx-auto p-8 ">
            <div className="border-1 border-gray-300 rounded-md p-4">
              <div className="text-center space-y-6 relative">
                <div>
                  <AccountCircleIcon style={{ fontSize: "100" }} />
                </div>
                <h4>User Name : {userData.username}</h4>
                {isCopied && (
                  <p className="absolute ml-4 left-2/3 mb-6">Copied</p>
                )}
                <p className="flex gap-2 items-center justify-center">
                  <span>Password : </span>{" "}
                  <span ref={passRef}>
                    <span>{temporaryPassword}</span>
                  </span>
                  
                  <button className="ml-4" onClick={handleCopy}>
                    {" "}
                    {isCopied ? (
                      <ContentCopyTwoToneIcon style={{ fontSize: "20" }} />
                    ) : (
                      <ContentCopyIcon
                        style={{ fontSize: "20" }}
                      ></ContentCopyIcon>
                    )}
                  </button>
                </p>

                <div className="flex justify-end">
                  <button
                    className="cursor-pointer bg-red-500 py-2 px-4 text-white rounded-md"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Employees;
