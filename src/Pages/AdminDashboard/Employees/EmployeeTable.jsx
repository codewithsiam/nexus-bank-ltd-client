import React, { useContext } from "react";
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
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const EmployeeTable = ({ employees, setControl, control }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { user } = useContext(AuthContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // handle employee delete ------------
  const handleEmployeeDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${baseUrl}/delete-employee/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: `Employee deleted Successfully`,
                showConfirmButton: false,
                timer: 1500,
              });
              setControl(!control);
            } else if (!data.success) {
              toast.error(`${data.message}`);
              // console.log("data table",data);
            }
          });
      }
    });
  };

  // handle employee designation
  const handleEmployeeDesignation = (id, designation) => {
    axios
      .patch(`${baseUrl}/designation/${id}/?designation=${designation}`)
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          setControl(!control);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `Make ${designation} successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (!data.data.success) {
          toast.error(`${data.data.message}`);
          // console.log("data table",data.data);
        }
      });
  };

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <div className="w-full overflow-x-auto">
          <TableContainer sx={{ maxHeight: 800, minHeight: 400 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead sx={{ fontSize: "24" }}>
                <TableRow>
                  <TableCell>Serial</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Primary Email</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Designation</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees?.map((employee, index) => (
                  <TableRow
                    key={employee.id}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      {employee?.firstName + " " + employee?.lastName}
                    </TableCell>
                    <TableCell>{employee?.email}</TableCell>
                    <TableCell>{employee?.phoneNumber}</TableCell>
                    <TableCell>{employee?.designation}</TableCell>
                    <TableCell>
                      <div className="flex gap-2 items-center justify-center ">
                        <div>
                          <details className="dropdown">
                            <summary className="m-1 btn">
                              Change Designation
                            </summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                              <li>
                                <button
                                  onClick={() =>
                                    handleEmployeeDesignation(
                                      employee._id,
                                      "Manager"
                                    )
                                  }
                                >
                                  Make Manager
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() =>
                                    handleEmployeeDesignation(
                                      employee._id,
                                      "Risk Manager"
                                    )
                                  }
                                >
                                  Make Risk Manager
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() =>
                                    handleEmployeeDesignation(
                                      employee._id,
                                      "Loan Officer"
                                    )
                                  }
                                >
                                  Make Loan Officer
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() =>
                                    handleEmployeeDesignation(
                                      employee._id,
                                      "Helpline Representative"
                                    )
                                  }
                                >
                                  Make Helpline Representative
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() =>
                                    handleEmployeeDesignation(
                                      employee._id,
                                      "Financial Advisor"
                                    )
                                  }
                                >
                                  Make Financial Advisor
                                </button>
                              </li>
                            </ul>
                          </details>
                        </div>
                        <button
                          onClick={() => handleEmployeeDelete(employee._id)}
                          className="bg-red-600 px-6 py-3 text-white font-semibold rounded"
                        >
                          Delete
                        </button>
                      </div>
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

export default EmployeeTable;
