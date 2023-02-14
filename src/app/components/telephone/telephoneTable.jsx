const TelephoneTable = ({ telephone }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Телефон</th>
          <th scope="col">Абонент</th>
        </tr>
      </thead>
      <tbody>
        {telephone.map((tel, index) => (
          <tr key={index}>
            <td>{tel.id}</td>
            <td>{tel.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TelephoneTable;
