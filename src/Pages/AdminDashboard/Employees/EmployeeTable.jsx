import React from "react";
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


function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}



const EmployeeTable = ({employees}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    // <div className="overflow-x-auto   border border-gray-300 p-4 mt-4 shadow-sm">
    //   <table className=" min-w-full text-lg">
    //     <thead className="text-lg">
    //       <tr>
    //         <th>Employee Id</th>
    //         <th>Full Name</th>
    //         <th>Designation</th>
    //         <th>Phone Number</th>
    //         <th>Email</th>
    //         <th>Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <th>1</th>
    //         <td>Manik Sarker</td>
    //         <td>Manager</td>
    //         <td>01754545</td>
    //         <td>amnik@gamilc.om</td>
    //         <td>Delete</td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <div className="w-full overflow-x-auto">
          <TableContainer sx={{ maxHeight: 800 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead sx={{ fontSize: "24" }}>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Primary Email</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Designation</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees?.map((employee) => (
                  <TableRow
                    key={employee.id}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                  >
                    <TableCell>{employee?._id}</TableCell>
                    <TableCell>{employee?.firstName + " " + employee?.lastName}</TableCell>
                    <TableCell>{employee?.primaryEmail}</TableCell>
                    <TableCell>{employee?.phoneNumber}</TableCell>
                    <TableCell>{employee?.designation}</TableCell>
                    <TableCell>
                      Delete
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
