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
  const [imageRef, setImageRef] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "ventPage"][0] {
          title,
          posts,
          "imageUrl": image.asset->url,
          image          
        }`
      )
      .then((data) => {
        setTitle(data.title);
        setAllPosts(data.posts);
        setImageUrl(data.imageUrl);
        setImageRef(data.image);
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
        <img src={imageUrl} className="image" />
        {/* <img src={urlFor(imageRef).width(350).url()} /> */}
      </section>
      <Footer />
    </div>
  );
}

export default App;
