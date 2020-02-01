import React from 'react';
import { Jumbotron, Button, Row, Container, Image, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import FormModal from '../Utils/Modal';
import FAQ from './FAQ';
import Benefits from './Benefits';

const Home = () => {

    AOS.init();

    return (
        <React.Fragment>
            <Container data-aos="fade-up">
                <Row className="d-flex justify-content-between">
                    <h4 className="ml-3 my-3 py-3 text-primary">InstaDapp</h4>;
                    <FormModal />;
                    <Link to='/dashboard'><Button className="d-flex justify-content-end mr-3 my-3 py-3">Dashboard</Button></Link>
                </Row>
            </Container>
            <Jumbotron className="text-center">
                <h1>Trustless <span className="text-primary">Smart Wallet</span> for DeFi.</h1>
                <h4 className="text-secondary font-weight-light ">
                    Seamlessly manage, optimize and deploy your assets to get the best returns across protocols.
  </h4>

                <Link to="/dashboard"><Button variant="primary mr-3">Dashboard <FontAwesomeIcon icon={faChevronRight} /></Button></Link>
                <Button variant="secondary">Newsletter</Button>
            </Jumbotron>


            <Jumbotron className="text-center">
                <small className="text-uppercase text-primary">COMPLETE CONTROL</small>
                <h2>Manage and Track Your DeFi Stack.</h2>
                <p className="text-secondary font-weight-light ">
                    Keep track and manage your blockchain based assets and analyze your financial position anywhere in the world in a complete non-custodial manner.
  </p>
                <div className="aos-init aos-animate" data-aos="fade-up" >
                    <Image className="device-screen" src="https://instadapp.io/img/instadash.png" fluid />
                    <Image src="https://instadapp.io/img/devices/macbook.svg" fluid />
                </div>


            </Jumbotron>

<Benefits />

            <FAQ />

        </React.Fragment>
    )
}

export default Home;