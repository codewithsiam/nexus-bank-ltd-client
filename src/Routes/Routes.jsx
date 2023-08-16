import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import AboutDetails from "../Pages/Home/About/AboutDetails";
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
          path: "/aboutDetails",
          element: <AboutDetails></AboutDetails>
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