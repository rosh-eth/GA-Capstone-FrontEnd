import React, {useContext} from 'react';
import { Card , Col, Row, CardColumns} from 'react-bootstrap';
import {calcAssets } from './Calculations/Calculations';
import {UserContext} from '../../App';

const Assets = () => {

    const userContext = useContext(UserContext); 

    return (
        <div>
            <Row>
            <CardColumns className="ml-3">
                    <Card border="success" style={{ width: '15rem' }} className="p-1">
                        <Card.Body>
                            <Card.Title>Assets</Card.Title>
                            <Card.Text>
                                <h2>${calcAssets(userContext.ethPrice, userContext.eth, userContext.daiPrice, userContext.dai, userContext.batPrice, userContext.bat)}</h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="primary" style={{ width: '15rem' }} className="p-1">
                        <Card.Body>
                            <Card.Title>Net Worth</Card.Title>
                            <Card.Text>
                                <h2>$2,000.00</h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="danger" style={{ width: '15rem' }} className="p-1">
                        <Card.Body>
                            <Card.Title>Debt</Card.Title>
                            <Card.Text>
                                <h2>$1,000.00</h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                
                </CardColumns>
            </Row>
        </div>
    )

};

export default Assets;