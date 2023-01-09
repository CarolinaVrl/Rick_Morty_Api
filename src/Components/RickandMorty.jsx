import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';
import Banner from './Banner';
const RickandMorty = () => {
    const randomLocation = Math.floor(Math.random() * 126)+1
    const [infoLocation, setInfoLocation] = useState({})
    const [id, SetId] = useState(randomLocation)
    const [text, setText] = useState("")
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res=> setInfoLocation(res.data))},[id]
        )
    return (
        <div className='rickandMorty'>
                      
            <h1>{infoLocation.name}</h1>
            <div className='InfoLocation'>
             <h2>  {`Type: ${infoLocation.type}`} </h2>
             <h2>  {`Dimension ${infoLocation.dimension}`} </h2>
             <h2>  {`Population: ${infoLocation.residents?.length}`} </h2>
            </div>
            <input type="text" placeholder='Escribe en Nombre la de Ubicación' value={text} onChange={e=>setText(e.target.value)} />
            <button onClick={()=>{SetId(text)}}>Search</button>
            {infoLocation.residents?.map(resident=>(
                <ResidentInfo resident={resident} key={resident} />
            ))}
            
        </div>
    );
};

export default RickandMorty;