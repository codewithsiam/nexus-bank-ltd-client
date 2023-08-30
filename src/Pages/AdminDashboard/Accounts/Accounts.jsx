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
import { baseUrl } from "../../../config/server";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SerarchAndFilter from "./SerarchAndFilter";

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/approved-accounts`)
      .then((res) => res.json())
      .then((data) => setAccounts(data));
  }, []);


  return (
    <div>
      <h1 className="text-2xl font-bold mt-16 border-b-2 border-black">
        <AccountTreeIcon style={{ fontSize: "42" }} /> ACCOUNTS
      </h1>
      <SerarchAndFilter accounts={accounts && accounts} setAccounts={setAccounts} />
      <div className="mt-4">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <div className="w-full overflow-x-auto">
            <TableContainer sx={{ maxHeight: 800 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead sx={{ fontSize: "24" }}>
                  <TableRow>
                    <TableCell>Serial</TableCell>
                    <TableCell>Full Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Account Number</TableCell>
                    <TableCell>Account Type</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {accounts?.map((account, index) => (
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
                      <TableCell>{account?.account_number}</TableCell>
                      <TableCell>{account?.account_type}</TableCell>
                      <TableCell>Delete</TableCell>
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
    </div>
  );
};

export default Accounts;
