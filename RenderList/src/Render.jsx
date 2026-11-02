function List() {
  const fruits = [
    { id: 1, name: "apple", calo: 34 },
    { id: 2, name: "orange", calo: 44 },
    { id: 3, name: "promogrante", calo: 44 },
    { id: 4, name: "grapes", calo: 124 },
    { id: 5, name: "guva", calo: 24 },
  ];

  fruits.sort((a, b) => a.name.localeCompare(b.name));

  const listed_items = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} : <b>{fruit.calo}</b>
    </li>
  ));

  return <ol>{listed_items}</ol>;
}

export default List;
