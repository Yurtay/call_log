import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ callsCrop, users, onSort, currentSort }) => {
  return (
    <>
      <table className="table">
        <TableHeader onSort={onSort} currentSort={currentSort} />
        <TableBody calls={callsCrop} users={users} />
      </table>
    </>
  );
};

export default Table;
