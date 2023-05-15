import { useEffect, useState } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import axiosApi from '../api/axiosApi';
import auth from '../firebase.init';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(true);
    const [adminLoading, setAdminLoading] = useState(true);
    const [signOut] = useSignOut(auth)

    useEffect(()=>{
        const email = user?.email;
        if(email){
            axiosApi(`/admin-login/${email}`)
            .then(res => {
                if(res.data.admin){
                    setAdmin(res.data.admin)
                    setAdminLoading(false)
                }
            })
            .catch(err => {
                setAdminLoading(false)
                signOut()
            })
        }
        
    }, [user,admin, signOut])
    return [admin, adminLoading]
};

export default useAdmin;