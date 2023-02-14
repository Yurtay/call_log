const TelephoneMenu = () => {
  const nameMenu = ["Канчуринское УПХГ", "Башкирский УАВР", "Внешние абоненты"];
  return (
    <ul className="list-group">
      {nameMenu.map((name, index) => (
        <li key={index} className="list-group-item" role="button">
          {name}
        </li>
      ))}
    </ul>
  );
};

export default TelephoneMenu;
