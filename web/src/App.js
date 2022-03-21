import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import client from "./client";

/**
 * _type == "<name-of-page-schema>"
 */

const query = `*[_type == ""][0] {
  <fields>  
}`;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // TODO: uncomment to fetch data from Sanity
    // client
    //   .fetch(query)
    //   .then((data) => {
    //     // TODO: do somthing with the data
    //     setData(data);
    //   })
    //   .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Header />
      <section className="main-section">
        <h2 className="title">{"Ventilasjon"}</h2>
        <div className="content">
          {"//TODO: add content from Sanity CMS here (or somewhere else)"}
          <br />
          <br />
          {
            "Note: feel free to make any desired changes to the design, e.g., removing the dashed border"
          }
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
