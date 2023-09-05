import React from 'react';
import UsersCard from './UsersCard';
import UserTable from './UserTable';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Users = () => {
  const initialUsersData = useLoaderData();
  const [usersData, setUsersData] = useState(initialUsersData);

  useEffect(() => {
    setUsersData(initialUsersData);
  }, [initialUsersData]);

  //  const rows = [
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.CAG8UP-PYB4YiePysDXt0AHaLH?pid=ImgDet&w=182&h=273&c=7",
  //     "name": "John Doe",
  //     "email": "john.doe@example.com",
  //     "role": "Admin",
  //     "plan": "Premium",
  //     "billing": "Credit Card",
  //     "status": "Active"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.mHvG9ISpFLq8HxgoQvtkGAHaKD?pid=ImgDet&w=182&h=247&c=7",
  //     "name": "Jane Smith",
  //     "email": "jane.smith@example.com",
  //     "role": "User",
  //     "plan": "Basic",
  //     "billing": "PayPal",
  //     "status": "Inactive"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.4pUEDfEEq_xMCzmuYt7qEgHaLH?pid=ImgDet&w=182&h=273&c=7",
  //     "name": "Michael Johnson",
  //     "email": "michael.johnson@example.com",
  //     "role": "User",
  //     "plan": "Standard",
  //     "billing": "Manual Cash",
  //     "status": "Active"
  //   },
  //   {
  //     "photo": "https://thumbs.dreamstime.com/b/business-man-red-tie-34276333.jpg",
  //     "name": "Emily Williams",
  //     "email": "emily.williams@example.com",
  //     "role": "Admin",
  //     "plan": "Premium",
  //     "billing": "Auto Debit",
  //     "status": "Active"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.eZOY08yB76asGZ1MLKO5LQHaH0?pid=ImgDet&w=182&h=192&c=7",
  //     "name": "David Brown",
  //     "email": "david.brown@example.com",
  //     "role": "User",
  //     "plan": "Basic",
  //     "billing": "Manual Cash",
  //     "status": "Inactive"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.gn-D_YctTqb0erPwYqMRPgHaLH?pid=ImgDet&w=182&h=120&c=7",
  //     "name": "Olivia Davis",
  //     "email": "olivia.davis@example.com",
  //     "role": "Admin",
  //     "plan": "Expertise",
  //     "billing": "Auto Debit",
  //     "status": "Active"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.tkDlSghlgDwp8c5XynViagHaLH?pid=ImgDet&w=182&h=273&c=7",
  //     "name": "Ethan Wilson",
  //     "email": "ethan.wilson@example.com",
  //     "role": "User",
  //     "plan": "Team",
  //     "billing": "Manual Cash",
  //     "status": "Active"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.JHhbbpdyiYx1FRRFzozazwHaLu?pid=ImgDet&w=182&h=288&c=7",
  //     "name": "Ava Martin",
  //     "email": "ava.martin@example.com",
  //     "role": "Admin",
  //     "plan": "Premium",
  //     "billing": "Auto Debit",
  //     "status": "Inactive"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.sVG79PmzBNXFxkMbqx6SZgHaLr?pid=ImgDet&w=182&h=287&c=7",
  //     "name": "Liam Taylor",
  //     "email": "liam.taylor@example.com",
  //     "role": "User",
  //     "plan": "Expertise",
  //     "billing": "Manual Cash",
  //     "status": "Active"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.EG5e9STnGJjvtvbAnlOZ2gHaJM?pid=ImgDet&w=182&h=226&c=7",
  //     "name": "Sophia Anderson",
  //     "email": "sophia.anderson@example.com",
  //     "role": "User",
  //     "plan": "Team",
  //     "billing": "Auto Debit",
  //     "status": "Active"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.EzTK3SY2CtVZQBW8B6nCdgHaHa?pid=ImgDet&w=182&h=182&c=7",
  //     "name": "William Johnson",
  //     "email": "william.johnson@example.com",
  //     "role": "Admin",
  //     "plan": "Premium",
  //     "billing": "Credit Card",
  //     "status": "Active"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.A-u8ME7vKefg3i9T4G2oegHaJw?pid=ImgDet&w=182&h=238&c=7",
  //     "name": "Olivia Wilson",
  //     "email": "olivia.wilson@example.com",
  //     "role": "User",
  //     "plan": "Basic",
  //     "billing": "PayPal",
  //     "status": "Inactive"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.M8ncFfUfRE7fEdF7Kh_ukAHaHa?pid=ImgDet&w=182&h=182&c=7",
  //     "name": "James Smith",
  //     "email": "james.smith@example.com",
  //     "role": "User",
  //     "plan": "Standard",
  //     "billing": "Manual Cash",
  //     "status": "Active"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.RaTYLHxMgTmHqFOAG93LGwHaLH?pid=ImgDet&w=182&h=273&c=7",
  //     "name": "Sophia Martinez",
  //     "email": "sophia.martinez@example.com",
  //     "role": "Admin",
  //     "plan": "Premium",
  //     "billing": "Auto Debit",
  //     "status": "Active"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.9A6xVjt0UIhQOCAw4E62cgHaHf?pid=ImgDet&w=182&h=182&c=7",
  //     "name": "Benjamin Davis",
  //     "email": "benjamin.davis@example.com",
  //     "role": "User",
  //     "plan": "Basic",
  //     "billing": "Manual Cash",
  //     "status": "Inactive"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.VJJilq-Ip7pOdo3Hg2sFhAHaHJ?pid=ImgDet&w=182&h=182&c=7",
  //     "name": "Emily Brown",
  //     "email": "emily.brown@example.com",
  //     "role": "Admin",
  //     "plan": "Expertise",
  //     "billing": "Auto Debit",
  //     "status": "Active"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.VoyD9GJr4f14vZt9HHYY3QHaJ3?pid=ImgDet&w=182&h=243&c=7",
  //     "name": "Michael Davis",
  //     "email": "michael.davis@example.com",
  //     "role": "User",
  //     "plan": "Team",
  //     "billing": "Manual Cash",
  //     "status": "Active"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.6dPfQwr9tj6sKTR2YSq0eAHaHa?pid=ImgDet&w=182&h=182&c=7",
  //     "name": "Isabella Wilson",
  //     "email": "isabella.wilson@example.com",
  //     "role": "Admin",
  //     "plan": "Premium",
  //     "billing": "Auto Debit",
  //     "status": "Inactive"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.2pM8q3o2F9ISvhXCspJbDwHaJW?pid=ImgDet&w=182&h=234&c=7",
  //     "name": "Mia Johnson",
  //     "email": "mia.johnson@example.com",
  //     "role": "User",
  //     "plan": "Expertise",
  //     "billing": "Manual Cash",
  //     "status": "Active"
  //   },
  //   {
  //     "photo": "https://th.bing.com/th/id/OIP.BM1O07bY0Ev_EvFpzFsGhwHaJP?pid=ImgDet&w=182&h=229&c=7",
  //     "name": "Jackson Davis",
  //     "email": "jackson.davis@example.com",
  //     "role": "User",
  //     "plan": "Team",
  //     "billing": "Auto Debit",
  //     "status": "Active"
  //   }


  // ];
 return (
    <>
      <div>
        <h1 className='text-2xl mt-12'>Our all users</h1>
      </div>
      <UsersCard></UsersCard>
      <UserTable usersTableData={usersData} setUsersTableData={setUsersData} />
    </>
  );
};

export default Users;