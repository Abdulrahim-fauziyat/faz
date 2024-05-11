import React from 'react'

const Adtxhistroy = () => {
  return (
    <>

    <div>
      <p className="h5 text-white mt-4 ">Most Recent History</p>
            <table class="table table-hover rounded">
            <thead>
              <tr>
                <th scope="col">user</th>
                <th scope="col">Transaction</th>
                <th scope="col">History</th>
                <th scope="col">status</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >John Doe</td>
                <td>Airtime</td>
                <td>400</td>
                <td>paid</td>
                
              </tr>
              <tr>
                <td >Jack frittleman</td>
                <td>Airtime</td>
                <td>300</td>
                <td>paid</td>
              </tr>
              <tr>
                <td>Abdulrahim fauziyat</td>
                <td>Airtime</td>
                <td>300</td>
                <td>pending</td>
              </tr>
            </tbody>
          </table>
      </div>
    
          </>
  )
}

export default Adtxhistroy