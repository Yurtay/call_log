import React, { useState } from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ callsCrop, users }) => {
  return (
    <>
      <table className="table">
        <TableHeader />
        <TableBody calls={callsCrop} users={users} />
      </table>
    </>
  );
};

export default Table;
