import React from "react";
import Loading from "../../utils/loading";
import { Link } from "react-router-dom";

const TelephoneTable = ({ telephone }) => {
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
                <td>
                  <Link to={`/telephonedirectory/${tel.id}`}>{tel.id}</Link>
                </td>
                <td>
                  <Link to={`/telephonedirectory/${tel.id}`}>{tel.name}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TelephoneTable;
