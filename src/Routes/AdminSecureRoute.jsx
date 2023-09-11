import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminSecureRoute = ({ children }) => {
  const { user, loading, isAdmin } = useContext(AuthContext);
  const location = useLocation();
  console.log(user, loading, "is admin", isAdmin);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isAdmin) {
    return children;
  }
  return (
    <Navigate to="/admin-login" state={{ from: location }} replace></Navigate>
  );
};

export default AdminSecureRoute;
