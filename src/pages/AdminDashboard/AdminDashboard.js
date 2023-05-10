import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { HiChevronDown, HiDocumentText, HiPlusCircle, HiShoppingBag, HiShoppingCart, HiUsers, HiViewGrid, HiX } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';
import { HumbugerMenu, Invoice } from '../../assets/icons/icons';
import auth from '../../firebase.init';

const AdminDashboard = () => {
    const [show, setShow] = useState(false);
    const [user, loading] = useAuthState(auth);
    useEffect(()=>{
        window.addEventListener('scroll', function(){
            const navigation = document.querySelector('.navigation');
            navigation.classList.toggle('nav-active', window.scrollY > 20)
        })
    },[])
    return (
        <section className='flex'>
            <div className={`flex h-screen flex-col justify-between border-r bg-white md:w-[300px] ${show ? 'w-[300px]' : 'w-0'} duration-300 `}>
  <div className="px-4 py-6">
    <span
      className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
    >
      Logo
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
        to="/admin/Invoices"
        className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <Invoice/>

        <span className="text-sm font-medium"> Invoices </span>
      </Link>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>

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
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>

            <span className="text-sm font-medium"> Details </span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>

            <span className="text-sm font-medium"> Security </span>
          </a>

          <form action="/logout">
            <button
              type="submit"
              className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>

              <span className="text-sm font-medium"> Logout </span>
            </button>
          </form>
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
                    <div>
                        <p>Home</p>
                    </div>
                </nav>
                <div className='p-8'>
                    <Outlet/>
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;