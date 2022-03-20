import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
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
