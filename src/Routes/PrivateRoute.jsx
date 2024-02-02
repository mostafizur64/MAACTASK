import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Providers/AuthContext";

const PrivateRoute = ({ children }) => {
  const { authState, logout} = useAuth();
  const { user, token } = authState;

  const [loading,setLoading ]= useState(false)
  const location = useLocation();
  if (loading) {
    return <process className="progress w-56"></process>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
