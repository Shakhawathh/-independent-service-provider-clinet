import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;

  const navigate = useNavigate()
  const navigateToCheakOut = id =>{
    navigate(`/service/${id}`);
   
  }

  return (
   <div className=" gx-5 col-sm-12 col-md-6 col-lg-4 mt-5">
        <div class=" card " style={{ width: "18rem" }}>
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text fst-normal">{description}</p>
        <p className="fw-normal bold">price:{price}</p>
        <button onClick={() =>navigateToCheakOut(id)} type="button" class="btn btn-success fw-bolder">Book:{name}</button>
      </div>
    </div>
   </div>
  );
};

export default Service;
