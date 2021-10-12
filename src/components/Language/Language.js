import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import image from '../../images/image.jpg'
import Course from '../Course/Course';
import './Language.css';

const Language = () => {
    const [courses,setCourses]=useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => {
               setCourses(data);
            });
    }, []);
    return (
        <div>        
        <Row>
            <Col xs={12}>
                <div>
                <img src={image} alt="" fluid />
                </div>
            </Col>
        </Row> 
        <h1  className="m-5 p-5  hader-text" >Choose Your Favourite Language</h1>
        <div>
        <Row xs={1} md={3} className="g-4">
               {
                courses.map(course => <Course 
                    key={course.id}
                    course={course}
                   ></Course>)
               }
            </Row>
        </div>        
            
        </div>
    );
};

export default Language;