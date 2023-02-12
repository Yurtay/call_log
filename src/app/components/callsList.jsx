import React, { useEffect, useState } from "react";
import GroupList from "./listGroupDate";
import Table from "./table/table";
import API from "../api";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";

const CallsList = () => {
  const callsLog = API.fetchCalls();
  const users = API.fetchUsers();
  const [months, setMonths] = useState();
  const [selectedMonths, setSelectedMonths] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const filterCallsLogMonth = selectedMonths
    ? callsLog.filter((call) => call.month === selectedMonths)
    : callsLog;
  const count = filterCallsLogMonth.length;
  const callsCrop = paginate(filterCallsLogMonth, currentPage, pageSize);
  const hadlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    API.fetchMonths.fetchMonths().then((data) => setMonths(data));
  }, []);
  const handleMonthsSelect = (item) => {
    setSelectedMonths(item);
  };

  return (
    <div className="d-flex">
      <div className="d-flex flex-column flex-shrink-0 p-3">
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
      </div>
      <div className="d-flex flex-column">
        <Table users={users} callsCrop={callsCrop} />
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={hadlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CallsList;
