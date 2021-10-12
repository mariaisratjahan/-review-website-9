import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    const {courseName,image,price}=props.course;
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

export default Course;