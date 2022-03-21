import { useState, useEffect } from "react";
import client from "./client";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

function App() {
  const [title, setTitle] = useState(null);
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "ventPageAdvanced"][0] {
          title,
          posts,      
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
                <div style={{ padding: "0 8px" }}>
                  <p className="text">{post.text}</p>
                  <div className="imageContainer">
                    <img src={urlFor(post.image).url()} className="image" />
                    <p className="imageCaption">{`Caption: ${post.image.caption}`}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
