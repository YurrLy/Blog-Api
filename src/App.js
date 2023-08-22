import Logo from "./img/OWNERLESS.png"

function App() {
  return (
    <header>
      <nav className="flex">
        <img className="w-60" src={Logo} alt="Logo" />
      <div>
        <a href="">SOBRE</a>
        <a href="">CONTATOS</a>
        <a href="">NOTICIAS</a>
      </div>
    </nav>
    </header>
    
  );
}

export default App;
