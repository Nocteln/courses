// https://uiverse.io/andrew-demchenk0/rotten-catfish-34

import { useState } from "react";
import "./App.css";

const listeDeCourses = [
  { nom: "Pain", check: false, quantity: 1 },
  { nom: "Lait", check: true, quantity: 1 },
  { nom: "Œufs", check: false, quantity: 1 },
  { nom: "Beurre", check: true, quantity: 1 },
  { nom: "Fromage", check: false, quantity: 1 },
  { nom: "Pommes", check: false, quantity: 1 },
  { nom: "Bananes", check: true, quantity: 1 },
  { nom: "Poulet", check: false, quantity: 1 },
  { nom: "Riz", check: false, quantity: 1 },
  { nom: "Pâtes", check: true, quantity: 1 },
  { nom: "Légumes", check: false, quantity: 1 },
  { nom: "Céréales", check: false, quantity: 1 },
];

export default function App() {
  // const [check, setCheck] = useState();
  const [items, setItems] = useState(listeDeCourses);

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.nom === id ? { ...item, check: !item.check } : item
      )
    );
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.nom !== id));
  }

  // function handleAddItem(item) {
  //   setItems((items) => [...items, item]);
  // }

  function handleAddItem(item) {
    const existingItemIndex = items.findIndex((art) => art.nom === item.nom);

    if (existingItemIndex !== -1) {
      // Si l'article existe, incrémente la quantité
      const updatedItems = [...items];
      items[existingItemIndex].quantity += Number(item.quantity);
      console.log(item);
      setItems(updatedItems);
    } else {
      // Si l'article n'existe pas, ajoute-le à la liste
      setItems((prevItems) => [...prevItems, item]);
    }
  }

  return (
    <div className="App">
      <NavBar />
      <h3>Ajouter un article</h3>
      <Form onAddItem={handleAddItem} />
      <ListNone
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDelete}
      />
      <div className="barreSeparation"></div>
      <Complete
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDelete}
      />
      <Footer items={items} />
    </div>
  );
}

function NavBar() {
  //Faites vos courses avec ❤️
  return (
    <nav>
      <h1>cc</h1>
    </nav>
  );
}
function Footer({ items }) {
  let checked = 0;
  items.filter((item) => (item.check === true ? checked++ : ""));
  const percent = Math.floor((checked / items.length) * 100);
  console.log(percent);
  return (
    <footer>
      <h1>
        Vous avez fait {percent}% pourcent de vos courses ({checked}/
        {items.length})
      </h1>
    </footer>
  );
}

function Form({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [itemNumber, setItemNumber] = useState(1);
  let newItem = {};

  function handleSubmit(e) {
    e.preventDefault();

    if (!itemName) return;
    newItem.nom = itemName;
    newItem.quantity = itemNumber ? itemNumber : 1;
    newItem.check = false;

    onAddItem(newItem);

    setItemName("");
    setItemNumber("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <select
        value={itemNumber}
        onChange={(e) => setItemNumber(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
    </form>
  );
}

function ListNone({ items, onToggleItem, onDeleteItem }) {
  return (
    <div className="listNone">
      <ul>
        {items.map((item) =>
          item.check === false ? (
            <Item
              item={item}
              onToggleItem={onToggleItem}
              key={item.nom}
              onDeleteItem={onDeleteItem}
            />
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
}

function Complete({ items, onToggleItem, onDeleteItem }) {
  return (
    <div className="listNone">
      <ul>
        {items.map((item) =>
          item.check === true ? (
            <Item
              item={item}
              onToggleItem={onToggleItem}
              key={item.nom}
              onDeleteItem={onDeleteItem}
            />
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
}

function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <li className="item">
      <input
        checked={item.check}
        type="checkbox"
        onChange={() => onToggleItem(item.nom)}
      />
      <h3 className={item.check ? "checked" : ""}>
        {item.nom} x{item.quantity}
      </h3>

      <button onClick={() => onDeleteItem(item.nom)}>❌</button>
    </li>
  );
}
