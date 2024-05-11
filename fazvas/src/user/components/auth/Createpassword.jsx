import React, { useState } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { ENDPOINTS } from "../../../endpoint";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {  useNavigate, useParams } from "react-router-dom";

import Spinner from "../../utils/Spinner";

const Createpassword = () => {

  const [password, setPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const [isLoading, setLoading] = useState(false);
  const {id, token} =useParams()

  const goTo = useNavigate();

  //  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    // make a api call to send email for forgotten password"
    axios.post(`${ENDPOINTS.baseUrl}/createpassword`, {password,confirmPassword,id,token})
    .then((response) => {
        if (response.data.status.trim() === "success") {
          toast.success(response.data.status, options);
          setLoading(false);
          // wait for 3 seconds
          setTimeout(() => {
            goTo("/login"); // if success refer fazvas user back to login
          }, 2000);
        } else {
          setLoading(false); // stop spinner loading
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };




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
  };
  return (
    <>
    <Nav/>
    <div
        className="container justify-center elements mb-5 mt-5  text-dark shadow-lg rounded"
        style={{ maxWidth: 400 }}
      >
        <form className="p-3 fw-bolder" onSubmit={handleSubmit}>
        <h3 className="mt-5 text-center p-3">Reset password</h3>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
               <strong>New password</strong>
            </label>
            <input
              type="password"
               placeholder="Enter password"
               autoComplete="off"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
               <strong>Confirm password</strong>
            </label>
            <input
              type="password"
               placeholder="Confirm password"
               autoComplete="off"
              className="form-control"
              id=" setconfirmPassword"
              name="password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary fw-bold ">
            {isLoading ? <Spinner /> : "update"}
          </button>
        </form>
        <ToastContainer />
      </div>
      <Footer/>
    
    </>
  )
}

export default Createpassword