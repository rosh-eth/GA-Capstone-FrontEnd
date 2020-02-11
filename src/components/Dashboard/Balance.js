import React, {useContext} from 'react';
import { Card , Col, Row, CardColumns, Image} from 'react-bootstrap';
import {UserContext} from '../../App';
import {calcBalance } from './Calculations/Calculations';

const Balance = () => {
    
    const userContext = useContext(UserContext);

    return (
        <div>
            <h4 className="text-center my-4">Balances</h4>
            <hr />
            <Row>
            <CardColumns className="ml-3">
                    <Card style={{ width: '15rem' }} className="p-1">
                        <Card.Body>
                            <Card.Text>
                                <Row>
                                    <Col>
                                <h6 className="text-muted">{userContext.eth}</h6>
                                <h5>${calcBalance(200, userContext.eth)}</h5>
                                </Col>
                                <Col>
                                    <Image src="https://instadapp.io/img/icons/erc20Tokens/eth.svg" width="50px" />
                                </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }} className="p-1">
                        <Card.Body>
                            <Card.Text>
                                <Row>
                                    <Col>
                                <h6 className="text-muted">{userContext.dai}</h6>
                                <h5>${calcBalance(200, userContext.dai)}</h5>
                                </Col>
                                <Col>
                                    <Image src="https://instadapp.io/img/icons/erc20Tokens/dai.svg" width="50px" />
                                </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>                    <Card style={{ width: '15rem' }} className="p-1">
                        <Card.Body>
                            <Card.Text>
                                <Row>
                                    <Col>
                                <h6 className="text-muted">{userContext.bat}</h6>
                                <h5>${calcBalance(200, userContext.bat)}</h5>
                                </Col>
                                <Col>
                                    <Image src="https://instadapp.io/img/icons/erc20Tokens/bat.svg" width="50px" />
                                </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </CardColumns>
            </Row>
        </div>
    )

};

export default Balance;