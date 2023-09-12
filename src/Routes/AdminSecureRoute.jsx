import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import bankLoading from "/public/jsonAmination/bankLoading.json";
import Lottie from "lottie-react";

const AdminSecureRoute = ({ children }) => {
  const { user, loading, isAdmin } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="h-screen w-full">
        <Lottie className="w-72 h-screen mx-auto my-auto" animationData={bankLoading} />
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return (
    <Navigate to="/admin-login" state={{ from: location }} replace></Navigate>
  );
};

export default AdminSecureRoute;
