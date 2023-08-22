import React from 'react';
import UsersCard from './UsersCard';
import UserTable from './UserTable';

const Users = () => {
    return (
        <>
            <div>
                <h1 className='text-2xl mt-12'>Our all users</h1>
            </div>
            <UsersCard></UsersCard>
            <UserTable></UserTable>
        </>
    );
};

export default Users;