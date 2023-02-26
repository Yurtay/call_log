import React from "react";

const DateNow = () => {
  const dateToday = String(new Date());

  return <h5>{dateToday}</h5>;
};

export default DateNow;
