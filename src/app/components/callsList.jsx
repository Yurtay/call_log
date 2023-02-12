import React, { useEffect, useState } from "react";
import GroupList from "./listGroupDate";
import Table from "./table/table";
import API from "../api";

const CallsList = () => {
  const callsLog = API.fetchCalls();
  const users = API.fetchUsers();
  const [months, setMonths] = useState();
  const [selectedMonths, setSelectedMonths] = useState();
  useEffect(() => {
    API.fetchMonths.fetchMonths().then((data) => setMonths(data));
  }, []);
  const handleMonthsSelect = (item) => {
    setSelectedMonths(item);
  };

  return (
    <>
      {months ? (
        <GroupList
          months={months}
          onItemSelect={handleMonthsSelect}
          selectedItem={selectedMonths}
        />
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
      <Table callsLog={callsLog} users={users} />
    </>
  );
};

export default CallsList;
