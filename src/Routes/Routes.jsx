import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/About/About";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import OpenAccount from "../Pages/UserDashboard/OpenAccount/OpenAccount";
import MyProfile from "../Pages/UserDashboard/MyProfile/MyProfile";
import ApplyLoan from "../Pages/UserDashboard/ApplyLoan/ApplyLoan";
import Contact from "../Pages/Contact/Contact";
import TransactionHistory from "../Pages/UserDashboard/TransactionHistory/TransactionHistory";
import AddMoney from "../Pages/UserDashboard/AddMoney/AddMoney";
import Dashboard from '../Layouts/Dashboard'
import AdminDashboard from '../Pages/AdminDashboard/Dashboard/AdminDashboard'
import Employees from "../Pages/AdminDashboard/Employees/Employees";
import Users from "../Pages/AdminDashboard/Users/Users";
import Analytics from "../Pages/AdminDashboard/Analytics/Analytics";
import SavingAccountForm from "../Pages/UserDashboard/OpenAccount/Accounts/SavingAccount/SavingAccountForm";
import AboutDetails from "../Pages/Home/About/AboutDetails";
import BlogPage from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import EditProfile from "../Pages/UserDashboard/EditProfile/EditProfile";
import TransferMoney from "../Pages/UserDashboard/TransferMoney/TransferMoney";
import LoanRequest from "../Pages/AdminDashboard/LoanRequest/LoanRequest";
import Feedback from "../Pages/AdminDashboard/LoanRequest/Feedback";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutDetails",
        element: <AboutDetails></AboutDetails>,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blogs",
        element: <BlogPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // ..........User dashboard routes............
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
      {
        path: "open-account",
        element: <OpenAccount />
      },
      {
        path: "apply-loan",
        element: <ApplyLoan />,
      },
      {
        path: "add-money",
        element: <AddMoney />,
      },
      {
        path: "transfer-money",
        element: <TransferMoney />,
      },
      {
        path: 'saving-account',
        element: <SavingAccountForm />
      },

      // {
      //   path: "checkout",
      //   element: <StripePayment />,
      // },
      {
        path: "transaction-history",
        element: <TransactionHistory />,
      },


      // ..................admin dashboard routes........................
      {
        path: "adminDashboard",
        element: <AdminDashboard />
      },
      {
        path: "employees",
        element: <Employees />
      },
      {
        path: "users",
        element: <Users />
      },
      {
        path: "analytics",
        element: <Analytics />
      },
      {
        path: "loan-request",
        element: <LoanRequest />,
        loader:() => fetch('http://localhost:5000/loans')
      },
      {
        path: "feedback",
        element: <Feedback/>
      }
    ],
  },
]);

export default router;