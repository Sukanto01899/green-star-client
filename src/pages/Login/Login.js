import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AtRateIcon, EyeIcon } from '../../assets/icons/icons';
import GoogleLogin from './GoogleLogin';

const Login = () => {
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const onLogin = data => {
    console.log(data)
  };
  
    return (
      <section className='bg-light-main'>
<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
  <div class="mx-auto max-w-lg">
    <h1 class="text-center text-2xl font-bold text-universal sm:text-3xl">
      Login Now
    </h1>

    <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
      dolores deleniti inventore quaerat mollitia?
    </p>

    <form
      onSubmit={handleSubmit(onLogin)}
      class="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white"
    >
      <p class="text-center text-lg font-medium">Sign in to your account</p>

      <div>
        <label for="email" class="sr-only">Email</label>

        <div class="relative">
          <input
            {...register("email", {required: {value: true, message: "Email is required"}, pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" }})}
            type="email"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter email"
          />

          <span
            class="absolute inset-y-0 right-0 grid place-content-center px-4"
          >
            <AtRateIcon/>
          </span>
        </div>
        {errors.email && <span className='text-[10px] pl-3 text-red-500'>{errors.email.message}</span>}
      </div>

      <div>
        <label for="password" class="sr-only">Password</label>

        <div class="relative">
          <input
            {...register("password", {required: {value: true, message: "Password is required"}})}
            type="password"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter password"
          />

          <span
            class="absolute inset-y-0 right-0 grid place-content-center px-4"
          >
            <EyeIcon/>
          </span>
        </div>
        {errors.password && <span className='text-[10px] pl-3 text-red-500'>{errors.password.message}</span>}
      </div>

      <input type="submit" className='block w-full rounded-lg bg-universal px-5 py-3 text-sm font-medium text-white' value='Login'/>
      
      <p class="text-center text-sm text-gray-500">
        No account?
        <Link class="underline" to="/registration">Sign up</Link>
      </p>
      <GoogleLogin/>
    </form>
  </div>
</div>
</section>
    );
};

export default Login;