import React, { useState } from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../../components/common/pagination";
import _ from "lodash";
import { useUser } from "../../../hooks/useUser";
import { useCall } from "../../../hooks/useCall";

const Table = ({ selectedMonths, currentPage, onPageChange }) => {
  const { users } = useUser();
  const { calls } = useCall();
  const [searchNumber, setSearchNumber] = useState("");
  const [sortBy, setSortBy] = useState({ iter: "date", order: "asc" });
  const pageSize = 100;

  const handleSearchNumber = ({ target }) => {
    setSearchNumber(target.value);
  };
  const filterCallsLogMonth = searchNumber
    ? calls.filter((numb) => numb.numberOne.indexOf(searchNumber) !== -1)
    : selectedMonths
    ? calls.filter((call) => call.month === selectedMonths)
    : calls;
  const count = filterCallsLogMonth?.length;
  const handleSort = (item) => {
    setSortBy(item);
  };
  const sortCallsLog = _.orderBy(
    filterCallsLogMonth,
    [sortBy.iter],
    [sortBy.order]
  );
  const callsCrop = paginate(sortCallsLog, currentPage, pageSize);

  return (
    <>
      <input
        type="text"
        name="search"
        placeholder="Поиск по номеру телефона..."
        onChange={handleSearchNumber}
        value={searchNumber}
      />
      <table className="table">
        <TableHeader onSort={handleSort} currentSort={sortBy} />
        <TableBody calls={callsCrop} users={users} />
      </table>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Table;

{
  /* <div className="d-flex justify-content-center">

</div> */
}
