import React from 'react';
import { useAuthState, useSendEmailVerification, useUpdateEmail, useUpdatePassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import auth from '../../../firebase.init';

const Security = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [updateProfile, profileUpdating, profileError] = useUpdateProfile(auth);
    const [updateEmail, emailUpdating, emailError] = useUpdateEmail(auth);
    const [updatePassword, passwordUpdating, passwordError] = useUpdatePassword(auth);
    const [sendEmailVerification, emailSending, error] = useSendEmailVerification(auth);

    const imageStorageApi = process.env.REACT_APP_imageStorageApi;

    const handleNameUpdate = async (e)=>{
        e.preventDefault();
        const loadingToast = toast.loading('Updating...')
       const firstName = e.target[0].value;
       const lastName = e.target[1].value;
       const success = await updateProfile({displayName: firstName + ' ' + lastName})
       if(success){
        toast.success('Name successfully updated', {id: loadingToast})
       }else{
        toast.error('Something wrong', {id: loadingToast})
       }
       e.target[0].value = ''
       e.target[1].value = ''
    }

    const handleEmailUpdate =async (e)=>{
        e.preventDefault();
        const loadingToast = toast.loading('Updating...')
        const email = e.target[0].value;
        if(email === user.email){
            return toast.error('Already email have!', {id: loadingToast})
        }
        const success = await updateEmail(email);
        if(success){
            toast.success('Email successfully updated', {id: loadingToast})
        }else{
            toast.error('Something wrong', {id: loadingToast})
        }
        e.target[0].value = ''
    }

    const handlePasswordUpdate =async (e)=>{
        e.preventDefault();
        const loadingToast = toast.loading('Updating...')
        const password = e.target[0].value;
        const success = await updatePassword(password);
        if(success){
            toast.success('Password successfully updated', {id: loadingToast})
        }else{
            toast.error('Something wrong', {id: loadingToast})
        }
        e.target[0].value = ''
    }

    const handleImageUpdate = (e)=>{
        e.preventDefault();
        const loadingToast = toast.loading('Updating...')
        const url = `https://www.filestackapi.com/api/store/S3?key=${imageStorageApi}`;
        const file = e.target[0].files[0];
        fetch(url, {method: 'POST', body: file})
        .then(res => res.json())
        .then(data => {
            if(data.url){
                updatePhoto(data.url)
                toast.dismiss(loadingToast)
            }
        })
        .catch(err => toast.error('Upload error', {id: loadingToast}))
    }

    const updatePhoto =async (url)=>{
        const success = await updateProfile({photoURL: url});
        if(success){
            toast.success('Image successfully updated')
        }else{
            toast.error('Update error')
        }
    }

    
    return (
<section>
  <h1 className='text-xl mb-4'>My Account</h1>

  <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
    <div className="bg-gray-50 py-12 md:py-24">
      <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <img alt='safds' src={user?.photoURL} className="h-10 w-10 object-contain rounded-full ring-1 ring-universal "></img>

          <h2 className="font-medium text-gray-900">{user?.displayName}</h2>
        </div>

        <div>
          <p className="text-xl font-medium tracking-tight text-gray-900">
            {user?.emailVerified ? <span className='text-md text-universal uppercase'>Verified</span> : <div className='flex items-center space-x-2'>
            <span className='text-md text-red-400 uppercase'>Unverified</span>
            <button onClick={sendEmailVerification} className='text-sm bg-red-400 p-1 text-white rounded-md'>{emailSending ? 'Sending...' : 'Resend Email'}</button>
            </div>}
          </p>

          <p className="mt-1 text-sm text-gray-600">{user?.email}</p>
        </div>
      </div>
    </div>

    {/* Form */}
    <div className="bg-white py-10 md:py-16">
      <div className="mx-auto max-w-lg px-4 lg:px-8">
        <div className="grid grid-cols-5 gap-4">

            {/* Name update form */}
        <form onSubmit={handleNameUpdate}  className='col-span-6 space-y-2'>
        <div className="">
            <label
              for="FirstName"
              className="block text-xs font-medium text-gray-700"
            >
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              name='FirstName'
            />
          </div>
          <div className="">
            <label
              for="LastName"
              className="block text-xs font-medium text-gray-700"
            >
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              {...register('lastName', {required: true})}
            />
          </div>
          <button
              className="block w-full rounded-md bg-universal p-2.5 text-sm text-white transition hover:shadow-lg"
            >
              Update Profile Name
            </button>

        </form>
          

         {/* Email update form */}
    <form onSubmit={handleEmailUpdate} className="col-span-6 space-y-2">
        <div >
            <label for="Email" className="block text-xs font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              id="Email"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              name='Email'
            />
          </div>
          <button
              className="block w-full rounded-md bg-universal p-2.5 text-sm text-white transition hover:shadow-lg"
            >
              Update Email
            </button>
    </form>

    {/* Password update */}
    <form onSubmit={handlePasswordUpdate} className="col-span-6 space-y-2">
         <div>
            <label for="Phone" className="block text-xs font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              id="Phone"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              name='password'
            />
          </div>
          <button
              className="block w-full rounded-md bg-universal p-2.5 text-sm text-white transition hover:shadow-lg"
            >
              Update Password
            </button>
    </form>

    <form onSubmit={handleImageUpdate} className="col-span-6 space-y-2">
       <div>
            <label for="image" className="block text-xs font-medium text-gray-700">
              Profile Picture
            </label>

            <input
              type="file"
              id="image"
              className="mt-1 w-full rounded-md border-2 p-1 border-gray-200 shadow-sm sm:text-sm"
              name='Image'
              required
            />
          </div>
          <button
              className="block w-full rounded-md bg-universal p-2.5 text-sm text-white transition hover:shadow-lg"
            >
               Update Picture
            </button>
    </form>

          
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Security;