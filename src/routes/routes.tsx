import { Link, Navigate } from "react-router-dom";
import ChatLogin from "../component/ChatLogin";
import ChatRoom from "../component/ChatRoom";
import CheckList from "../component/CheckList";
import Dashboard from "../component/Dashboard";
import Login from "../component/Login";
import Notes from "../component/Notes";
import Register from "../component/Register";
import io from "socket.io-client";

const socket: any = io("http://192.168.1.200:4000");

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
    path: "/chat",
    element: <ChatLogin socket={socket}/>,
    children: [
      { path: "/chat", element: <ChatLogin socket={socket}/> },
    ],
  },
  {
    path: "/chatRoom",
    element: <ChatRoom socket={socket}/>,
    children: [
      { path: "/chatRoom", element: <ChatRoom socket={socket}/> },
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
