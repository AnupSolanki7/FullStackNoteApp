import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e: any, input: any) => {
    setRegisterData({ ...registerData, [input]: e.target.value });
  };

  const registerUser = async () => {
    const result = await axios
      .post("http://192.168.1.200:8000/api/users/addUser", registerData)
      .then((res) => {
        setTimeout(() => navigate("/login"), 1000);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="register-form">
        <div className="top">
          <h1>Register</h1>
        </div>
        <div className="user-name">
          <label htmlFor="user-name">Name</label>
          <input
            value={registerData.name}
            onChange={(e: any) => handleChange(e, "name")}
            type="text"
            placeholder="username"
          />
        </div>
        <div className="user-name">
          <label htmlFor="email">Email</label>
          <input
            value={registerData.email}
            onChange={(e: any) => handleChange(e, "email")}
            type="text"
            placeholder="email"
          />
        </div>
        <div className="user-name">
          <label htmlFor="password">Password</label>
          <input
            value={registerData.password}
            onChange={(e: any) => handleChange(e, "password")}
            type="password"
            placeholder="password"
          />
        </div>
        <div className="user-name">
          <label htmlFor="role">Role</label>
          <input
            value={registerData.role}
            onChange={(e: any) => handleChange(e, "role")}
            type="text"
            placeholder="role"
          />
        </div>
        <div className="btn">
          <button onClick={registerUser}>Submit</button>
        </div>
        <div className="link">
          <p>Already a user?</p>
          <Link to={"/login"}> &nbsp;login here</Link>
        </div>
      </div>
    </>
  );
};

export default Register;
