import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AtRateIcon, EyeIcon } from '../../assets/icons/icons';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import GoogleLogin from './GoogleLogin';
import Loader from './Loader';


const Registration = () => {
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [token] = useToken(user, 'user')
  
  const onRegistration =async  (data) => {
    const {name, email, password, confirmPass} = data;
    if(password !== confirmPass){
      toast.error("Password not match");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({displayName: name});
  }

  if(token){
    navigate('/')
  }

  if(error){
    toast.error(error.message)
  }
  
  
    return (
        
<div className='bg-light-main'>
  {loading || updating ? <Loader/> : null}
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-universal sm:text-3xl">
      Registration Now
    </h1>

    <div className='mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white'>
    <form
      onSubmit={handleSubmit(onRegistration)}
      className=" space-y-4"
    >
      <p className="text-center text-lg font-medium">Sign up for an account</p>

      <div>
        <label htmlFor="email" className="sr-only">Name</label>

        <div className="relative">
          <input
            {...register("name", {required: {value: true, message: "Name is required"}})}
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter name"
          />

          <span
            className="absolute inset-y-0 right-0 grid place-content-center px-4"
          >
            <FaUser className='h-4 w-4 text-gray-400'/>
          </span>
        </div>
        {errors.name && <span className='text-[10px] pl-3 text-red-500'>{errors.name.message}</span>}
      </div>

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

      <div>
        <label htmlFor="password" className="sr-only">Confirm Password</label>

        <div className="relative">
          <input
            {...register("confirmPass", {required: {value: true, message: "Confirm password is required"}})}
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter confirm password"
          />

          <span
            className="absolute inset-y-0 right-0 grid place-content-center px-4"
          >
            <EyeIcon/>
          </span>
        </div>
        {errors.confirmPass && <span className='text-[10px] pl-3 text-red-500'>{errors.confirmPass.message}</span>}
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-universal px-5 py-3 text-sm font-medium text-white"
      >
        Registration
      </button>

      <p className="text-center text-sm text-gray-500">
        No account?
        <Link className="underline" to="/login">Log in</Link>
      </p>

    </form>

    <GoogleLogin/>
    </div>
    
  </div>
</div>

</div>

    );
};

export default Registration;