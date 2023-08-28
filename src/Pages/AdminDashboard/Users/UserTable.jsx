import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

const columns = [
  {
    field: 'user',
    headerName: 'User',
    width: 350,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={params.row.userImage} alt={params.row.userName} style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 10 }} />
        <div>
          <div>{params.row.userName}</div>
          <div>{params.row.userEmail}</div>
        </div>
      </div>
    ),
  },
  { field: 'role', headerName: 'Role', width: 150 },
  { field: 'plan', headerName: 'Plan', width: 150 },
  { field: 'billing', headerName: 'Billing', width: 150 },
  { field: 'status', headerName: 'Status', width: 120 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <>
        <IconButton aria-label="update" color="primary" onClick={() => handleUpdate(params.row._id)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" color="secondary" onClick={() => handleDelete(params.row._id)}>
          <DeleteIcon />
        </IconButton>
      </>
    ),
  },
];

export default function UserTable({ usersTableData }) {
  const [filterValue, setFilterValue] = useState('');

  const handleUpdate = (id) => {
    // Implement your update logic here
    console.log(`Updating user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement your delete logic here
    console.log(`Deleting user with ID: ${id}`);
  };

  const filteredRows = usersTableData.filter((row) =>
    (row.userName && row.userName.toLowerCase().includes(filterValue.toLowerCase())) ||
    (row.userEmail && row.userEmail.toLowerCase().includes(filterValue.toLowerCase()))
  );

  return (
    <div className='w-full mx-auto flex flex-col items-center' style={{ width: '100%' }}>
      <div className='flex flex-col md:flex-row gap-5 items-center' style={{ marginBottom: '16px' }}>
        <h4>Search Here</h4>
        <input
          className='border-2 px-4 py-3'
          type="text"
          placeholder="Search by username or email"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row._id}
        />
      </div>
    </div>
  );
}
