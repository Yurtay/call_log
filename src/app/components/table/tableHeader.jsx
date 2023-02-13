import React from "react";

const TableHeader = ({ onSort, currentSort }) => {
  const handleSort = (item) => {
    if (currentSort.iter === item) {
      onSort({
        ...currentSort,
        order: currentSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ iter: item, order: "asc" });
    }
  };

  return (
    <>
      <thead className="table-dark">
        <tr>
          <th scope="col">#</th>
          <th onClick={() => handleSort("date")} scope="col" role="button">
            Дата/время
          </th>
          <th scope="col">Направление</th>
          <th onClick={() => handleSort("numberOne")} scope="col" role="button">
            Номер (кто)
          </th>
          <th scope="col">Контакт (кто)</th>
          <th scope="col">Номер (кому)</th>
          <th scope="col">Контакт (кому)</th>
          <th onClick={() => handleSort("duration")} scope="col" role="button">
            Длительность разговора
          </th>
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
