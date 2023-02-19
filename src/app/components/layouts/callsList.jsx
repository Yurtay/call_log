import React, { useEffect, useState } from "react";
import GroupList from "../ui/listGroupDate";
import Table from "../ui/table/table";
import API from "../../api";
import { paginate } from "../../utils/paginate";
import Pagination from "../common/pagination";
import _ from "lodash";
import Loading from "../common/loading";

const CallsList = () => {
  const [callsLog, setCallsLog] = useState();
  const [users, setUsers] = useState();
  const [searchNumber, setSearchNumber] = useState("");
  const [months, setMonths] = useState();
  const [selectedMonths, setSelectedMonths] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ iter: "date", order: "asc" });
  const pageSize = 8;

  useEffect(() => {
    API.fetchMonths().then((data) => setMonths(data));
    API.callsLog.fetchCalls().then((data) => setCallsLog(data));
    API.users.fetchUsers().then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedMonths]);

  const filterCallsLogMonth = searchNumber
    ? callsLog.filter(
        (log) =>
          log.numberOne.toLowerCase().indexOf(searchNumber.toLowerCase()) !== -1
      )
    : selectedMonths
    ? callsLog.filter((call) => call.month === selectedMonths)
    : callsLog;
  const count = filterCallsLogMonth?.length;
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
    if (searchNumber !== "") setSearchNumber("");
    setSelectedMonths(item);
  };
  const handleSearchNumber = ({ target }) => {
    setSelectedMonths();
    setSearchNumber(target.value);
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
            <div className="shadow p-4">
              <GroupList
                months={months}
                onItemSelect={handleMonthsSelect}
                selectedItem={selectedMonths}
                onClearFilter={handleClearFilter}
              />
            </div>
          ) : (
            <Loading />
          )}
        </div>
        <div className="d-flex flex-column p-3">
          {callsLog ? (
            <div className="shadow p-4">
              <div className="d-flex flex-column p-1">
                <input
                  type="text"
                  name="search"
                  placeholder="Поиск по номеру телефона..."
                  onChange={handleSearchNumber}
                  value={searchNumber}
                />
              </div>
              <Table
                users={users}
                callsCrop={callsCrop}
                onSort={handleSort}
                currentSort={sortBy}
              />
            </div>
          ) : (
            <Loading />
          )}

          <div className="d-flex justify-content-center p-3">
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
