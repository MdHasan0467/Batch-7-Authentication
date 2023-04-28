import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Home/Home";
import Others from "../Layouts/Others/Others";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const router = createBrowserRouter(
  [
    {
      path: '/', element: <Main />,
      children : [
        {
          path: '/', element: <Home />
        },
        {
          path: '/home', element: <Home />
        },
        {
          path: '/login', element: <Login />
        },
        {
          path: '/signup', element: <Signup />
        },
      ] 
    },


    {
      path: '/dashboard', element: <Others />,
      children: [
        {
          path : '/dashboard/welcome', element: <Dashboard />
        }
      ]
    }

    
  ] 
)



export default router