import { useState, useEffect } from "react";
import client from "./client";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [title, setTitle] = useState("");
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "ventPage"][0] {
          title,
          posts
        }`
      )
      .then((data) => {
        setTitle(data.title);
        setAllPosts(data.posts);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Header />
      <section className="main-section">
        <h2 className="title">{title}</h2>
        <div className="content">
          {allPosts &&
            allPosts.map((post, idx) => (
              <div key={idx} className="post">
                <span className="author">{"Anon:"}</span>
                <p className="text">{post}</p>
              </div>
            ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
