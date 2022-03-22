import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

/**
 * TODO_1: Utkommenter følgende når du konfigurert client.js slik at den snakker
 * med ditt Sanity-prosjekt:
 */
// import client from "./client";

// TODO_2_bonus: Dette brukes for oppgave 2 bonus:
// import imageUrlBuilder from "@sanity/image-url";
// const builder = imageUrlBuilder(client);
// function urlFor(source) {
//   return builder.image(source);
// }

/**
 * TODO_1: Dette er spørringen som brukes til å hente data fra Sanity.
 */
const query = `*[_type == "ventPage"][0] {
  <felter i skjema>      
}`;

function App() {
  // TODO_1: Bruk dette for oppgave 1:
  // const [text, setText] = useState("");

  // TODO_2: Bruk dette for oppgave 2:
  // const [imageUrl, setImageUrl] = useState("");

  // TODO_2_bonus: Bruk dette for oppgave 2 bonus:
  // const [allImageData, setAllImageData] = useState(null);

  // TODO_3: Bruk dette for oppgave 3:
  // const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    // TODO_1: Utkommenter følgende når du har importert en klient:
    // client
    //   .fetch(query)
    //   .then((data) => {
    //     // TODO_1: For oppgave 1, gitt at feltet du har laget heter "text":
    //     // setText(data.text);
    //     //
    //     /**
    //      *  TODO_2: For oppgave 2, gitt at feltet du henter ut følgende med GROQ-spørringen:
    //      *  "imageUrl": image.asset->url,
    //      * */
    //     //setImageUrl(data.imageUrl)
    //     //
    //     // TODO_2: For oppgave 2 bonus, gitt at feltet du har laget for bildet heter "image":
    //     // setAllImageData(data.image)
    //     //
    //     // TODO_3: For oppgave 3, gitt at feltet du har laget for listen over innlegg heter "posts":
    //     // setAllPosts(data.posts);
    //   })
    //   .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Header />
      <section className="main-section">
        <h2 className="title">Ventilasjonskanal</h2>
        <div className="content">
          {/* TODO_1: utkommenter dette for oppgave 1
          <p>
            {
              // TODO_1: legg til teksten fra Sanity her
            }
          </p> 
          */}

          {/* TODO_2: utkommenter dette for oppgave 2
          <div className="imageContainer">
            <strong>Med vanlig url (kjedelig):</strong>
            <img
              src={"// TODO_2: legg inn URLen til bildet her"}
              className="image"
            />
          </div> 
          */}

          {/* TODO_2_bonus: utkommenter dette for oppgave 2 bonus
          {allImageData && (
            <div className="imageContainer">
              <strong>Med url-builder (gøy):</strong>
              <img
                src={
                  "// TODO_2_bonus: legg inn URLen til bildet her ved hjelp av url-builder"
                }
                className="image"
              />
              <p className="imageCaption">
                {
                  // TODO_2_bonus: legge inn en eventuell caption her
                }
              </p>
            </div>
          )} 
          */}

          {/* TODO_3: utkommenter dette for oppgave 3
          {allPosts &&
            allPosts.map((post, idx) => (
              <div key={idx} className="post">
                <span className="author">{"Anon:"}</span>
                <div style={{ padding: "0 8px" }}>
                  <p className="text">
                    {
                      // TODO_3: legg inn teksten til innlegget her
                    }
                  </p>
                  <div className="imageContainer">
                    <img
                      src={
                        "// TODO_3: legg inn URLen til bildet til innlegget her"
                      }
                      className="image"
                    />
                    <p className="imageCaption">
                      {
                        // TODO_3: legge inn en eventuell caption her
                      }
                    </p>
                  </div>
                </div>
              </div>
            ))} 
            */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
