import React , {useContext} from 'react';
import { Card, Col, Row, Button, Image } from 'react-bootstrap';
import {UserContext} from '../../../App';

const AddEth = () => {
    
    const userContext = useContext(UserContext);

    const deposit = (qty) => {
        alert('deposit made');
    }

    const withdraw = (qty) => {
        alert('withdrawal made');
    }

    return (
        <div>
            <Row>
                <Card style={{ width: '20rem' }} className="text-center rounded mx-auto d-block">
                    <Card.Img className="rounded mx-auto d-block my-4" style={{ width: '120px' }} src="https://instadapp.io/earn/img/icons/erc20Tokens/eth.svg" />
                    <Card.Body>
                        <Card.Title>
                            <h2>{userContext.eth}</h2>
                            <p>Your ETH Balance</p>
                        </Card.Title>
                        <Card.Text>
                            <hr />
                            <small className='text-uppercase'>wallet balance</small>
                            <Row>
                                <Col>
                                    <div class="input-group input-group-lg">
                                        <input type="text" data-id="eth" class="form-control" placeholder="0.00" aria-label="Qty"  onChange={(event) => console.log(event.target.value)}></input>
                                    </div>
                                </Col>
                                <Col>
                                    <Image src="https://instadapp.io/earn/img/icons/erc20Tokens/eth.svg" style={{ width: '50px' }} />
                                </Col>
                            </Row>
                        </Card.Text>
                        <Button onClick={deposit} variant="success" className="mx-3">Deposit</Button>
                        <Button onClick={withdraw} variant="primary">Withdraw</Button>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    )

};

export default AddEth;