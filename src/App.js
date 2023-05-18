import 'animate.css';
import { Toaster } from 'react-hot-toast';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AdminAuth from './RequireAuth/AdminAuth';
import UserAuth from './RequireAuth/UserAuth';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import AdminLogin from './pages/AdminDashboard/AdminPage/AdminLogin/AdminLogin';
import BlogManage from './pages/AdminDashboard/AdminPage/BlogManage/BlogManage';
import UploadBlog from './pages/AdminDashboard/AdminPage/BlogManage/UploadBlog';
import AdminHome from './pages/AdminDashboard/AdminPage/Home/AdminHome';
import Orders from './pages/AdminDashboard/AdminPage/ManageOrder/Orders';
import AddProduct from './pages/AdminDashboard/AdminPage/ManageProduct/AddProduct';
import AllProduct from './pages/AdminDashboard/AdminPage/ManageProduct/AllProduct';
import AllUser from './pages/AdminDashboard/AdminPage/ManageUser/AllUser';
import Security from './pages/AdminDashboard/AdminPage/Security';
import Error from './pages/Error/Error';
import Footer from './pages/Footer/Footer';

import BlogPage from './pages/Blogs/BlogPage';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import MyPortfolio from './pages/Home/MyPortfolio/MyPortfolio';
import Navigation from './pages/Home/Shared/Navigation';
import Login from './pages/Login/Login';
import Registration from './pages/Login/Registration';
import ProductPage from './pages/ProductPage/ProductPage';
import UserDashboard from './pages/UserDashboard.js/UserDashboard';
import AddReview from './pages/UserDashboard.js/UserDashboardPage/AddReview/AddReview';
import MyAccount from './pages/UserDashboard.js/UserDashboardPage/MyAccount/MyAccount';
import MyOrder from './pages/UserDashboard.js/UserDashboardPage/MyOrder/MyOrder';
import Payment from './pages/UserDashboard.js/UserDashboardPage/Payment/Payment';
import DashboardHome from './pages/UserDashboard.js/UserDashboardPage/dashboardHome/DashboardHome';


function App() {
  const {pathname} = useLocation()
 
  if(pathname.includes('/admin')){
    return (
      <>
      <Toaster/>
       <Routes>
       <Route path='/admin-login' element={<AdminLogin/>}/>
         <Route path='/admin' element={<AdminAuth><AdminDashboard/></AdminAuth>}>
           <Route index element={<AdminHome/>}/>
           <Route path='/admin/dashboard' element={<AdminHome/>}/>
           <Route path="/admin/all-product" element={<AllProduct/>}/>
           <Route path="/admin/add-product" element={<AddProduct/>}/>
           <Route path="/admin/orders" element={<Orders/>}/>
           <Route path="/admin/blogs" element={<BlogManage/>}/>
           <Route path="/admin/add-blogs" element={<UploadBlog/>}/>
           <Route path="/admin/all-user" element={<AllUser/>}/>
           <Route path="/admin/security" element={<Security/>}/>
           <Route path="*" element={<Error/>}/>
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
        <Route path='/purchase/:id' element={<UserAuth><ProductPage/></UserAuth>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/blog/:id' element={<BlogPage/>}></Route>
        <Route path='/my-portfolio' element={<MyPortfolio/>}></Route>
        <Route path='/dashboard' element={<UserAuth><UserDashboard/></UserAuth>}>
          <Route index element={<DashboardHome/>}/>
          <Route path='my-order' element={<MyOrder/>}/>
          <Route path='add-review' element={<AddReview/>}/>
          <Route path='my-account' element={<MyAccount/>}/>
          <Route path='payment/:id' element={<Payment/>}/>
        </Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      <Footer/>
      </>
    )
  }
  
 }


export default App;
