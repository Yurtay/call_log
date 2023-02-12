import React from "react";

const GroupList = ({ months, onItemSelect, selectedItem }) => {
  return (
    <>
      <ul className="list-group">
        {months.map((month) => (
          <li
            key={month.monthNumber}
            className={
              "list-group-item" +
              (month.monthNumber === selectedItem ? " active" : "")
            }
            onClick={() => onItemSelect(month.monthNumber)}
            role="button"
          >
            {month.monthName}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GroupList;
