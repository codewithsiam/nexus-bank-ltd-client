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
import axios from "axios";
import Swal from "sweetalert2";

const CardRequestTable = () => {
  const [cardRequests, setCardRequests] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [control, setControl] = useState(false);
  const [feedId, setFeedId] = useState(null);
  useEffect(() => {
    fetch(`${baseUrl}/credit-card-requests`)
      .then((res) => res.json())
      .then((data) => setCardRequests(data));
  }, [control]);
  const closeModal = () => {
    setIsOpen(false);
  };

  // handle status ----
  const handleStatus = (id, status) => {
    axios
      .patch(`${baseUrl}/card-status/${id}/?status=${status}`)
      .then((data) => {
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
    fetch(`${baseUrl}/card-feedback/${feedId}`, {
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
                  <TableRow key={card.id} hover role="checkbox" tabIndex={-1}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      {card.title +
                        " " +
                        card?.firstName +
                        " " +
                        card?.lastName}
                    </TableCell>
                    <TableCell>{card.nidCardNumber}</TableCell>
                    <TableCell>{card?.accountNumber}</TableCell>
                    <TableCell>
                      <div className="flex gap-3 items-center">
                        <button
                          onClick={() => handleStatus(card._id, "denied")}
                          className="bg-red-500 px-4 py-2 rounded text-white "
                        >
                          Deny
                        </button>
                        <button className="bg-green-500 px-4 py-2 rounded text-white ">
                          Approve
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

export default CardRequestTable;
