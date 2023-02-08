const TableHeader = () => {
  return (
    <>
      <thead className="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Дата/время</th>
          <th scope="col">Направление</th>
          <th scope="col">Номер (кто)</th>
          <th scope="col">Контакт (кто)</th>
          <th scope="col">Номер (кому)</th>
          <th scope="col">Контакт (кому)</th>
          <th scope="col">Длительность разговора</th>
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
