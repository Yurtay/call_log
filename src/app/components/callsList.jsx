import React, { useEffect, useState } from "react";
import GroupList from "./listGroupDate";
import Table from "./table/table";
import API from "../api";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import _ from "lodash";

const CallsList = () => {
  const [callsLog] = useState(API.fetchCalls());
  const users = API.fetchUsers();
  const [months, setMonths] = useState();
  const [selectedMonths, setSelectedMonths] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ iter: "date", order: "asc" });
  const pageSize = 8;

  useEffect(() => {
    API.fetchMonths.fetchMonths().then((data) => setMonths(data));
  }, []);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedMonths]);
  const filterCallsLogMonth = selectedMonths
    ? callsLog.filter((call) => call.month === selectedMonths)
    : callsLog;
  const count = filterCallsLogMonth.length;
  const sortCallsLog = _.orderBy(
    filterCallsLogMonth,
    [sortBy.iter],
    [sortBy.order]
  );

  const callsCrop = paginate(sortCallsLog, currentPage, pageSize);
  const hadlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleMonthsSelect = (item) => {
    setSelectedMonths(item);
  };
  const handleClearFilter = () => {
    setSelectedMonths();
    setCurrentPage(1);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  return (
    <>
      <div className="d-flex">
        <div className="d-flex flex-column flex-shrink-0 p-3">
          {months ? (
            <GroupList
              months={months}
              onItemSelect={handleMonthsSelect}
              selectedItem={selectedMonths}
              onClearFilter={handleClearFilter}
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
        <div className="d-flex flex-column p-3">
          <Table
            users={users}
            callsCrop={callsCrop}
            onSort={handleSort}
            currentSort={sortBy}
          />
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
    </>
  );
};

export default CallsList;
