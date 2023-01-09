import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({resident}) => {
    const [person, setPerson]=useState({})
    useEffect(()=>{
        axios.get(`${resident}`)
        .then(res => setPerson(res.data))
    },[])
    return (
        <div className='Resident_Info'>
            <div>
             <img src={person.image} alt="" />
             <h1>{`${person.name}`}</h1>
             <hr />
            
             <h3>{`Status ${person.status}`}</h3>
             <h3>{`Raza ${person.species}`}</h3>
             <h3>{`Origen ${person.origin?.name}`}</h3>
             <h3>{`Apariciones ${person.episode?.length}`}</h3>
            </div>
            
           

            
        </div>
    );
};

export default ResidentInfo;