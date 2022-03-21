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
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [imageRef, setImageRef] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    client
      .fetch(
        `*[_type == "ventPage"][0] {
          title,
          text,
          "imageUrl": image.asset->url,
          image          
        }`
      )
      .then((data) => {
        setTitle(data.title);
        setText(data.text);
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
          <p>{text}</p>
          <div className="imageContainer">
            <strong>Med vanlig url (kjedelig):</strong>
            <img src={imageUrl} className="image" />
          </div>
          {imageRef && (
            <div className="imageContainer">
              <strong>Med url-builder (gøy):</strong>
              <img src={urlFor(imageRef).url()} className="image" />
              <p className="imageCaption">{`Caption: ${imageRef.caption}`}</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
