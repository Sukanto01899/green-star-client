import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { HiDocumentText, HiMenuAlt1, HiX } from "react-icons/hi";
import { MdAccountCircle, MdOutlineDashboardCustomize, MdOutlineReviews } from "react-icons/md";
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const UserDashboard = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [user, loading, error] = useAuthState(auth);

    const menus = [
        {name: "Dashboard", route:"/dashboard", icon: <MdOutlineDashboardCustomize/>},
        {name: "My Order", route:"my-order", icon: <HiDocumentText/>},
        {name: "Add Review", route:"add-review", icon: <MdOutlineReviews/>},
        {name: "My Account", route:"my-account", icon: <MdAccountCircle/>},
    ]
    return (
        <section className="bg-light-main dark:bg-dark-main ">
        <div className="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 md:py-8 lg:px-8">
            <h1 className='pb-2 md:pb-4 text-xl'>Hi Sukanto!</h1>
            <div className="w-full bg-universal py-2 flex justify-between items-center px-4">
                <div>
                <ul className=" justify-center space-x-8 hidden md:flex">
                    {menus.map((menu, index) => <li key={index}><Link className="text-white flex items-center space-x-1" to={menu.route}>{menu?.icon} <span>{menu.name}</span></Link></li>)}
                </ul>
                {/* Mobile menu */}
                <div className="relative md:hidden ">
                    <span onClick={()=> setShowMenu(!showMenu)} className='text-2xl text-white cursor-pointer'>{showMenu ? <HiX/> :<HiMenuAlt1/>}</span>
                  <div className={`absolute top-8 ${showMenu ? 'block' : 'hidden'}`}>
                    <ul className="space-y-2 rounded-md bg-white text-black w-[130px] px-2 py-4 shadow-lg">
                    {menus.map((menu, index) => <li key={index}><Link className="text-sm hover:text-universal flex items-center space-x-1" to={menu.route}>{menu.icon} <span>{menu.name}</span></Link></li>)}
                    </ul>
                  </div>
                </div>
                </div>
                <div>
                    <img className="w-[36px] h-[36px] rounded-full ring-2 ring-white" src={user.photoURL} alt="" />
                </div>
            </div>

            {/* Dashboard outlet component */}
            <div className='py-4'>
                <Outlet/>
            </div>
        </div>
        </section>
    );
};

export default UserDashboard;