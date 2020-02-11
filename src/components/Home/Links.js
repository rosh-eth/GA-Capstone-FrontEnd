import React from 'react';
import { Button, Row, Container, Image, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginModal from '../Utils/LoginModal';

const Links = () => {

    return (
        <div>
            <Container data-aos="fade-up">
                <Row className="d-flex justify-content-between">
                    <h4 className="ml-3 my-3 text-primary">InstaDapp</h4>
                    <LoginModal />
                    <Link to='/dashboard'><Button className="d-flex justify-content-end mr-3 my-3 ">Dashboard</Button></Link>
                </Row>
            </Container>
        </div>
    )

}

export default Links