import React from 'react';
import { Jumbotron, Button, Row, Container, Image, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './HomeStyle.css';

const Screen = () => {

    return (
        <div>
            <Jumbotron className="text-center"  style={{ background: '#F9FBFD'}}>
                <small className="text-uppercase text-primary my-3">COMPLETE CONTROL</small>
                <h2 className="my-3">Manage and Track Your DeFi Stack.</h2>
                <Row className="justify-content-md-center">
                <Col xs="8" sm="8" md="8" lg="8" xl="8"> 
                <h5 className="text-muted font-weight-light mb-5">
                    Keep track and manage your blockchain based assets and analyze your financial position anywhere in the world in a complete non-custodial manner.
                  </h5>
                  </Col>
                  </Row>
                <div className="aos-init aos-animate" data-aos="fade-up" >
                    <Image className="device-screen my-4" src="https://instadapp.io/img/instadash.png" style={{width: '50rem'}}/>
                    {/* <Image src="https://instadapp.io/img/devices/macbook.svg" fluid /> */}
                </div>


            </Jumbotron>
        </div>
    )

}

export default Screen