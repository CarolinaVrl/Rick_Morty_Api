import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ResidentInfo from "./Components/ResidentInfo";
import Banner from "./Components/Banner";

function App() {
  const [id, setId] = useState(Math.round(Math.random() * 126));
  const [value, setValue] = useState("");
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res) => setLocation(res.data));
  }, [id]);
  console.log(location);
  return (
    <div >
      <Banner />
      <main className="App">
        <section className="details_location">
          <div>
            <h2>Nombre:</h2>
            <p>{location.name}</p>
          </div>
          <div>
            <h2>Tipo:</h2>
            <p>{location.type}</p>
          </div>
          <div>
            <h2>Dimensión:</h2>
            <p>{location.dimension}</p>
          </div>
          <div>
            <h2>Población:</h2>
            <p>{location.residents?.length}</p>
          </div>
        </section>
        <section className="search">
          <input
            type="text"
            placeholder="Dimensiones del 1 - 126"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => setId(value)} type="button">
            Buscar
          </button>
        </section>
        <section className="container_card">
          {location.residents?.map((resident) => (
            <div key={resident}>
              <ResidentInfo url={resident} />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
