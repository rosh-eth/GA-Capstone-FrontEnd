import React , {useContext, useState} from 'react';
import { Card, Col, Row, Button, Image } from 'react-bootstrap';
import {UserContext} from '../../../App';

const AddBat = () => {

    const userContext = useContext(UserContext);


    const [amount, setAmount] = useState(0);
    const {setBat, bat} = userContext;

    const handleDeposit = (event) => {
        event.preventDefault();
        console.log('You clicked Submit')

        setBat(parseInt(amount, 10) + bat);

    }

    const handleWithdrawal = (event) => {
        event.preventDefault();
        console.log('You clicked Submit')

        setBat(bat - parseInt(amount, 10));
    }

    return (
        <div>
            <Row>
                <Card style={{ width: '20rem' }} className="text-center rounded mx-auto d-block">
                    <Card.Img className="rounded mx-auto d-block my-4" style={{ width: '120px' }} src="https://instadapp.io/earn/img/icons/erc20Tokens/bat.svg" />
                    <Card.Body>
                        <Card.Title>
                            <h2>{userContext.bat}</h2>
                            <p>Your BAT Balance</p>
                        </Card.Title>
                        <Card.Text>
                            <hr />
                            <small className='text-uppercase'>wallet balance</small>
                            <Row>
                                <Col>
                                    <div class="input-group input-group-lg">
                                        <input type="text" data-id="bat" class="form-control" placeholder="0.00" aria-label="Qty"  onChange={(event) => setAmount(event.target.value)}></input>
                                    </div>
                                </Col>
                                <Col>
                                    <Image src="https://instadapp.io/earn/img/icons/erc20Tokens/bat.svg" style={{ width: '50px' }} />
                                </Col>
                            </Row>
                        </Card.Text>
                        <Button onClick={handleDeposit} variant="success" className="mx-3">Deposit</Button>
                        <Button onClick={handleWithdrawal} variant="primary">Withdraw</Button>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    )

};

export default AddBat;