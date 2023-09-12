
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const UserSecureRoute = ({ children }) => {
  const { user, loading, isAdmin } = useContext(AuthContext);
  const location = useLocation();
  console.log("outside", loading);
  console.log("from secure", user);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    console.log("inside", loading);
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default UserSecureRoute;
