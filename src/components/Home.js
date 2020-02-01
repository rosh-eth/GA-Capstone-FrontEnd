import React from 'react';
import { Jumbotron, Button, Row, Container, Image, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import AOS from 'aos';

const Home = () => {

    AOS.init();

    return (
        <React.Fragment>
            <Container data-aos="fade-up">
                <Row className="d-flex justify-content-between">
                    <h4 className="ml-3 my-3 py-3 text-primary">InstaDapp</h4>
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

<h3 className="text-center py-5">InstaDApp makes it much <span className="text-primary">simpler</span> to...</h3>

            <Row className="mb-4 text-center">
                <Col xs="4" sm="4" md="4" lg="3" xl="3">
                    <Image src="https://instadapp.io/img/illustrations/lend.svg" fluid />
                </Col>
                <Col xs="8" sm="8" md="6" lg="3" xl="3">
                    <h3>
                        Lend & Earn
                    </h3>
                    <p>
                        Deposit cryptos to continuously earn variable algorithmic interest over time.
                    </p>
                </Col>


                <Col xs="4" sm="4" md="4" lg="3" xl="3">
                    <Image src="https://instadapp.io/img/illustrations/leverage.svg" fluid />
                </Col>
                <Col xs="8" sm="8" md="6" lg="3" xl="3">
                    <h3>
                        Perform Complex Actions
                    </h3>
                    <p>
                        Easily perform complex actions like leverage, shorting or debt switching.
                    </p>
                </Col>



                <Col xs="4" sm="4" md="4" lg="3" xl="3">
                    <Image src="https://instadapp.io/img/illustrations/borrow.svg" fluid />
                </Col>
                <Col xs="8" sm="8" md="6" lg="3" xl="3">
                    <h3>
                        Optimize Holdings
                    </h3>
                    <p>
                        Seamlessly optimize and manage your holdings across different protocols.
                    </p>
                </Col>



                <Col xs="4" sm="4" md="4" lg="3" xl="3">
                    <Image src="https://instadapp.io/img/illustrations/swap.svg" fluid />
                </Col>
                <Col xs="8" sm="8" md="6" lg="3" xl="3">
                    <h3>
                        Switch Position
                    </h3>
                    <p>
                        Switch positions between protocols to take advantage of rates, liquidations and more.
                    </p>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default Home;