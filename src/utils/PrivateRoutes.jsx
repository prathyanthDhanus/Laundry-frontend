import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Get token from local storage

    if (!token) {
        return <Navigate to="/login" replace />; // Redirect to login
    }

    return children; // Render the wrapped component if token exists
};

export default PrivateRoute