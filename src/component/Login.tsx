import { message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { userDataState } from "../features/counter/counterSlice";
import { userLogin } from "../redux/services";

const Login = () => {
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const [loginData, setLoginData]:any = useState({
    email:"",
    password:"",
})

const success = (message:any) => {
  messageApi.open({
    type: 'success',
    content: message,
  });
};

const error = (message:any) => {
  messageApi.open({
    type: 'error',
    content: message,
  });
};

const data = useAppSelector((state:any) => state)

const handleChange = (e:any, input:any) =>{
  setLoginData({...loginData, [input]:e.target.value})
}

const loginSubmit = async () => {
   await userLogin(loginData).then((res:any) => {
    console.log(res.data.message);
    if(res.data.success){
      success(res.data.message)
      setTimeout(() => navigate('/dashboard') ,1000)
      dispatch(userDataState(res.data.accessToken))
    }else{
      error(res.data.message)
    }

    
  })
  
}


  return (
    <>
    {contextHolder}
    <div className="top">
      <h1>Login</h1>
    </div>
      <div className="user-name">
        <label htmlFor="user-name">UserName</label>
        <input value={loginData.email} onChange={(e:any) => handleChange(e, "email")} type="text" placeholder="username" />
      </div>
      <div className="user-name">
        <label htmlFor="password">Password</label>
        <input value={loginData.password} onChange={(e:any) => handleChange(e, "password")} type="password" placeholder="password" />
      </div>
      <div className="btn">
        <button onClick={loginSubmit} >Submit</button>
      </div>
      <div className="link">
        <p>Not a user?</p><Link to={'/register'}> &nbsp;register here</Link>
      </div>
    </>
  );
};

export default Login;
