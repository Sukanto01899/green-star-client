import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleLogin = () => {
    return (
        <>
            <button
        type="submit"
        className="w-full rounded-lg bg-white border-2 border-universal py-3 font-medium text-universal flex justify-center items-center space-x-4"
      >
        <FaGoogle />
        <span className="text-sm">With Google</span>
      </button>
        </>
    );
};

export default GoogleLogin;