import React, { useEffect, useState } from "react";
import API from "../../api";

const TelephoneTable = () => {
  const [telephone, setTelephone] = useState();
  useEffect(() => {
    API.fetchUsers().then((data) => setTelephone(data));
  }, []);
  return (
    <>
      {telephone ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Телефон</th>
              <th scope="col">Абонент</th>
            </tr>
          </thead>
          <tbody>
            {telephone.map((tel, index) => (
              <tr key={index}>
                <td>{tel.id}</td>
                <td>{tel.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <button className="btn btn" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      )}
    </>
  );
};

export default TelephoneTable;
