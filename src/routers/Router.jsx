import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import LoginLayout from "../layouts/LoginLayout";
import BusinessLayout from "../layouts/BusinessLayout";
import CreatePage from "../pages/CreatePage";

export const router = createBrowserRouter([
    {
      path: "/home",
      element: <MainLayout/>,
      children:[
        {
            path: "/home",
            element: <Home/>,   
        },
      ]
    },
    {
      path: "/",
      element: <LoginLayout/>,
      children: [
        {
          path: "/",
          element: <Login/>,   
      },
      ]
    },
    {
      path: "/pages",
      element: <BusinessLayout/>,
      children: [
        {
          path: "/pages/create",
          element: <CreatePage/>,   
      },
      ]
    },
  ]);