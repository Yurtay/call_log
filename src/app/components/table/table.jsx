import React, { useState, useEffect } from "react";
import DateNow from "../../utils/dateNow";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import Pagination from "../pagination";
import { paginate } from "../../utils/paginate";

const Table = ({ callsLog, users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const count = callsLog.length;
  const pageSize = 8;
  useEffect(() => {
    console.log("currentPage");
  }, [currentPage]);
  const callsCrop = paginate(callsLog, currentPage, pageSize);

  const hadlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
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
