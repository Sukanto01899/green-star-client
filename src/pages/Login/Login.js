import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axiosApi from '../../api/axiosApi';
import { AtRateIcon, EyeIcon } from '../../assets/icons/icons';
import PopupBG from '../../components/Popup/PopupBG';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import GoogleLogin from './GoogleLogin';

const Login = () => {
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const [apiLoading, setApiLoading] = useState(false)
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/'
  const [token] = useToken(user, 'user');
  
  const onLogin = data => {
    setApiLoading(true)
    const {email, password} = data;
    axiosApi(`/user-verify/${email}`)
    .then(res => {
     if(res.data.user){
      signInWithEmailAndPassword(email, password)
      setApiLoading(false)
     }
    })
    .catch(err => {
      setApiLoading(false)
      toast.error(err.message)
    })
  }

  useEffect(()=>{
    if(token){
      navigate(from, {replace: true})
    }
  }, [token, from, navigate])
  
  if(error){
    toast.error(error.message)
  }
  
    return (
      <section className='bg-light-main'>

        {loading || apiLoading ? <PopupBG>
      <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
    </PopupBG> : null}

<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-universal sm:text-3xl">
      Login Now
    </h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
      dolores deleniti inventore quaerat mollitia?
    </p>

    <form
      onSubmit={handleSubmit(onLogin)}
      className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white"
    >
      <p className="text-center text-lg font-medium">Sign in to your account</p>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            {...register("email", {required: {value: true, message: "Email is required"}, pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" }})}
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter email"
          />

          <span
            className="absolute inset-y-0 right-0 grid place-content-center px-4"
          >
            <AtRateIcon/>
          </span>
        </div>
        {errors.email && <span className='text-[10px] pl-3 text-red-500'>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            {...register("password", {required: {value: true, message: "Password is required"}})}
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter password"
          />

          <span
            className="absolute inset-y-0 right-0 grid place-content-center px-4"
          >
            <EyeIcon/>
          </span>
        </div>
        {errors.password && <span className='text-[10px] pl-3 text-red-500'>{errors.password.message}</span>}
      </div>

      <input type="submit" className='block w-full rounded-lg bg-universal px-5 py-3 text-sm font-medium text-white cursor-pointer' value='Login'/>
      
      <p className="text-center text-sm text-gray-500">
        No account?
        <Link className="underline" to="/registration">Sign up</Link>
      </p>
      <GoogleLogin/>
    </form>
  </div>
</div>
</section>
    );
};

export default Login;