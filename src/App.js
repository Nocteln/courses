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
    setItems((item) => items.filter(item.nom !== id));
  }

  return (
    <div className="App">
      <NavBar />
      <Form />
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
    </div>
  );
}

function NavBar() {
  return (
    <nav>
      <h1>Faites vos courses avec ❤️</h1>
    </nav>
  );
}

function Form() {
  return (
    <form>
      <label>Ajouter un article</label>
      <input type="text" />
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
      <h3>
        {item.nom} x{item.quantity}
      </h3>

      <button onClick={() => onDeleteItem(item.nom)}>❌</button>
    </li>
  );
}
