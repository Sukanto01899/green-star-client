import { useEffect, useState } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosApi from '../api/axiosApi';
import auth from '../firebase.init';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const [signOut] = useSignOut(auth);
    const navigate = useNavigate()

    useEffect(()=>{
        const email = user?.email;
        if(email){
            axiosApi(`/admin-login/${email}`)
            .then(res => {
                if(res.data.admin){
                    setAdmin(true)
                    setAdminLoading(false)
                }
            })
            .catch(err => {
                
            })
        }
        
    }, [user])
    return [admin, adminLoading]
};

export default useAdmin;