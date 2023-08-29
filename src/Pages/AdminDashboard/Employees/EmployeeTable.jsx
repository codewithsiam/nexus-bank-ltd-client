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

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

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
