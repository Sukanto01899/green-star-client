import React, { useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { HiLogout, HiX } from "react-icons/hi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from 'react-router-dom';
import { HumbugerMenu } from '../../../assets/icons/icons';
import auth from '../../../firebase.init';

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [user] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);
  
  const menus = [
    {name: 'Home', route: '/'},
    {name: 'About', route: '/blog'},
    {name: 'Career', route: '/career'},
    {name: 'History', route: '/history'},
    {name: 'Service', route: '/service'},
    {name: 'Project', route: '/project'},
    {name: 'Blog', route: '/blog'},
  ]

  const handleLogout = ()=>{
    localStorage.removeItem('access-token');
    signOut();
  }
    return (
      <header aria-label="Site Header" className="bg-white dark:bg-slate-700 border-b-1 border-black">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <Link className="block " to="/">
          <img className='w-[200px]' src="https://i.ibb.co/xMmjkQ3/Green-Dark-Gray-Modern-Minimalist-Leaf-G-Monogram-Logo-500-200-px-1.png" alt="" />
        </Link>
      </div>

{/* Desktop menu */}
      <div className="hidden md:block"> 
        <nav aria-label="Site Nav">
          <ul className="flex items-center gap-6 text-sm">
           {menus.map((menu, index) =>  <li key={index}>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white"
                to={menu.route}
              >
                {menu.name}
              </Link>
            </li>)}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          {user ? <Link
            className="rounded-md flex items-center space-x-2 bg-universal px-5 py-2.5 text-sm font-medium text-white shadow"
            to="/dashboard"
          >
            <MdOutlineDashboardCustomize/>
            <span>Dashboard</span>
          </Link> : <Link
            className="rounded-md bg-universal px-5 py-2.5 text-sm font-medium text-white shadow"
            to="/login"
          >
            Login
          </Link>}

          <div className="hidden sm:flex">
            
            {user ? <button
              className="flex items-center space-x-2 rounded-md bg-light-main px-5 py-2.5 text-sm font-medium text-universal"
              onClick={handleLogout}
            >
              <span>Log out</span>
              <HiLogout/>
            </button> : <Link
              className="rounded-md bg-light-main px-5 py-2.5 text-sm font-medium text-universal"
              to='/registration'
            >
              Register
            </Link>}

          </div>
        </div>

        <div className="block md:hidden">
          <button onClick={()=> setShow(true)}
            className="rounded bg-light-main p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <HumbugerMenu/>
          </button>
        </div>
      </div>



      {/* Mobile menu */}
      <nav className={`${show ? 'w-[300px]' : 'w-0'} duration-200 fixed bg-white h-screen top-0 right-0 shadow-lg md:hidden dark:bg-dark-main z-50`}>
        
        <span onClick={()=> setShow(false)} className={`${show || 'hidden'} absolute top-5 right-5 text-2xl border-2 cursor-pointer dark:text-white`}><HiX/></span>

          <div className='mt-20'>
          <ul className='space-y-4'>
             {menus.map((menu, index) => <li key={index} className="rounded-lg dark:text-white dark:hover:bg-dark-hover  hover:bg-gray-100 pl-8 py-2 text-gray-700"><Link to={menu.route}>{menu.name}</Link></li>)}
             
             <div className="sm:hidden">
            {user ? <button
              className="flex items-center space-x-2 rounded-md bg-light-main px-5 py-2.5 text-sm font-medium text-universal"
              onClick={()=> signOut()}
            >
              <span>Log out</span>
              <HiLogout/>
            </button> : <Link
              className="rounded-md w-full bg-gray-100 ml-8 px-5 py-2.5 text-sm font-medium text-universal"
              to='/register'
            >
              Register
            </Link>}
          </div>
          </ul>
          </div>
  
      </nav>


    </div>
  </div>
</header>


    );
};

export default Navigation;