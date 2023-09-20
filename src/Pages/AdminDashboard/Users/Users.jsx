import React, { useEffect, useState } from 'react';
import UsersCard from './UsersCard';
import UserTable from './UserTable';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
  const initialUsersData = useLoaderData();
  const [usersData, setUsersData] = useState(initialUsersData);

  useEffect(() => {
    setUsersData(initialUsersData);
  }, [initialUsersData]);

 return (
    <>
      <div>
        <h1 className='text-2xl mt-12 text-primary text-center'>Our all users</h1>
      </div>
      {/* <UsersCard></UsersCard> */}
      <UserTable usersTableData={usersData} setUsersTableData={setUsersData} />
    </>
  );
};

export default Users;