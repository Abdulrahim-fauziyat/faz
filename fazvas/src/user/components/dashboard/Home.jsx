import React from 'react'

const Home = () => {
  return (
    
    <>

    <div>
      <div className="h2">FazVas Users</div>
            <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Top up</th>
                <th scope="col">Wallet Balance</th>
                <th scope="col">Funding</th>
              
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>200</td>
                <td>200</td>
              
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>500</td>
                <td>500</td>
               
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>100k</td>
                <td>100k</td>
               
              </tr>
            </tbody>
          </table>
      </div>
    
          </>
  )
}

export default Home