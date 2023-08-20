import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import AboutDetails from "../Pages/Home/About/AboutDetails";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layouts/Dashboard";
import OpenAccount from "../Pages/UserDashboard/OpenAccount/OpenAccount";
import MyProfile from "../Pages/UserDashboard/MyProfile/MyProfile";
import ApplyLoan from "../Pages/UserDashboard/ApplyLoan/ApplyLoan";
import Contact from "../Pages/Contact/Contact";
import AddMoney from "../Pages/UserDashboard/AddMoney/AddMoney";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
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
    ],
  },
]);

export default router;
