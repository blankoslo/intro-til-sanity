import { useState, useEffect } from "react";
import client from "./client";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    client
      .fetch(
        `*[_type == "ventPage"][0] {
          title,
          text
        }`
      )
      .then((data) => {
        setTitle(data.title);
        setText(data.text);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Header />
      <section className="main-section">
        <h2 className="title">{title}</h2>
        <div className="content">
          <p>{text}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
