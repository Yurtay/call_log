import React, { useState } from "react";
import DateNow from "../../utils/dateNow";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import Pagination from "../pagination";
import { fetchCalls } from "../../../app/api/callsLog";
import { fetchUsers } from "../../../app/api/users";
import { paginate } from "../../utils/paginate";

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const calls = fetchCalls();
  const users = fetchUsers();
  const count = calls.length;
  const pageSize = 8;

  const callsCrop = paginate(calls, currentPage, pageSize);
  console.log(callsCrop);

  const hadlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    console.log("currentPage: ", currentPage);
  };

  return (
    <>
      <table className="table">
        <TableHeader />
        <TableBody calls={callsCrop} users={users} />
      </table>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={hadlePageChange}
      />
      <DateNow />
    </>
  );
};

export default Table;
