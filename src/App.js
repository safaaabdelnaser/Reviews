import "./App.css";
import Reviews from "./Reviews";
function App() {
  return (
    <>
      <main>
        <section className="container">
          <div className="title">
            <h2>Reviews</h2>
            <div className="underline"></div>
          </div>
          <Reviews />
        </section>
      </main>
    </>
  );
}

export default App;
