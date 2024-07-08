import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path: "/",
            element: <Home/>,   
        },
        {
            path: "/login",
            element: <Login/>,   
        },
        {
            path: "/sign-up",
            element: <SignUp/>,   
        },
      ]
    },
  ]);