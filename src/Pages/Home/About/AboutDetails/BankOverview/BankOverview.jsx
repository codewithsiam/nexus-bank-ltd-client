import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Heading from '../../../../../Components/Title/Heading';

function createData(title, results) {
  return { title, results };
}
const rows = [
  createData('No. of Branches', 15),
  createData('No. of ATM Booths', 87),
  createData('Employees', "Over 4,866"),
  createData('Customers', "Over 17,00,000"),
  createData('Currency name', "Taka (BDT)"),
];

const BankOverview = () => {
    return (
        <div className=''>
            <Heading heading={"Who We Are"}></Heading>
            <div>
                <p className='text-[18px]'>From 2005 till date, Nexus Bank has been a case study in evolution, having transformed over time from a traditional organization to a critically acclaimed multi-faceted institution that embraces global best practices and chooses to be at the forefront of technological initiatives. Unlike many, the Bank's criteria for success are not only the bottom-line numbers but also the milestones set towards becoming the most complete bank in the country.</p>
            </div>
            <div className='mt-10'>
                <Heading heading={"Overview"}></Heading>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: "bold", fontSize:"20px" }}>Title</TableCell>
                                <TableCell sx={{ fontWeight: "bold", fontSize:"20px" }}>Results</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row"
                                    sx={{ fontSize:"17px" }}
                                    > 
                                        {row.title} 
                                    </TableCell>
                                    <TableCell sx={{ fontSize:"17px" }}>{row.results}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div>
                <WhyChooseUs></WhyChooseUs>
            </div>
        </div>
    );
};

export default BankOverview;