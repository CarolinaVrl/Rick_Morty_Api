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
      <hr />
      <section>
        <div>
          <p>Raza</p>
          <p>{resident.species}</p>
        </div>
        <div>
          <p>Origen</p>
          <p>{resident.origin?.name}</p>
        </div>
        <div>
          <p>Aparición en episodios</p>
          <p>{resident.episode?.length}</p>
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
