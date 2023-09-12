
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import bankLoading from "/public/jsonAmination/bankLoading.json";
import Lottie from "lottie-react";

const UserSecureRoute = ({ children }) => {
  const { user, loading, isAdmin } = useContext(AuthContext);
  const location = useLocation();
  console.log("outside", loading);
  console.log("from secure", user);
  if (loading) {
    return (
      <div className="h-screen w-full">
        <Lottie className="w-60 h-screen mx-auto my-auto" animationData={bankLoading} />
      </div>
    );
  }

  if (user) {
    console.log("inside", loading);
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default UserSecureRoute;
