import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingComponent from "../Pages/Shared/LoadingComponent/LoadingComponent";

const AdminSecureRoute = ({ children }) => {
  const { user, loading, isAdmin } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <LoadingComponent />;
  }

  if (user && isAdmin) {
    return children;
  }
  return (
    <Navigate to="/admin-login" state={{ from: location }} replace></Navigate>
  );
};

export default AdminSecureRoute;
