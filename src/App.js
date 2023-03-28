import 'animate.css';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes, useLocation } from 'react-router-dom';
import axiosApi from './api/axiosApi';
import './App.css';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import AdminLogin from './pages/AdminDashboard/AdminPage/AdminLogin/AdminLogin';
import AdminHome from './pages/AdminDashboard/AdminPage/Home/AdminHome';
import Orders from './pages/AdminDashboard/AdminPage/ManageOrder/Orders';
import AddProduct from './pages/AdminDashboard/AdminPage/ManageProduct/AddProduct';
import AllProduct from './pages/AdminDashboard/AdminPage/ManageProduct/AllProduct';
import AddUser from './pages/AdminDashboard/AdminPage/ManageUser/AddUser';
import AllUser from './pages/AdminDashboard/AdminPage/ManageUser/AllUser';
import Error from './pages/Error/Error';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Navigation from './pages/Home/Shared/Navigation';
import Login from './pages/Login/Login';
import Registration from './pages/Login/Registration';
import ProductPage from './pages/ProductPage/ProductPage';


function App() {
  const {pathname} = useLocation()
  console.log(pathname)

  useEffect(()=>{
    axiosApi.get('/')
    .then(data => console.log(data
      ))
  }, [])
 
  if(pathname.includes('/admin')){
    return (
      <>
       <Routes>
       <Route path='/admin-login' element={<AdminLogin/>}/>
         <Route path='/admin' element={<AdminDashboard/>}>
           <Route index element={<AdminHome/>}/>
           <Route path='/admin/dashboard' element={<AdminHome/>}/>
           <Route path="/admin/all-product" element={<AllProduct/>}/>
           <Route path="/admin/add-product" element={<AddProduct/>}/>
           <Route path="/admin/orders" element={<Orders/>}/>
           <Route path="/admin/all-user" element={<AllUser/>}/>
           <Route path="/admin/add-user" element={<AddUser/>}/>
         </Route>
       </Routes>
       </>
     )
  }else{
    return (
      <>
      <Toaster/>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/purchase/:id' element={<ProductPage/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      <Footer/>
      </>
    )
  }
  
 }


export default App;
