import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import employeeData from "../../../constant/employees";
import { baseUrl } from "../../../config/server";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import axios from "axios";
import Swal from "sweetalert2";
import { jsx } from "@emotion/react";

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const RequestTable = ({
  requestedAccounts,
  setRequestedAccounts,
  control,
  setControl,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openAction, setOpenAction] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [feedId, setFeedId] = useState(null);
  //   console.log(classes);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // handle status ----
  const handleStatus = (id, status) => {
    axios.patch(`${baseUrl}/status/${id}/?status=${status}`).then((data) => {
      if (data.data.modifiedCount > 0) {
        setControl(!control);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Account ${status} successfully`,
          showConfirmButton: false,
          timer: 1500,
        });

        if (status === "denied") {
          setIsOpen(true);
          setFeedId(id);
        }
      }
    });
  };

  // handle feedBack ---------
  const handleFeedback = (event) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    fetch(`${baseUrl}/feedback/${feedId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `Successfully send feedback`,
            showConfirmButton: false,
            timer: 1500,
          });
          setIsOpen(false);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <div className="w-full overflow-x-auto">
          <TableContainer className="pb-20">
            <Table stickyHeader aria-label="sticky table">
              <TableHead sx={{ fontSize: "24" }}>
                <TableRow>
                  <TableCell>Serial</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Primary Email</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Account Type</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requestedAccounts?.map((account,index) => (
                  <TableRow
                    key={account.id}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      {account?.first_name + " " + account?.last_name}
                    </TableCell>
                    <TableCell>{account?.email}</TableCell>
                    <TableCell>{account?.phone}</TableCell>
                    <TableCell>{account?.account_type}</TableCell>
                    <TableCell>{account?.status}</TableCell>
                    <TableCell className="relative">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleStatus(account._id, "denied")}
                          className="px-3 py-2 bg-red-500 rounded-md"
                        >
                          Deny
                        </button>
                        <button
                          onClick={() => handleStatus(account._id, "approved")}
                          className="px-3 py-2 bg-green-500 rounded-md"
                        >
                          Approve
                        </button>
                      </div>
                      {/* {openAction && (
                        <div className="absolute top-12 -left-2  z-30 bg-white text-black p-4 ">
                          <p
                            onClick={() =>
                              handleStatus(account._id, "approved")
                            }
                            className="mb-2 border-b pb-2 cursor-pointer"
                          >
                            Approve
                          </p>
                          <p
                            onClick={() => handleStatus(account._id, "denied")}
                            className="cursor-pointer"
                          >
                            Denied
                          </p>
                        </div>
                      )} */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>
      {isOpen && (
        <div className="fixed inset-0  flex items-center justify-center z-10 shadow-xl">
          <div className="absolute  px-16 bg-white w-2/5 p-6 rounded-lg">
            <h2 className="text-2xl my-4 font-semibold">Give Feedback</h2>
            <form onSubmit={handleFeedback}>
              <textarea
                className="textarea w-full my-4 h-32 textarea-bordered"
                name="feedback"
                required
                placeholder="Write Feedback"
              ></textarea>

              <div className="flex justify-between">
                <input
                  className="btn-primary rounded cursor-pointer px-4 py-2"
                  type="submit"
                  value="Send Feedback"
                />
                <button
                  onClick={closeModal}
                  className="bg-gray-500 rounded-md font-semibold hover:bg-gray-700 text-white py-2 px-4"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestTable;
