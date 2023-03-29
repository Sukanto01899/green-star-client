import { useEffect, useState } from 'react';
import axiosApi from '../api/axiosApi';

const useToken = (user, role) => {
    const [token, setToken] = useState("");

    useEffect(()=>{
        const email= user?.user?.email;
        const name = user?.user?.displayName;
        const img = user?.user?.photoURL;
        const uid = user?.user?.uid;
        if(email){
            axiosApi.put(`/user/${email}`, {email, name, img, uid, role})
            .then(res => {
                setToken(res.data)
                localStorage.setItem('access-token', res.data)
            })
        }
    }, [user, role])
    return [token];
};

export default useToken;