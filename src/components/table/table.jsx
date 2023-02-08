import React from "react";
import DateNow from "../dateNow";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = () => {
  return (
    <>
      <table className="table">
        <TableHeader />
        <TableBody />
      </table>
      <DateNow />
    </>
  );
};

export default Table;
