import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = useToken(user, 'user');
  const navigate = useNavigate();
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
  if(token){
    navigate(from, {replace: true})
  }

    return (
        <>
            <button
        onClick={()=> signInWithGoogle()}
        className="w-full rounded-lg bg-white border-2 border-universal py-3 font-medium text-universal flex justify-center items-center space-x-4"
      >
        <FaGoogle />
        <span className="text-sm">With Google</span>
      </button>
        </>
    );
};

export default GoogleLogin;