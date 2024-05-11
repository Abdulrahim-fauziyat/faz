import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import Spinner from "../../utils/Spinner";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ENDPOINTS } from "../../../endpoint";
const Login = () => {
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const [isLoading,setLoading] =useState(false);

  
  const options = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: "Bounce",
  }

   const goTo =useNavigate();


   const handleLogin = ( e ) => {
    e.preventDefault();
    console.log(email,password);
    setLoading(true);
    // make a api call to login and
    axios.post(`${ENDPOINTS.baseUrl}/login`,{ email, password })
    .then((response) => {
        console.log(response);
        if (response.data.msg === "success" && response.statusText === "OK") {
           toast.success(response.data.msg,options);
           setLoading(false);
           localStorage.setItem("fazUser",JSON.stringify(response.data.user));
           // wait for 2 seconds 
           setTimeout( ()=>{
             goTo('/dashboard/Home');
           },2000);
          
        }
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
 };

  return (
    <>
      <Nav />

      <div
        className="container justify-center elements mb-5 mt-5 card text-black rounded"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="mt-5 text-center p-3 text-dark"> Login</h2>
        <form className="p-3 fw-bolder text-dark " onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={ ( e ) => setEmail( e.target.value ) }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              autoComplete="password"
              value={password}
              onChange={ ( e ) => setPassword( e.target.value ) }
            />
            <p className="text-">
              Forgot{" "}
              <Link to="/forgotpassword" className="text-decoration-none text-danger">
                Password?
              </Link>
            </p>
          </div>
          <button type="submit" className="btn btn-primary fw-bold">
             {isLoading ? <Spinner/> : 'Login'}
          </button>
        </form>
        <ToastContainer />
      </div>

      <Footer />
    </>
  );
};

export default Login;
