const TelephoneMenu = ({ onChangeFlag, selectedItem }) => {
  const nameMenu = ["Канчуринское УПХГ", "Башкирский УАВР", "Внешние абоненты"];
  return (
    <ul className="list-group">
      {nameMenu.map((name, index) => (
        <li
          key={index}
          className={
            "list-group-item" + (index + 1 === selectedItem ? " active" : "")
          }
          role="button"
          onClick={() => onChangeFlag(index + 1)}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default TelephoneMenu;
