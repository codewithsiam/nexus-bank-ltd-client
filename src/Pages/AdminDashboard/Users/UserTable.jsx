import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { baseUrl } from '../../../config/server';

export default function UserTable({ usersTableData, setUsersTableData }) {
  const [filterValue, setFilterValue] = useState('');

  const filteredRows = usersTableData.filter(
    (row) =>
      (row.name && row.name.toLowerCase().includes(filterValue.toLowerCase())) ||
      (row.email && row.email.toLowerCase().includes(filterValue.toLowerCase()))
  );

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${baseUrl}/users/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = usersTableData.filter((user) => user._id !== _id);
              setUsersTableData(remaining); // Update the state using setUsersTableData
              Swal.fire('Deleted!', 'User deleted successfully!', 'success');
            }
          })
          .catch((error) => {
            console.error('Error deleting user:', error);
          });
      }
    });
  };

  const columns = [
    {
      field: 'user',
      headerName: 'User',
      width: 400,
      renderCell: (params) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={params.row.photo}
            alt={params.row.name}
            style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 10 }}
          />
          <div>
            <div>{params.row.name}</div>
            <div>{params.row.email}</div>
          </div>
        </div>
      ),
    },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'plan', headerName: 'Plan', width: 150 },
    { field: 'billing', headerName: 'Billing', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <>
          <IconButton aria-label="delete" color="secondary" onClick={() => handleDelete(params.row._id)}>
            <DeleteIcon />
          </IconButton>
          {/* <Link to={`${params.row.email}`}>
            <CgProfile className="h-6 w-6 cursor-pointer m-6" />
          </Link> */}
        </>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col mx-auto">
      <div className="flex flex-col md:flex-row gap-5 items-center" style={{ marginBottom: '16px' }}>
        <h4>Search Here</h4>
        <input
          className="border-2 px-4 py-3"
          type="text"
          placeholder="Search by name or email"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </div>
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <DataGrid rows={filteredRows} columns={columns} pageSize={5} getRowId={(row) => row._id} />
      </div>
    </div>
  );
}
