import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import DashboardMenu from '../../Utils/DashboardMenu';
import AddDai from './AddDai';
import Title from './Title';
import AddEth from './AddEth';
import AddBat from './AddBat';


const style = {
    background: '#f9fbfd'
  };

const LendAndEarn = () => {
 
    return(
        <React.Fragment>
            <Container>
            <Row>
                <Col xs="2" sm="2" md="4" lg="3" xl="3"  className="border-right">
                    <DashboardMenu />
                </Col>
                <Col xs="10" sm="10" md="8" lg="9" xl="9"  style={style}>
                    <Title />
                    <AddEth />
                    <AddDai />
                    <AddBat />
                </Col>
            </Row>
            </Container>
            
        </React.Fragment>
 )

}

export default LendAndEarn;