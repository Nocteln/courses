import "./App.css";

export default function App() {
  return (
    <>
      <NavBar />
      <Form />
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
  return <div></div>;
}

function Complete() {
  return <div></div>;
}
