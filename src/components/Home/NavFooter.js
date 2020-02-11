import React from 'react';
import { Table, Button, Row, Container, Image, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const NavFooter = () => {

    return (
        <div data-aos="zoom-in">
            <Row className="justify-content-md-center">
              <Col  xs="6" sm="6" md="4" lg="4" xl="2" >
                <Link to='/' className="navbar-brand">InstaDApp</Link>
                <p className="text-muted">Your Smart Wallet for DeFi</p>
              </Col>
              <Col   xs="6" sm="6" md="4" lg="4" xl="3" >
              <h6 className=' text-uppercase '>Manage</h6>
              <ul className="list-unstyled ">
                  <li className="text-muted">Dashboard</li>
                  <li className="text-muted">MakerDAO</li>
                  <li className="text-muted">Compound</li>
                  <li className="text-muted">UniSwap</li>
                  <li className="text-muted">Bridge</li>
                </ul>
                </Col>
              <Col   xs="6" sm="6" md="4" lg="4" xl="3" >
              <h6 className=' text-uppercase '>Connect</h6>
              <ul className="list-unstyled ">
                  <li className="text-muted">Twitter</li>
                  <li className="text-muted">Telegram</li>
                  <li className="text-muted">Discord</li>
                  <li className="text-muted">Email</li>
                </ul>
              </Col>
              <Col xs="6" sm="6" md="4" lg="4" xl="3" >
              <h6 className=' text-uppercase '>Misc.</h6>
              <ul className="list-unstyled ">
                  <li className="text-muted">Medium</li>
                  <li className="text-muted">Newsletter</li>
                  <li className="text-muted">Github</li>
                  <li className="text-muted">Privacy</li>
                </ul>
              </Col>
            </Row>
        </div>
    )

}

export default NavFooter;