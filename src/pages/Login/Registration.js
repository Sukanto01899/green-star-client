import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AtRateIcon, EyeIcon } from '../../assets/icons/icons';
import GoogleLogin from './GoogleLogin';

const Registration = () => {
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const onRegistration = data => {
    const {name, email, password, confirmPass} = data;
    if(password !== confirmPass){
      toast.error("Password not match");
      return;
    }
  };

    return (
        
<div>
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-universal sm:text-3xl">
      Registration Now
    </h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
      dolores deleniti inventore quaerat mollitia?
    </p>

    <form
      onSubmit={handleSubmit(onRegistration)}
      className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      <p className="text-center text-lg font-medium">Sign up for an account</p>

      <div>
        <label for="email" className="sr-only">Name</label>

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
        <label for="email" className="sr-only">Email</label>

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
        <label for="password" className="sr-only">Password</label>

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
        <label for="password" className="sr-only">Confirm Password</label>

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
      
      <GoogleLogin/>

    </form>
  </div>
</div>

</div>

    );
};

export default Registration;