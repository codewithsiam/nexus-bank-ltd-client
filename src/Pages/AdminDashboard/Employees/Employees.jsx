import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import Table from "./Table";
import SearchFilter from "./SearchFilter";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Employees = () => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleUserDataOnChange = (e) => {
    const newUserData = { ...userData };
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mt-16 border-b-2 border-black">
        <PeopleIcon style={{ fontSize: "42" }} /> EMPLOYEES
      </h1>
      <SearchFilter handleOpen={handleOpen} />
      <Table />

      {/* modal data here  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <form
        //   onSubmit={handleOnSubmit}
          className="mt-32 bg-white rounded p-8 text-black w-10/12 md:w-8/12 lg:w-[700px] mx-auto "
        >
          <div className="border-1 border-gray-300 rounded-md p-4">
            <h3 className="border-b p-2 mb-4 border-gray-300">Add New Employee</h3>

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
                    label="Primary Email*"
                    variant="standard"
                    name="primaryEmail"
                    required
                    onChange={handleUserDataOnChange}
                    style={{ width: "300px" }}
                  />
                  <div className="mt-4">
                    <span >.nexus@gmail.com</span>
                  </div>
                </div>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={userData.role}
                    label="Role"
                    name="role"
                    required
                    onChange={handleUserDataOnChange}
                  >
                    <MenuItem value={"super-admin"}>Super Admin</MenuItem>
                    <MenuItem value={"operation-manager"}>
                      Operation Manager
                    </MenuItem>
                    <MenuItem value={"costumer-support-officer"}>
                      Costumer Support Officer
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="md:flex gap-6">
                <TextField
                  id="standard-basic"
                  type="email"
                  label="Secondary Email*"
                  variant="standard"
                  name="secondaryEmail"
                  required
                  onChange={handleUserDataOnChange}
                  sx={{ width: "100%" }}
                />
                <TextField
                  id="standard-basic"
                  type="number"
                  label="Phone Number*"
                  variant="standard"
                  name="phone"
                  required
                  onChange={handleUserDataOnChange}
                  sx={{ width: "100%" }}
                />
              </div>
            </div>
            <p className="mt-4">
              Manage user,s password, organization unit and profile photo
              <KeyboardArrowDownIcon />
            </p>
          </div>
          <div className="flex gap-2 justify-end my-2">
            <span
              className="cursor-pointer bg-red-500 py-2 px-4 text-white rounded-md"
              onClick={handleClose}
            >
              Cancel
            </span>
            <input
              className="nav-btn py-2 px-4 text-white rounded-md"
              type="submit"
              value="Add New Employee"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Employees;
