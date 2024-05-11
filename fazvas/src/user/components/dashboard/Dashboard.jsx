import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import Dashlinks from "./Dashlinks";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Nav />
      <div className="row ">
        <Dashlinks />
        <div className="col-md-9 text-black ">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
