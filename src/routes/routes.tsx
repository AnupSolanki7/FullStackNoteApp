import { Link, Navigate } from "react-router-dom";
import Dashboard from "../component/Dashboard";
import Login from "../component/Login";
import Register from "../component/Register";

const routes = (isUser:any) => [
  {
    path: "/",
    element: isUser ? <Dashboard/> : <Navigate to={'/login'} />,
    children: [
      { path: "/dashboard", element: <Dashboard/> },
    ],
  },
  {
    path: "/register",
    element: <Register/>,
    children: [
      { path: "/register", element: <Register/> },
    ],
  },
  {
    path: "/",
    element: !isUser ?  <Login/> : <Navigate to={'/'} />,
    children: [
      { path: "/login", element: <Login/> },
    ],
  },
];

export default routes;
