import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import LoadingComponent from "../Pages/Shared/LoadingComponent/LoadingComponent";

const UserSecureRoute = ({ children }) => {
  const { user, loading, isAdmin } = useContext(AuthContext);
  const location = useLocation();
  // console.log("outside", loading);
  // console.log("from secure", user);
  if (loading) {
    return <LoadingComponent />;
  }

  if (user && !isAdmin) {
    // console.log("inside", loading);
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default UserSecureRoute;
