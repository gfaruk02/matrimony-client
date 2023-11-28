import { Navigate, useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLoaderData();
    if(user && isAdmin){
return children;
    }
    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;