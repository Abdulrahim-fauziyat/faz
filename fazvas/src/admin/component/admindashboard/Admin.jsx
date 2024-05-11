import React from 'react';
import { FaPlus, FaPaperPlane } from 'react-icons/fa';

const Admin = () => {
  return (
    <div className="container mt-2 mb-5 ">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-auto">
          <h5 className='text-white'>Admin</h5>
        </div>
        <div className="col-md-auto">
          <button type="button"    className="btn btn-primary btn-sm mb-2" data-bs-toggle="modal" data-bs-target="#admin">
            <FaPlus /> Add New
          </button>

          <div className="modal fade" id="admin" tabIndex="-1" aria-labelledby="Admin" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="admin">Add New</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Name" />
                    <label htmlFor="floatingInput">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="Email" className="form-control" id="floatingInput" placeholder="Email" />
                    <label htmlFor="floatingInput">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput" placeholder="Phone Number" />
                    <label htmlFor="floatingInput">Phone Number</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="passord" className="form-control" id="floatingInput" placeholder="password" />
                    <label htmlFor="floatingInput">password</label>
                  </div>
                  <button className="btn btn-primary btn-lg">
                    Send <FaPaperPlane />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
     
            <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John doe</td>
                <td>john@gmail.com</td>
                <td>08108398148</td>
                <td>26 march 2024</td>
                
              </tr>
              <tr>
                <td>2</td>
                <td>Abdulrahim Fauziyat</td>
                <td>Fauziyat@gmail.com</td>
                <td>0811254356</td>
                <td>25 march 2024</td>
              </tr>
              <tr>
                <td>3</td>
                <td>AbdulKadiri</td>
                <td>kadiri@gmail.com</td>
                <td>09023459864</td>
                <td>21 march 2024</td>
              </tr>
            </tbody>
          </table>
      </div>
    
    </div>
  );
};

export default Admin;
