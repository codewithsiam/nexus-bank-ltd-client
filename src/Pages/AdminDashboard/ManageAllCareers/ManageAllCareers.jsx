import React, { useEffect, useState } from 'react';
import CareersTable from './CareersTable';
import { Link, useLoaderData } from 'react-router-dom';

const ManageAllCareers = () => {
    const initialCareersData = useLoaderData()
    const [careersData, setCareersData] = useState(initialCareersData);

    useEffect(() => {
        setCareersData(initialCareersData);
    }, [initialCareersData]);

    return (
        <div className='my-20'>
            
            <div className='flex justify-between'>
                <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">Add A Career</h2>
                </div>
                <div>
                    <Link to={'/admin/addacareer'} className='bg-primary text-white py-4 px-2 rounded font-semibold'>Add a Careers</Link>
                </div>
            </div>
            <CareersTable careersData={careersData} setCareersData={setCareersData}></CareersTable>
        </div>
    );
};

export default ManageAllCareers;