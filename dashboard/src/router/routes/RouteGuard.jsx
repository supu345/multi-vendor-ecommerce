import React from "react";
import { Navigate } from "react-router-dom";

const RouteGuard = ({ element, role = [], userRole = "" }) => {
  return role.includes(userRole) ? element : <Navigate to="/unauthorized" />;
};

export default RouteGuard;
