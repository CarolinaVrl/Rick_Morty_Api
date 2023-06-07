import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({ url }) => {
  const [resident, setResident] = useState({});
  useEffect(() => {
    axios.get(`${url}`).then((res) => setResident(res.data));
  }, []);

  return (
    <div className="resident">
      <img src={resident.image} alt="" />
      <h2>{resident.name}</h2>
      <hr />
      <section className="container_info">
        <div>
          <p className="title">Raza</p>
          <p className="info">{resident.species}</p>
        </div>
        <div>
          <p className="title">Origen</p>
          <p className="info">{resident.origin?.name}</p>
        </div>
        <div>
          <p className="title">Aparición en episodios</p>
          <p className="info">{resident.episode?.length}</p>
        </div>
      </section>

      <div className="status">
        <div className={`circle`}></div>
        <p>{resident.status}</p>
      </div>
    </div>
  );
};

export default ResidentInfo;
