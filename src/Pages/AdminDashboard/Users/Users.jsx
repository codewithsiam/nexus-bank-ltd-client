import React from 'react';
import UsersCard from './UsersCard';

const Users = () => {
    return (
        <>
            <div>
                <h1 className='text-2xl mt-12'>Our all users</h1>
            </div>
            <UsersCard></UsersCard>
        </>
    );
};

export default Users;