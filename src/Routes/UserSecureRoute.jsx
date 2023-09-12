import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const UserSecureRoute = ({ children }) => {
  const { user, loading, isAdmin } = useContext(AuthContext);
  const location = useLocation();
  
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user & !isAdmin) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace></Navigate>
  );
};

export default UserSecureRoute;
