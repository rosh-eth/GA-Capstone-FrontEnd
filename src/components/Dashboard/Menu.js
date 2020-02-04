import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {

    return (
        <div>
            <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <h3><Link to='/'>InstaDapp</Link></h3>
                    <hr />
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'>Dashboard</Link></p>
                    <hr />
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'>MCD Migration</Link></p>
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'>Lend & Earn</Link></p>
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'>Protocol Bridge</Link></p>
                    <hr />
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'>Maker MCD</Link></p>
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'>Maker SCD</Link></p>
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'>Compound</Link></p>
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'>UniSwap Pools</Link></p>
                    <hr />
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'>Exit</Link></p>
                    <hr />
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'>Twitter</Link></p>
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'>Telegram</Link></p>
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'>Email</Link></p>
                </Col>
            </Row>

        </div>
    )

};

export default Menu;