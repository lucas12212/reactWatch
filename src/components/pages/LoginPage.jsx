import React, { useState } from "react";
import InputGroup from "./InputGroup";
import axios from 'axios';
import '../../css/newcss.css';
import { Link } from 'react-router-dom';


const LoginPage = () => {
    const [loginData, setLoginData] = useState({
      name: '',
      password_: '',
    });
  
    const handleChange = (e) => {
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Replace with your actual endpoint
        const response = await axios.post('http://localhost:8888/Supply_Chain_Project/api/login.php', loginData, {headers: {          "Cache-Control": "no-cache",          "Content-Type": "application/json",          "Access-Control-Allow-Origin": "*",        },} );
        console.log(response.data);
        // Handle successful login here (e.g., redirect, store token, etc.)
      } catch (error) {
        console.error('Login error: ', error);
        // Handle error (e.g., show error message)
      }
    };


  return (
    <div className="main-container">
      <div className="form-container">
        <div className="srouce">
          <a title="Banking Login" href="#">
            Watch Store
          </a>
        </div>
        <div className="form-body">
          <h2 className="title">Log in with</h2>
          <div className="social-login">
            <ul>
              <li className="google">
                <a href="#">Google</a>
              </li>
              <li className="fb">
                <a href="#">Facebook</a>
              </li>
            </ul>
          </div>
          <div className="_or">or</div>
          <form onSubmit={handleSubmit} className="the-form">
          <InputGroup
              type="text"
              placeholder="Enter your username"
              name="name"
              value={loginData.username}
              onChange={handleChange}
            />
            <InputGroup
              type="password"
              placeholder="Enter your password"
              name="password_"
              value={loginData.password}
              onChange={handleChange}
            />
            <input type="submit" value="Log In" />
          </form>
        </div>
        <div className="form-footer">
          <div>
            <span>Don't have an account?</span>{" "}
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LoginPage;
