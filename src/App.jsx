import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

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
      <h1>{id}</h1>
      
    </div>
  );
}

export default App;
