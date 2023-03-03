import { Link, Navigate } from "react-router-dom";
import CheckList from "../component/CheckList";
import Dashboard from "../component/Dashboard";
import Login from "../component/Login";
import Notes from "../component/Notes";
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
    path: "/notes",
    element: isUser ? <Notes/> : <Navigate to={'/login'} />,
    children: [
      { path: "/notes", element: <Notes/> },
    ],
  },
  {
    path: "/checklist",
    element: isUser ? <CheckList/> : <Navigate to={'/login'} />,
    children: [
      { path: "/checklist", element: <CheckList/> },
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
