import React from 'react';
import UsersCard from './UsersCard';
import UserTable from './UserTable';

const Users = () => {
    const rows = [
        {
          _id: 1,
          userImage: 'https://th.bing.com/th/id/OIP.CAG8UP-PYB4YiePysDXt0AHaLH?pid=ImgDet&w=182&h=273&c=7',
          userName: 'John Doe',
          userEmail: 'john.doe@example.com',
          role: 'Admin',
          plan: 'Premium',
          billing: 'Credit Card',
          status: 'Active'
        },
        {
          _id: 2,
          userImage: 'https://th.bing.com/th/id/OIP.mHvG9ISpFLq8HxgoQvtkGAHaKD?pid=ImgDet&w=182&h=247&c=7',
          userName: 'Jane Smith',
          userEmail: 'jane.smith@example.com',
          role: 'User',
          plan: 'Basic',
          billing: 'PayPal',
          status: 'Inactive'
        },
        {
          _id: 3,
          userImage: 'https://th.bing.com/th/id/OIP.4pUEDfEEq_xMCzmuYt7qEgHaLH?pid=ImgDet&w=182&h=273&c=7',
          userName: 'Michael Johnson',
          userEmail: 'michael.johnson@example.com',
          role: 'User',
          plan: 'Standard',
          billing: 'Manual Cash',
          status: 'Active'
        },
        {
          _id: 4,
          userImage: 'https://thumbs.dreamstime.com/b/business-man-red-tie-34276333.jpg',
          userName: 'Emily Williams',
          userEmail: 'emily.williams@example.com',
          role: 'Admin',
          plan: 'Premium',
          billing: 'Auto Debit',
          status: 'Active'
        },
        {
          _id: 5,
          userImage: 'https://th.bing.com/th/id/OIP.eZOY08yB76asGZ1MLKO5LQHaH0?pid=ImgDet&w=182&h=192&c=7',
          userName: 'David Brown',
          userEmail: 'david.brown@example.com',
          role: 'User',
          plan: 'Basic',
          billing: 'Manual Cash',
          status: 'Inactive'
        },
        {
          _id: 6,
          userImage: 'https://th.bing.com/th/id/OIP.gn-D_YctTqb0erPwYqMRPgHaE7?pid=ImgDet&w=182&h=120&c=7',
          userName: 'Olivia Davis',
          userEmail: 'olivia.davis@example.com',
          role: 'Admin',
          plan: 'Expertise',
          billing: 'Auto Debit',
          status: 'Active'
        },
        {
          _id: 7,
          userImage: 'https://th.bing.com/th/id/OIP.tkDlSghlgDwp8c5XynViagHaLH?pid=ImgDet&w=182&h=273&c=7',
          userName: 'Ethan Wilson',
          userEmail: 'ethan.wilson@example.com',
          role: 'User',
          plan: 'Team',
          billing: 'Manual Cash',
          status: 'Active'
        },
        {
          _id: 8,
          userImage: 'https://th.bing.com/th/id/OIP.JHhbbpdyiYx1FRRFzozazwHaLu?pid=ImgDet&w=182&h=288&c=7',
          userName: 'Ava Martin',
          userEmail: 'ava.martin@example.com',
          role: 'Admin',
          plan: 'Premium',
          billing: 'Auto Debit',
          status: 'Inactive'
        },
        {
          _id: 9,
          userImage: 'https://th.bing.com/th/id/OIP.sVG79PmzBNXFxkMbqx6SZgHaLr?pid=ImgDet&w=182&h=287&c=7',
          userName: 'Liam Taylor',
          userEmail: 'liam.taylor@example.com',
          role: 'User',
          plan: 'Expertise',
          billing: 'Manual Cash',
          status: 'Active'
        },
        {
          _id: 10,
          userImage: 'https://th.bing.com/th/id/OIP.EG5e9STnGJjvtvbAnlOZ2gHaJM?pid=ImgDet&w=182&h=226&c=7',
          userName: 'Sophia Anderson',
          userEmail: 'sophia.anderson@example.com',
          role: 'User',
          plan: 'Team',
          billing: 'Auto Debit',
          status: 'Active'
        }
      ];
    return (
        <>
            <div>
                <h1 className='text-2xl mt-12'>Our all users</h1>
            </div>
            <UsersCard></UsersCard>
            <UserTable usersTableData={rows}></UserTable>
        </>
    );
};

export default Users;