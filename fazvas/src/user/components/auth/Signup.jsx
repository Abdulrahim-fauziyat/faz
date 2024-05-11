import React,{ useState } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../../utils/Spinner"
import { ENDPOINTS } from "../../../endpoint";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [ fullName, setFullName] = useState("");
  const [ email, setEmail]       = useState("");
  const [ phone, setPhone]       = useState("");
  const [ password, setPassword] = useState("");

  const [ isLoading, setLoading] = useState(false);

  const goTo = useNavigate();

  const options = {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
    }

  const handelSubmit = ( e ) => {
     e.preventDefault();
     console.log(fullName,email,phone,password);
     setLoading(true);
     // make a api call to register our user"/register"
     axios.post(`${ENDPOINTS.baseUrl}/register`,{ fullName, phone, email, password })
     .then((response) => {
         console.log(response);
         if (response.data.msg.trim() === "success" ) {
            toast.success(response.data.msg,options);
            setLoading(false);
            // wait for 3 seconds 
            setTimeout( ()=>{
              goTo('/login');
            },2000);
           
         } else{
          setLoading(false)
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
        className="container justify-center elements mb-5 mt-2     
        text-dark rounded  shadow-lg card  sign"
        style={{ maxWidth: "400px" }}
        >
        <h2 className="mt-5 text-center p-3">Sign up Form</h2>
        <form className="p-3 fw-bolder" onSubmit={handelSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control "
              id="firstName"
              name="firstName"
              value={fullName}
              onChange={( e )=> setFullName( e.target.value) }
            />
          </div>
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
              onChange={( e )=> setEmail( e.target.value) }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control "
              id="phoneNumber"
              name="phoneNumber"
              value={phone}
              onChange={( e )=> setPhone( e.target.value) }
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
              value={password}
              onChange={( e )=> setPassword( e.target.value) }
            />
           
          </div>
          <button type="submit" className="btn btn-primary fw-bold ">
              { isLoading ? <Spinner/> : 'Sign up'}
          </button>
        </form>
        <ToastContainer />
      </div>

      <Footer />
    </>
  );
};

export default Signup;
