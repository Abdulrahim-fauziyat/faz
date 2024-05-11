import React from "react";

const FundAccount = () => {
  return (
    <>
    <div
        className="container justify-center  mt-5 mb-5  text-dark rounded"
        style={{ maxWidth: 300 }}
      >
     
        <form className="p-3 fw-bolder card ">
          <div className="mb-3 ">
            <label htmlFor="email/phoneNumber" className="form-label">
              user id
            </label>
            <input
              type="userid"
              className="form-control"
              id="userid"
              name="userid"
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="email/phoneNumber" className="form-label">
              Amount
            </label>
            <input
              type="Number"
              className="form-control"
              id="number"
              name="Number"
            />
          </div>

          <button type="submit" className="btn btn-primary fw-bold  ">
            Fund
          </button>
        </form>
      </div>
      



     </>
  );
};

export default FundAccount;
