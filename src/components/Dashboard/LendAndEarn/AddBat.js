import React from 'react';
import { Card, Col, Row, Button, Image } from 'react-bootstrap';

const AddBat = () => {

    return (
        <div>
            <Row>
                <Card style={{ width: '20rem' }} className="text-center rounded mx-auto d-block">
                    <Card.Img className="rounded mx-auto d-block my-4" style={{ width: '120px' }} src="https://instadapp.io/earn/img/icons/erc20Tokens/bat.svg" />
                    <Card.Body>
                        <Card.Title>
                            <h2>0.00</h2>
                            <p>Your Bat Balance</p>
                        </Card.Title>
                        <Card.Text>
                            <hr />
                            <small className='text-uppercase'>wallet balance</small>
                            <Row>
                                <Col>
                                    <div class="input-group input-group-lg">
                                        <input type="text" data-id="bat" class="form-control" placeholder="0.00" aria-label="Qty" aria-describedby="basic-addon1"></input>
                                    </div>
                                </Col>
                                <Col>
                                    <Image src="https://instadapp.io/earn/img/icons/erc20Tokens/bat.svg" style={{ width: '50px' }} />
                                </Col>
                            </Row>
                        </Card.Text>
                        <Button variant="success" className="mx-3">Deposit</Button>
                        <Button variant="primary">Withdraw</Button>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    )

};

export default AddBat;