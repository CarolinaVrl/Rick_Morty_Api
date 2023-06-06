import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({ url }) => {
  const [resident, setResident] = useState({});
  useEffect(() => {
    axios.get(`${url}`)
    .then((res) => setResident(res.data));
  }, []);

  
  return <div>
    <img src="" alt="" />
    <section></section>
  </div>;
};

export default ResidentInfo;
