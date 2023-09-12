
import { baseUrl } from "../../../config/server";
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


const CardRequestTable = () => {
    const [cardRequests, setCardRequests] = useState([]);
    useEffect(() => {
        fetch(`${baseUrl}/credit-card-requests`)
          .then((res) => res.json())
          .then((data) => setCardRequests(data));
      }, []);
  return (
    <div className="mt-16">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <div className="w-full overflow-x-auto">
          <TableContainer sx={{ maxHeight: 800, minHeight: 400 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead sx={{ fontSize: "24" }}>
                <TableRow>
                  <TableCell>Serial</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Nid Card Number</TableCell>
                  <TableCell>Account Number</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cardRequests?.map((card, index) => (
                  <TableRow
                    key={card.id}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      {card.title + " " + card?.firstName + " " + card?.lastName}
                    </TableCell>
                    <TableCell>{card.nidCardNumber}</TableCell>
                    <TableCell>{card?.accountNumber}</TableCell>
                    
                    <TableCell>
                    <div className="flex gap-3 items-center">
                        <button className="bg-red-500 px-4 py-2 rounded text-white ">Deny</button>
                        <button className="bg-green-500 px-4 py-2 rounded text-white ">Approve</button>
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

export default CardRequestTable;
