import React, { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { HiChevronDown, HiDocumentText, HiPlusCircle, HiShoppingBag, HiShoppingCart, HiUsers, HiViewGrid, HiX } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';
import { AccountIcon, HumbugerMenu, Invoice, LogoutIcon, NotificationsIcon, SecurityIcon } from '../../assets/icons/icons';
import auth from '../../firebase.init';

const AdminDashboard = () => {
    const [show, setShow] = useState(false);
    const [signOut] = useSignOut(auth)
    const [user, loading] = useAuthState(auth);
    useEffect(()=>{
        window.addEventListener('scroll', function(){
            const navigation = document.querySelector('.navigation');
            navigation.classList.toggle('nav-active', window.scrollY > 20)
        })
    },[])
    const handleSignOut = ()=>{
      localStorage.removeItem('access-token');
      signOut()
    }
    return (
        <section className='flex'>
            <div className={`flex h-screen flex-col justify-between border-r bg-white md:w-[300px] ${show ? 'w-[300px]' : 'w-0'} duration-300 `}>
  <div className="px-4 py-6">
    <span
      className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
    >
      <img src="https://i.ibb.co/xMmjkQ3/Green-Dark-Gray-Modern-Minimalist-Leaf-G-Monogram-Logo-500-200-px-1.png" alt="" />
    </span>

    <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
      <Link
        to="/admin/dashboard"
        className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
      >
        <HiViewGrid className='h-5 w-5 opacity-75'/>

        <span className="text-sm font-medium"> Dashboard </span>
      </Link>

      <Link
        to="/admin/all-user"
        className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <HiUsers className='h-5 w-5 opacity-75'/>

        <span className="text-sm font-medium"> Users </span>
      </Link>

      

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <div className="flex items-center gap-2">
            <HiShoppingCart className={`h-5 w-5 opacity-75 md:block ${show || 'hidden'}`}/>

            <span className="text-sm font-medium"> Manage Products </span>
          </div>

          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
            <HiChevronDown className={`h-5 w-5 md:block ${show || 'hidden'}`}/>
          </span>
        </summary>

        <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
          <Link
            to="/admin/all-product"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <HiShoppingBag className='h-5 w-5 opacity-75'/>

            <span className="text-sm font-medium"> All Product </span>
          </Link>

          <Link
            to="/admin/add-product"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <HiPlusCircle className='h-5 w-5 opacity-75'/>

            <span className="text-sm font-medium"> Add Product </span>
          </Link>
        </nav>
      </details>

      <Link
        to="/admin/orders"
        className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <HiDocumentText className='h-5 w-5 opacity-75'/>

        <span className="text-sm font-medium"> Orders </span>
      </Link>

      <Link
        to="/admin/blogs"
        className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <Invoice/>

        <span className="text-sm font-medium"> Blogs </span>
      </Link>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <div className="flex items-center gap-2">
            <AccountIcon/>

            <span className="text-sm font-medium"> Account </span>
          </div>

          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <nav aria-label="Account Nav" className="mt-2 flex flex-col px-4">
          

          <Link
           to='/admin/security'
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <SecurityIcon/>

            <span className="text-sm font-medium"> Security </span>
          </Link>

            <button
              onClick={handleSignOut}
              type="submit"
              className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <LogoutIcon/>
              <span className="text-sm font-medium"> Logout </span>
            </button>
          
        </nav>
      </details>
    </nav>
  </div>

  <div className={`sticky inset-x-0 bottom-0 border-t border-gray-100 md:block ${show || 'hidden'}`}>
    <Link to="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
      <img
        alt={user?.displayName}
        src={user?.photoURL}
        className="h-10 w-10 rounded-full object-cover ring-2 ring-universal"
      />

      <div>
        <p className="text-xs">
          <strong className="block font-medium">{user?.displayName}</strong>

          <span> {user?.email} </span>
        </p>
      </div>
    </Link>
  </div>

</div>

            <div className=' bg-light-main w-full'>
                <nav className='w-full bg-white h-[48px] border-b-2 flex justify-between items-center px-8'>
                    <div onClick={()=>setShow(!show)} className='text-universal lg:opacity-0 text-3xl'>
                        {show ? <HiX/>: <HumbugerMenu />}
                    </div>
                    


{/* nav profile icon */}

<div className='flex'>
<Link className="block shrink-0 rounded-lg p-2 text-gray-600 shadow-sm hover:text-gray-700 border-2 mr-5">
  <span className="sr-only">Notifications</span>
  <NotificationsIcon/>
</Link>

<button type="button" class="group flex shrink-0 items-center rounded-lg transition">
          <span class="sr-only">Menu</span>
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 mr-3 rounded-full object-cover"
          />

          <p class="ms-2 hidden text-left text-xs sm:block">
            <strong class="block font-medium">Eric Frusciante</strong>

            <span class="text-gray-500"> eric@frusciante.com </span>
          </p>

</button>
</div>

{/*  */}

                </nav>
                <div className='p-8'>
                    <Outlet/>
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;