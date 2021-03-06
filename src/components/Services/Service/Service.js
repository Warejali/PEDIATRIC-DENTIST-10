import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, description, img, id } = service;
    const navigate = useNavigate()
    const goToCheckOut = (id) => {
        navigate(`/checkout/${id}`);
        console.log('clicked');
    }
    return (
        <div className="col p-3">
            <div className="card h-100">
                <img src={img} className="card-img-top p-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                 
                        <p className="alert-primary fw-bold text-center w-100 py-2">Price: {price}$</p>
                  
                    <p onClick={() => goToCheckOut(id)} className="appointment alert-info text-center w-100 py-2 fw-bold">APPOINTMENT</p>
                </div>
            </div>
        </div>
    );
};

export default Service;