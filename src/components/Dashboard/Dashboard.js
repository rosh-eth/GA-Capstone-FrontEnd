import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Title from './Title';
import MakerVault from './MakerVault';
import CompoundPosition from './CompoundPosition';
import Balance from './Balance';
import DashboardMenu from '../Utils/DashboardMenu';
import Assets from './Assets'


const style = {
    background: '#f9fbfd'
  };

const Dashboard = () => {
 
    return(
        <React.Fragment>
            <Container>
            <Row>
                <Col xs="2" sm="2" md="4" lg="3" xl="3"  className="border-right">
                    <DashboardMenu />
                </Col>
                <Col xs="10" sm="10" md="8" lg="9" xl="9"  style={style}>
                    <Title />
                    <Assets />
                    <Balance />
                    <MakerVault />
                    <CompoundPosition />
                </Col>
            </Row>

            </Container>
        </React.Fragment>
 )

}

export default Dashboard;