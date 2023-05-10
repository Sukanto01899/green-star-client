import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../hooks/useAdmin";

const AdminAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const navigate = useNavigate();
    console.log(loading, adminLoading, admin)
    
    if(loading || adminLoading){
        return <h1>Loading</h1>
    }

    if(!admin || !user){
        return navigate('/admin-login')
    }

    return children;
};

export default AdminAuth;