import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

/**
 * TODO: Utkommenter følgende når du konfigurert client.js slik at den snakker
 * med ditt Sanity-prosjekt:
 */
// import client from "./client";

// Dette brukes for oppgave 2 bonus:
// import imageUrlBuilder from "@sanity/image-url";
// const builder = imageUrlBuilder(client);
// function urlFor(source) {
//   return builder.image(source);
// }

/**
 * Dette er spørringen som brukes til å hente data fra Sanity.
 *
 * title, text, imageUrl og image er felter i "ventPage"-skjemaet
 */
const query = `*[_type == "ventPage"][0] {
  <felter i skjema>      
}`;

function App() {
  // TODO: Bruk dette for oppgave 1:
  // const [text, setText] = useState("");

  // TODO: Bruk dette for oppgave 2:
  // const [imageUrl, setImageUrl] = useState("");

  // TODO: Bruk dette for oppgave 2 bonus:
  // const [allImageData, setAllImageData] = useState(null);

  // TODO: Bruk dette for oppgave 3:
  // const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    // TODO: Utkommenter følgende når du har importert en klient:
    // client
    //   .fetch(query)
    //   .then((data) => {
    //     // For oppgave 1, gitt at feltet du har laget heter "text":
    //     // setText(data.text);
    //     //
    //     /**
    //      *  For oppgave 2, gitt at feltet du henter ut følgende med GROQ-spørringen:
    //      *  "imageUrl": image.asset->url,
    //      * */
    //     //setImageUrl(data.imageUrl)
    //     //
    //     // For oppgave 2 bonus, gitt at feltet du har laget for bildet heter "image":
    //     // setAllImageData(data.image)
    //     //
    //     // For oppgave 3, gitt at feltet du har laget for listen over innlegg heter "posts":
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
          {/* TODO: utkommenter dette for oppgave 1
          <p>
            {
              // TODO: legg til teksten fra Sanity her
            }
          </p> 
          */}

          {/* TODO: utkommenter dette for oppgave 2
          <div className="imageContainer">
            <strong>Med vanlig url (kjedelig):</strong>
            <img
              src={"// TODO: legg inn URLen til bildet her"}
              className="image"
            />
          </div> 
          */}

          {/* TODO: utkommenter dette for oppgave 2 bonus
          {imageRef && (
            <div className="imageContainer">
              <strong>Med url-builder (gøy):</strong>
              <img
                src={
                  "// TODO: legg inn URLen til bildet her ved hjelp av url-builder"
                }
                className="image"
              />
              <p className="imageCaption">
                {
                  // TODO: legge inn en eventuell caption her
                }
              </p>
            </div>
          )} 
          */}

          {/* TODO: utkommenter dette for oppgave 3
          {allPosts &&
            allPosts.map((post, idx) => (
              <div key={idx} className="post">
                <span className="author">{"Anon:"}</span>
                <div style={{ padding: "0 8px" }}>
                  <p className="text">
                    {
                      // TODO: legg inn teksten til innlegget her
                    }
                  </p>
                  <div className="imageContainer">
                    <img
                      src={
                        "// TODO: legg inn URLen til bildet til innlegget her"
                      }
                      className="image"
                    />
                    <p className="imageCaption">
                      {
                        // TODO: legge inn en eventuell caption her
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
