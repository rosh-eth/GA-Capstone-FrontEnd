import React from 'react';
import Menu from './Menu';
import { Row, Col } from 'react-bootstrap';
import Title from './Title';
import MakerVault from './MakerVault';
import CompoundPosition from './CompoundPosition';
import MakerCDP from './MakerCDP';
import Balance from './Balance';

const Dashboard = () => {
 
    return(
        <React.Fragment>
            <Row>
                <Col xs="2" sm="2" md="4" lg="3" xl="3">
                    <Menu />
                </Col>
                <Col xs="10" sm="10" md="8" lg="9" xl="9">
                    <Title />
                    <Balance />
                    <MakerVault />
                    <CompoundPosition />
                    <MakerCDP />
                </Col>
            </Row>

            
        </React.Fragment>
 )

}

export default Dashboard;