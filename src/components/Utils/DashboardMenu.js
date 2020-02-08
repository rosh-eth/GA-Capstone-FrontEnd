import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom, faChevronRight, faHome, faDollarSign, faCompass, faEject, faMailBulk } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {

    return (
        <div>
            <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <h3><Link to='/'>InstaDapp</Link></h3>
                    <hr />
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/dashboard'><FontAwesomeIcon icon={faHome} className="mr-3"/>Dashboard</Link></p>
                    <hr />
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'><FontAwesomeIcon icon={faRandom} className="mr-3" />MCD Migration</Link></p>
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/lendandearn'><FontAwesomeIcon icon={faDollarSign} className="mr-3" />Lend & Earn</Link></p>
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'><FontAwesomeIcon icon={faCompass} className="mr-3" />Protocol Bridge</Link></p>
                    <hr />
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'><Image src="https://instadapp.io/img/icons/protocols/makerdao.png"  className="mr-3" width="20px"/>Maker MCD</Link></p>
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'><Image src="https://instadapp.io/img/icons/protocols/makerdao.png" className="mr-3" width="20px"/>Maker SCD</Link></p>
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'><Image src="https://instadapp.io/img/icons/protocols/compound.svg" className="mr-3" width="20px"/>Compound</Link></p>
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'><Image src="https://instadapp.io/img/icons/protocols/uniswap.png" className="mr-3" width="20px"/>UniSwap Pools</Link></p>
                    <hr />
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'><FontAwesomeIcon icon={faEject}  className="mr-3"/>Exit</Link></p>
                    <hr />
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'><FontAwesomeIcon icon={['fab', 'twitter']}  className="mr-3"/>Twitter</Link></p>
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'><FontAwesomeIcon icon={['fab', 'telegram']}  className="mr-3"/>Telegram</Link></p>
                </Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p><Link to='/'><FontAwesomeIcon icon={faMailBulk} className="mr-3" />Email</Link></p>
                </Col>
            </Row>

        </div>
    )

};

export default Menu;