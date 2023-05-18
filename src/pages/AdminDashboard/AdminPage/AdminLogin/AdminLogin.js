import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import axiosApi from '../../../../api/axiosApi';
import { AtRateIcon, EyeIcon } from '../../../../assets/icons/icons';
import PopupBG from '../../../../components/Popup/PopupBG';
import auth from '../../../../firebase.init';
import useToken from '../../../../hooks/useToken';

const AdminLogin = () => {
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const [apiLoading, setApiLoading] = useState(false)
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user, 'admin');
  const navigate = useNavigate()

  const handleAdminLogin = (data)=>{
    const {email, password} = data;
    setApiLoading(true)
    axiosApi(`/admin-login/${email}`)
    .then(res => {
      if(res.data.admin){
        signInWithEmailAndPassword(email, password);
        setApiLoading(false)
      }
    })
    .catch(err => {
      toast.error(err.message)
      setApiLoading(false)
    })
  }

  if(error){
    toast.error(error.message)
  }


  if(token){
    toast.success('Hi admin')
    navigate('/admin')
  }
  
    return (
        <div>

          {apiLoading || loading ? <PopupBG>
            <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
          </PopupBG> : null}

<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg">
    <h1 class="text-center text-2xl font-bold text-universal sm:text-3xl">
      Admin Login
    </h1>

    <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
      dolores deleniti inventore quaerat mollitia?
    </p>

    <form
      onSubmit={handleSubmit(handleAdminLogin)}
      class="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      <p class="text-center text-lg font-medium">Sign in to your account</p>

      <div>
        <label for="email" class="sr-only">Email</label>

        <div class="relative">
          <input
            type="email"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter email"
            {...register('email', {required: true})}
          />

          <span
            class="absolute inset-y-0 right-0 grid place-content-center px-4"
          >
            <AtRateIcon/>
          </span>
        </div>
      </div>

      <div>
        <label for="password" class="sr-only">Password</label>

        <div class="relative">
          <input
            type="password"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter password"
            {...register('password', {required: true})}
          />

          <span
            class="absolute inset-y-0 right-0 grid place-content-center px-4"
          >
            <EyeIcon/>
          </span>
        </div>
      </div>

      <button
        type="submit"
        class="block w-full rounded-lg bg-universal px-5 py-3 text-sm font-medium text-white"
      >
        Sign in
      </button>

    </form>
  </div>
</div>

        </div>
    );
};

export default AdminLogin;