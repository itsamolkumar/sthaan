import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/Error";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import About from "../pages/About";
import Contact from "../pages/Contact";
import VerifyUser from "../pages/VerifyUser";
import ResetPassword from "../pages/ResetPassword";
import ResetOtpRequest from "../pages/ResetOtpRequest";
const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<NotFound/>,
        children: [
      {
        index: true,              // means "/"
        element: <Home />,
      },
      {
        path: "auth/login",            
        element: <Login />,
      },
      {
        path: "auth/signup",            
        element: <Signup />,
      },{
        path: "auth/verify-user",            
        element: <VerifyUser />,
      },{
        path: "auth/forgot-password-otp",            
        element: <ResetPassword />,
      },{
        path: "auth/forgot-password",            
        element: <ResetOtpRequest />,
      },{
        path: "about",           
        element: <About />,
      },{
        path: "contact",            
        element: <Contact />,
      },
    ],
    }
])

export default router;