import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import Loader from "./Loader";

const UserAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <Loader/>
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace/>
    }

    return children
};

export default UserAuth;