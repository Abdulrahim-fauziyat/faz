import React, { useState } from "react";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
// import { FLWAPI } from "../utils/externals";
import {FLWAPI} from "../../../user/utils/externals"

const FundAccount = () => {
  const [ amt, setAmt]       = useState(1000);
  let  user = localStorage.getItem("fazUser");
       user = JSON.parse(user);

  const config = {
    public_key: FLWAPI.FLW_PUB_KEY,
    tx_ref: Date.now(),
    amount: amt,
    currency: 'NGN',
    payment_options:"card", 
    customer: {
      email: user.email,
      phone_number: user.phone,
      name: user.fullName
    }, 
    customizations: {
      title: 'Funding My FazVas Account',
      description: 'Funding My FazVas Wallet',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  return (
    <>
    <div
        className="container justify-center  mt-5 mb-5  text-dark rounded"
        style={{ maxWidth: 300 }}
      >
     
        <section className="p-3 fw-bolder card ">
          <div className="mb-3 ">
            <label htmlFor="email/phoneNumber" className="form-label">
             Email
            </label>
            <input
              type="userid"
              className="form-control"
              id="userid"
              name="userid"
              value={user.email} 
              readOnly
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
              value={amt}
              onChange={( e )=> setAmt( e.target.value) }
            />
          </div>

          <button type="submit" className="btn btn-primary fw-bold"  onClick={() => {
                handleFlutterPayment({
                  callback: (response) => {
                    console.log(response);
                      // closePaymentModal() // this will close the modal programmatically
                  },
                  onClose: () => {},
                });
              }}>
               Fund
          </button>
        </section>
      </div>
      



     </>
  );
};

export default FundAccount;
