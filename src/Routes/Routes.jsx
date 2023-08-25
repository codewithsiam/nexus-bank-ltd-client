import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import AboutDetails from "../Pages/Home/About/AboutDetails";
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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BlogPage from "../Pages/Blog/Blog";


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
    element: <Dashboard/>,
    children: [
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "open-account",
        element: <OpenAccount />,
      },
      {
        path: "add-money",
        element: <AddMoney />,
      },
      // {
      //   path: "checkout",
      //   element: <StripePayment />,
      // },
      {
        path: "apply-loan",
        element: <ApplyLoan />,
      },
      {
        path: "transaction-history",
        element: <TransactionHistory />,
      },
      // admin dashboard routes 
      {
        path:"adminDashboard",
        element:<AdminDashboard/>
      },
      {
        path:"employees",
        element:<Employees/>
      },
      {
        path:"users",
        element:<Users/>
      }
    ],
  },
]);

export default router;
