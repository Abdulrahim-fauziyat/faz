import React from 'react'

const Topup = () => {
  return (
    <div
    className="container-fluid justify-center body-bg-white  border-0 shadow-lg mb-5 mt-5  text-dark rounded card"
    style={{ maxWidth: 400 }}
  >
     <div className='container  '>
    <form className="p-3 fw-bolder  ">
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">
          PhoneNumber
        </label>
        <input
          type="phoneNumber"
          className="form-control"
          id="phonenumber"
          name="phoneNumber"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input
          type="Amount"
          className="form-control"
          id="amount"
          name="Amount"
        />
      </div>
      <div className="mb-3">
          <label htmlFor="network" className="form-label">
            Network
          </label>
          <select className="form-select" id="network" name="network">
            <option value="">Select Network</option>
            <option value="network1">MTN</option>
            <option value="network2">GLO</option>
            <option value="network3">AIRTEL</option>
            <option value="network3">9MOBILE</option>
          </select>
        </div>


      <button type="submit" className="btn btn-primary fw-bold ">
       Recharge
      </button>
    </form>
  </div>
  </div>
  )
}

export default Topup