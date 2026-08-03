import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

    const loggedIn =
        sessionStorage.getItem("admin_logged_in");

    if (!loggedIn) {
        return <Navigate to="/admin-login" replace />;
    }

    return children;
}