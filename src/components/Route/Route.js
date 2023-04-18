import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Home from "../Home/Home";
import Main from "../Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },



  {
    path: "*",
    element: <div>Error 404 page</div>,
  },

  
]);

export default router;
