import React from 'react'
import Admdashlink from './Admdashlink'
import Nav from '../../../user/components/Nav'
// import Footer from '../../../user/components/Footer'
import { Outlet } from 'react-router-dom'



const Addashboard = () => {
  return (
    <>
    <Nav />
      <div className="row addash">
        <Admdashlink />
        <div className="col-md-9 text-black ">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Addashboard
