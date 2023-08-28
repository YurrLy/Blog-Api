import Logo from "./img/OWNERLESS.png";
import fundo from "./img/fundo.png";
import { useState, useEffect } from "react";

function App() {
  const [blog, setBlog] = useState({ title: "", content: "" }); // Fornecer valores iniciais

  useEffect(() => {
    fetch("https://api-rest-post-diegocandido.herokuapp.com/postagem/1")
      .then((res) => res.json())
      .then((json) => {
        setBlog(json)
        console.log(json);
      })
  }, []);

  return (
    <>
    <header>
      <nav className="flex justify-between my-5 ">
        <img className="ml-10 w-60" src={Logo} alt="Logo" />
      <div className="flex gap-20 mr-10 font-bold ">
        <a className="text-2xl font-nav" href="">SOBRE</a>
        <a className="text-2xl font-nav" href="">CONTATOS</a>
        <a className="text-2xl font-nav" href="">NOTICIAS</a>
      </div>
    </nav>
    </header>
    <main>
      <div className="relative flex justify-center">
        <img className="px-10 absolute" src={fundo} alt="" />
        <label className="absolute text-6xl text-white font-title font-black mt-40" >Mini Blog</label>
        <label className="absolute text-4xl text-white font-title mt-72">Explorando ideias e inspirações em cada palavra.</label>
      </div>

      <section>
      <h1 className="relative text-white text-xl font-semibold mt-2">{blog.title}</h1>

      </section>

    </main>
  
    </>
    
  );
}

export default App;
