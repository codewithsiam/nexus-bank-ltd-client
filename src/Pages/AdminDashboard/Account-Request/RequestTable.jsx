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

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const RequestTable = ({ accounts, setAccounts ,control,setControl}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openAction, setOpenAction] = useState(false);

  const handleAction = () => {
    setOpenAction(!openAction);
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
        setControl(!control)
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Account ${status} successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <div className="w-full overflow-x-auto">
          <TableContainer className="pb-20">
            <Table stickyHeader aria-label="sticky table">
              <TableHead sx={{ fontSize: "24" }}>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Primary Email</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Account Type</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {accounts?.map((account) => (
                  <TableRow
                    key={account.id}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                  >
                    <TableCell>{account?._id}</TableCell>
                    <TableCell>
                      {account?.first_name + " " + account?.last_name}
                    </TableCell>
                    <TableCell>{account?.email}</TableCell>
                    <TableCell>{account?.phone}</TableCell>
                    <TableCell>{account?.account_type}</TableCell>
                    <TableCell>{account?.status}</TableCell>
                    <TableCell className="relative">
                      <MoreHorizIcon
                        onClick={handleAction}
                        className="cursor-pointer"
                      />
                      {openAction && (
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
                      )}
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
    </div>
  );
};

export default RequestTable;
