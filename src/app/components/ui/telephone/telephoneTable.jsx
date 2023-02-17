import React from "react";
import Loading from "../../common/loading";
import { Link } from "react-router-dom";

const TelephoneTable = ({ telephone }) => {
  return (
    <>
      {telephone ? (
        <div className="container mt-1 shadow">
          <div className="row">
            {/* <div className="col-md-6 offset-md-3 shadow p-4"> */}
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
                      <Link to={`/telephonedirectory/${tel.id}`}>
                        {tel.name}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* </div> */}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TelephoneTable;
