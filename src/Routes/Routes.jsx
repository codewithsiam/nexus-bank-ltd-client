import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layouts/Dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'registration',
        element: <Registration />
      },
      {
        path: 'login',
        element: <Login />
      }
    ],
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  }
]);

export default router;