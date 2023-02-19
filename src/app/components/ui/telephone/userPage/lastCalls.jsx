import React, { useEffect, useState } from "react";
import API from "../../../../api";
import Loading from "../../../common/loading";

const LastCalls = ({ userId }) => {
  const [calls, setCalls] = useState();
  useEffect(() => {
    API.callsLog.fetchCallsByNumber(userId).then((data) => setCalls(data));
  }, []);

  return (
    <>
      {calls ? (
        calls.length === 0 ? (
          <h4>Не найдено крайних соединений...</h4>
        ) : (
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center position-relative">
                <h4>Таблица крайних соединений абонента</h4>
                <table className="table">
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col"> Дата/время </th>
                      <th scope="col">Направление</th>
                      <th scope="col">Номер (кто)</th>
                      <th scope="col">Контакт (кто)</th>
                      <th scope="col">Номер (кому)</th>
                      <th scope="col">Контакт (кому)</th>
                      <th scope="col">Длительность разговора</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calls.map((item, index) => (
                      <tr key={item._id}>
                        <td>{index}</td>
                        <td>{item.date}</td>
                        <td>{item.direction}</td>
                        <td>{item.numberOne}</td>
                        <td>{item.numberOne}</td>
                        <td>{item.numberTwo}</td>
                        <td>{item.numberTwo}</td>
                        <td>{item.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
      ) : (
        <Loading />
      )}
    </>
  );
};

export default LastCalls;
