import React, { Children } from "react";
import { Navigate } from "react-router-dom";

const AutRoute = ({Children}) => {
    const token = localStorage.getItem('token');
    return token ? Children: <Navigate to="/login" />
}

export default AutRoute;