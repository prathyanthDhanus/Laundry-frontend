import { Navigate, Outlet } from 'react-router-dom';
import jwtDecode from 'jwt-decode';



const AdminPrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Get token from local storage

    if (!token) {
        return <Navigate to="/admin/login" replace />; // Redirect to login
    }
    const decodedToken = jwtDecode(token);
    if (decodedToken.role !== 'admin') {
        // Redirect user to unauthorized page or handle as you see fit
        return <Navigate to="/unauthorized" replace />;
    }


    return children; // Render the wrapped component if token exists
};

export default AdminPrivateRoute