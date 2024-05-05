import { Navigate, Outlet } from 'react-router-dom';
import jwtDecode from 'jwt-decode';



const DeliveryAgentPrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Get token from local storage

    if (!token) {
        return <Navigate to="/delivery-agent/login" replace />; // Redirect to login
    }
    const decodedToken = jwtDecode(token);
    if (decodedToken.role !== 'deliveryAgent') {
        // Redirect user to unauthorized page or handle as you see fit
        return <Navigate to="/unauthorized" replace />;
    }


    return children; // Render the wrapped component if token exists
};

export default DeliveryAgentPrivateRoute