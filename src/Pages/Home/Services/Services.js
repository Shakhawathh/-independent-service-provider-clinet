import React, { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('Fake.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
     

  return (
    <div className="container">
      <h2 className="text-center fw-bold mt-5 ">Services</h2>
      <div className="row ">
      {
          services.map(service => <Service
          key={service.id}
          service={service}
          >

          </Service>)
      }
      </div>
    </div>
  );
};

export default Services;
<h2>services</h2>;
