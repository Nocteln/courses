// https://uiverse.io/andrew-demchenk0/rotten-catfish-34

import "./App.css";

export default function App() {
  return (
    <>
      <NavBar />
      <Form />
      <ListNone />
    </>
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
      <label for="input">Ajouter un article</label>
      <input type="text" id="input" />
    </form>
  );
}

function ListNone() {
  const listeDeCourses = [
    { nom: "Pain", check: false },
    { nom: "Lait", check: true },
    { nom: "Œufs", check: false },
    { nom: "Beurre", check: true },
    { nom: "Fromage", check: false },
    { nom: "Pommes", check: false },
    { nom: "Bananes", check: true },
    { nom: "Poulet", check: false },
    { nom: "Riz", check: false },
    { nom: "Pâtes", check: true },
    { nom: "Légumes", check: false },
    { nom: "Céréales", check: false },
  ];

  return (
    <div>
      {listeDeCourses.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}

function Complete() {
  return <div></div>;
}

function Item({ item }) {
  return (
    <div className="item">
      <input checked="checked" type="checkbox" />
      <div class="checkmark"></div>
      <h3>{item.nom}</h3>
      <h3>❌</h3>
    </div>
  );
}
