import React from 'react';
import {Jumbotron, Button, Row, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faChevronRight} from '@fortawesome/free-solid-svg-icons'

const Home = () => {

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Button>InstaDapp</Button>
                    <Button className="float-right">Dashboard</Button>
                </Row>
            </Container>
            <Jumbotron className="text-center">
                <h1>Trustless <span className="text-primary">Smart Wallet</span> for DeFi.</h1>
                <p className="text-secondary">
                Seamlessly manage, optimize and deploy your assets to get the best returns across protocols.
  </p>
                <p>
                    <Button variant="primary">Dashboard <FontAwesomeIcon icon={faChevronRight} /></Button>
                    <Button variant="primary">Newsletter</Button>
                </p>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Home;