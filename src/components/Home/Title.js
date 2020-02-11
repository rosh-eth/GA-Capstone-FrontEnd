import React from 'react';
import { Jumbotron, Button, Row, Container, Image, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './HomeStyle.css';

const Title = () => {

    return (
        <div>
            <Jumbotron className="text-center my-5 py-5"  style={{ background: '#F9FBFD' }}>
                <h1>Trustless <span className="text-primary">Smart Wallet</span> for DeFi.</h1>
                <h4 className="text-secondary font-weight-light py-3">
                    Seamlessly manage, optimize and deploy your assets to get the best returns across protocols.
                </h4>

                <Link to="/dashboard"><Button variant="primary mr-3 ">Dashboard <FontAwesomeIcon icon={faChevronRight} /></Button></Link>
                <Button variant="secondary">Newsletter</Button>
            </Jumbotron>
        </div>
    )

}

export default Title