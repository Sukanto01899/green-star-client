import { useAuthState } from "react-firebase-hooks/auth";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../hooks/useAdmin";

const AdminAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const navigate = useNavigate();

    if(!user && admin){
        return navigate('/admin-login')
    }

    if(loading || adminLoading){
        return <div className="flex h-screen justify-center items-center">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
        </div>
    }

    if(!admin || !user){
        return navigate('/admin-login')
    }


    return children;
};

export default AdminAuth;