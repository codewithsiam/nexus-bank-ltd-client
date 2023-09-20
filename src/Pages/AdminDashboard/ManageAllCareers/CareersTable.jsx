import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../../config/server';

export default function CareersTable({ careersData, setCareersData }) {
    const [filterValue, setFilterValue] = useState('');

    const filteredRows = careersData.filter(
        (row) =>
            row.title && row.title.toLowerCase().includes(filterValue.toLowerCase())
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
                fetch(`${baseUrl}/careers/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error(`Error: ${res.status} - ${res.statusText}`);
                        }
                        return res.json();
                    })
                    .then((data) => {
                        // console.log(data);
                        if (data.message === "Career deleted successfully") {
                            const remaining = careersData.filter((career) => career._id !== _id);
                            setCareersData(remaining); // Update the state using setCareersData
                            Swal.fire('Deleted!', 'Career deleted successfully!', 'success');
                        } else {
                            console.error('Unexpected server response:', data);
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting career:', error);
                    });
            }
        });
    };

    const columns = [
        { field: 'title', headerName: 'Title', width: 250 },
        { field: 'vacancy', headerName: 'Vacancy', width: 200 },
        { field: 'salaryRange', headerName: 'Salary', width: 200 },
        { field: 'experience', headerName: 'Experience', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => (
                <>
                    <IconButton
                        aria-label="delete"
                        color="secondary"
                        onClick={() => handleDelete(params.row._id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                    <Link to={`/path-to-profile/${params.row._id}`}>
                        <CgProfile className="h-6 w-6 cursor-pointer m-6" />
                    </Link>
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
