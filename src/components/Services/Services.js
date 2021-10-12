import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services,setSetservices]=useState([]);
    useEffect(()=>{
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setSetservices(data))
    },[])
    return (
        <div>
            <h1 className="p-5 ">Our services</h1>
            <Row xs={1} md={3} className="g-4">
               {
                services.map(service => <Service
                 key={service.key}
                 service={service}
                ></Service>)
               }
            </Row>
        </div>
    );
};

export default Services;