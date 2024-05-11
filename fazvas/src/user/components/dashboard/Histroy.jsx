import React, { useEffect, useState } from "react";
import Spinner from "../../utils/Spinner";
import axios from "axios";

const Histroy = () => {
  const [history, setHistory] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (history.length > 0) return;

    const getHistory = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3010/dashboard/history");
        console.log(response);
        if (response.data.msg === "success") {
          setHistory(response.data.records);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getHistory();
  }, [history]);

  return (
    <>
      <div className='m-5'>
        <p className="h3 text-dark card-header">Most Recent History</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">SN</th>
              <th scope="col">Txtype</th>
              <th scope="col">amount</th>
              <th scope="col">status</th>
              <th scope="col">Action</th>
              <th scope="col">createdAt</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="6"><Spinner /></td>
              </tr>
            ) : (
              history.map((entry, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{entry.Txtype}</td>
                  <td>{entry.amount}</td>
                  <td>{entry.status.toString()}</td>
                  <td>{entry.Action}</td>
                  <td>{entry.createdAt}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Histroy;
