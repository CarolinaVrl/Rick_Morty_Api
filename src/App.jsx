import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ResidentInfo from "./Components/ResidentInfo";

function App() {
  const id = Math.round(Math.random() * 126);
  const [location, setLocation] = useState([]);
  
  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/location/${id}`)
    .then(res => setLocation(res.data))
  },[])
  console.log(location);
  return (
    <div className="App">
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
        <input type="text"  />
        <button >Buscar</button>
      </section>
      <section className="resident">
        {
          location.residents?.map(resident=>(
            <div key={resident}>
              <ResidentInfo  url={resident}/>
            </div>
          
          ))
        }
      </section>
      
    </div>
  );
}

export default App;
