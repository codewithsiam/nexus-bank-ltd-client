import React, { useEffect, useState } from 'react';
import CareersTable from './CareersTable';
import { useLoaderData } from 'react-router-dom';

const ManageAllCareers = () => {
    const initialCareersData = useLoaderData()
    const [careersData, setCareersData] = useState(initialCareersData);

    useEffect(() => {
        setCareersData(initialCareersData);
    }, [initialCareersData]);

    return (
        <div className='my-20'>
            <h3 className='text-2xl text-primary text-center'>Manage All Careers</h3>
            <CareersTable careersData={careersData} setCareersData={setCareersData}></CareersTable>
        </div>
    );
};

export default ManageAllCareers;