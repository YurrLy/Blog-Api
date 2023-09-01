import { useState, useEffect } from "react";

function App() {
  const [blog, setBlog] = useState([{ title: "", content: "" }]); 

  useEffect(() => {
    fetch("https://api-rest-post-diegocandido.herokuapp.com/postagens")
      .then((res) => res.json())
      .then((json) => {
        setBlog(json)
        console.log(json);
      })
  }, []);

  return (
    <>
      <header>
        <nav className="flex justify-between my-5">
          <img className="ml-10 w-60" src={"img/OWNERLESS.png"} alt="Logo" />
          <div className="flex gap-20 mr-10 font-bold">
            <a className="text-2xl font-nav" href="">SOBRE</a>
            <a className="text-2xl font-nav" href="">CONTATOS</a>
            <a className="text-2xl font-nav" href="">NOTICIAS</a>
          </div>
        </nav>
      </header>
      <main>
        <div className="flex justify-center mb-24">
          <img className="px-10 " src={"img/fundo.png"} alt="" />
          <label className="absolute text-6xl text-white font-title font-black mt-40">Mini Blog</label>
          <label className="absolute text-4xl text-white font-title mt-72">Explorando ideias e inspirações em cada palavra.</label>
          <label className="absolute text-2xl text-white font-title mt-96">Confira noticas abaixo</label>
        </div>
      </main>

      <section className="">
      {blog.map((post, index) => (
        <div key={index} className="noticias flex bg-cyan-950	m-10 border-4 border-black">
          <img className="w-60" src={post.thumbImage} alt="" />
          <div className="m-10">
            <h1 className="text-justify font-title text-white text-xl font-bold">{post.title}</h1>
            <p className="text-justify font-title text-white text-xl mt-10">{post.description}</p>
          </div>
        </div>
      ))}
    </section>

    </>
  );
}

export default App;
