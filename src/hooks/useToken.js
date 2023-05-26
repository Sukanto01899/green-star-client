import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = (user, role) => {
    const [token, setToken] = useState("");
    useEffect(()=>{
        const email= user?.user?.email;
        const name = user?.user?.displayName;
        const img = user?.user?.photoURL;
        const uid = user?.user?.uid;
        if(email){
            axios.put(`https://green-star.onrender.com/user/${email}`, {email, name, img, uid, role})
            .then(res => {
                console.log(res)
                setToken(res.data)
                localStorage.setItem('access-token', res.data)
            })
        }
    }, [user, role])
    return [token];
};

export default useToken;