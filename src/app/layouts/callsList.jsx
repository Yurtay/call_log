import React, { useEffect, useState } from "react";
import GroupList from "../components/ui/listGroupDate";
import Table from "../components/ui/table/table";
import UserProvider from "../hooks/useUser";
import CallProvider from "../hooks/useCall";

const CallsList = () => {
  const [selectedMonths, setSelectedMonths] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedMonths]);

  const handleMonthsSelect = (item) => {
    setSelectedMonths(item);
  };
  const handleClearFilter = () => {
    setSelectedMonths();
    setCurrentPage(1);
  };
  const hadlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <>
      <UserProvider>
        <CallProvider>
          <div className="d-flex">
            <div className="d-flex flex-column flex-shrink-0 p-3">
              <GroupList
                onItemSelect={handleMonthsSelect}
                selectedItem={selectedMonths}
                onClearFilter={handleClearFilter}
              />
            </div>
            <div className="d-flex flex-column p-3">
              <Table
                selectedMonths={selectedMonths}
                currentPage={currentPage}
                onPageChange={hadlePageChange}
              />
            </div>
          </div>
        </CallProvider>
      </UserProvider>
    </>
  );
};

export default CallsList;
