import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import LoginLayout from "../layouts/LoginLayout";
import BusinessLayout from "../layouts/BusinessLayout";
import CreatePage from "../pages/CreatePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path: "/",
            element: <Home/>,   
        },
      ]
    },
    {
      path: "",
      element: <LoginLayout/>,
      children: [
        {
          path: "login",
          element: <Login/>,   
      },
      ]
    },
    {
      path: "",
      element: <BusinessLayout/>,
      children: [
        {
          path: "businesspage",
          element: <CreatePage/>,   
      },
      ]
    },
  ]);