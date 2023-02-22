import React from "react";
import months from "../../api/fake.api/months";

const GroupList = ({ onItemSelect, selectedItem, onClearFilter }) => {
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
        <li>
          <button className="btn btn-primary" onClick={onClearFilter}>
            Сбросить фильтр
          </button>
        </li>
      </ul>
    </>
  );
};

export default GroupList;
