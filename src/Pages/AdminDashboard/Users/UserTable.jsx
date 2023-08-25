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
    width: 200,
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
        <IconButton aria-label="update" color="primary" onClick={() => handleUpdate(params.row.id)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" color="secondary" onClick={() => handleDelete(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      </>
    ),
  },
];

const rows = [
  { id: 1, userImage: 'https://th.bing.com/th/id/OIP.rbkAFakTOzAS9ufbDaYGNQHaHa?pid=ImgDet&w=550&h=550&rs=1', userName: 'User 1', userEmail: 'user1@example.com', role: 'Admin', plan: 'Basic', billing: 'Manual Cash', status: 'Active' },
  { id: 2, userImage: 'https://th.bing.com/th/id/OIP.rbkAFakTOzAS9ufbDaYGNQHaHa?pid=ImgDet&w=550&h=550&rs=1', userName: 'User 2', userEmail: 'user2@example.com', role: 'User', plan: 'Expertise', billing: 'Auto Debit', status: 'Inactive' },
  { id: 3, userImage: 'https://th.bing.com/th/id/OIP.rbkAFakTOzAS9ufbDaYGNQHaHa?pid=ImgDet&w=550&h=550&rs=1', userName: 'User 3', userEmail: 'user3@example.com', role: 'User', plan: 'Team', billing: 'Manual Cash', status: 'Active' },
  { id: 4, userImage: 'https://th.bing.com/th/id/OIP.rbkAFakTOzAS9ufbDaYGNQHaHa?pid=ImgDet&w=550&h=550&rs=1', userName: 'User 4', userEmail: 'user4@example.com', role: 'Admin', plan: 'Basic', billing: 'Auto Debit', status: 'Active' },
  { id: 5, userImage: 'https://th.bing.com/th/id/OIP.rbkAFakTOzAS9ufbDaYGNQHaHa?pid=ImgDet&w=550&h=550&rs=1', userName: 'User 5', userEmail: 'user5@example.com', role: 'User', plan: 'Basic', billing: 'Manual Cash', status: 'Inactive' },
  { id: 6, userImage: 'https://th.bing.com/th/id/OIP.rbkAFakTOzAS9ufbDaYGNQHaHa?pid=ImgDet&w=550&h=550&rs=1', userName: 'User 6', userEmail: 'user6@example.com', role: 'Admin', plan: 'Expertise', billing: 'Auto Debit', status: 'Active' },
  { id: 7, userImage: 'https://th.bing.com/th/id/OIP.rbkAFakTOzAS9ufbDaYGNQHaHa?pid=ImgDet&w=550&h=550&rs=1', userName: 'User 7', userEmail: 'user7@example.com', role: 'User', plan: 'Team', billing: 'Manual Cash', status: 'Active' },
  { id: 8, userImage: 'https://th.bing.com/th/id/OIP.rbkAFakTOzAS9ufbDaYGNQHaHa?pid=ImgDet&w=550&h=550&rs=1', userName: 'User 8', userEmail: 'user8@example.com', role: 'Admin', plan: 'Basic', billing: 'Auto Debit', status: 'Inactive' },
  { id: 9, userImage: 'https://th.bing.com/th/id/OIP.rbkAFakTOzAS9ufbDaYGNQHaHa?pid=ImgDet&w=550&h=550&rs=1', userName: 'User 9', userEmail: 'user9@example.com', role: 'User', plan: 'Expertise', billing: 'Manual Cash', status: 'Active' },
  { id: 10, userImage: 'https://th.bing.com/th/id/OIP.rbkAFakTOzAS9ufbDaYGNQHaHa?pid=ImgDet&w=550&h=550&rs=1', userName: 'User 10', userEmail: 'user10@example.com', role: 'User', plan: 'Team', billing: 'Auto Debit', status: 'Active' },
];


export default function UserTable() {
  const [filterValue, setFilterValue] = useState('');
  const handleUpdate = (id) => {
    // Implement your update logic here
    console.log(`Updating user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement your delete logic here
    console.log(`Deleting user with ID: ${id}`);
  };
  const filteredRows = rows.filter(row =>
    row.userName.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div style={{ width: '100%' }}>
      <div className='flex gap-5' style={{ marginBottom: '16px' }}>
        <h4>Search Here</h4>
        <input
          type="text"
          placeholder="Search by username"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </div>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
}
