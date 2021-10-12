import React from 'react';
import { ButtonGroup, Button, Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {courseName,image,price}=props.service;
    console.log(courseName);
    return (
        <div>
            <Col className="card-container">
                <Card className="cards">
                    <Card.Img variant="top" src={image} width="" height="400"/>
                    <Card.Body>
                    <Card.Title>
                        <h3>{courseName}</h3>
                    </Card.Title>
                     <Card.Text>
                       <h3>{price}</h3>
                    </Card.Text>
                    <Button className="px-5 py-3 btn-text">Enroll Now</Button>
                    </Card.Body>
                </Card>
                </Col>
        </div>
    );
};

export default Service;