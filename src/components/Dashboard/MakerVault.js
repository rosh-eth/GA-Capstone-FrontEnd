import React from 'react';
import {Link } from 'react-router-dom';
import { Card , Col, Row, CardColumns, Image, Button, ProgressBar} from 'react-bootstrap';

const Balance = () => {

    return (
        <div>
            <h4 className="text-center my-4">Maker Vault (DAI)</h4>
            <hr />
            <Row>
            <Card className="mx-3">
  <Card.Body>
    <Card.Title>$1,000.00<Link to="/"><Button className="float-right mb-3">#9999</Button></Link>
    <hr /></Card.Title>
    <Card.Text>
        <Row>
    <CardColumns className="ml-3">
                    <Card style={{ width: '15rem' }} className="p-1">
                        <Card.Body>
                            <Card.Text>
                                <Row>
                                    <Col>
                                    <ProgressBar now={60} />
                                </Col>
                                <Col>
                                <a href="#" class="badge badge-success">33.16/66</a>
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
                                <h6 className="text-muted">4.5</h6>
                                <h5>$800.32</h5>
                                </Col>
                                <Col>
                                    <Image src="https://instadapp.io/img/icons/erc20Tokens/eth.svg" width="50px" />
                                </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>                    <Card style={{ width: '15rem' }} className="p-1">
                        <Card.Body>
                            <Card.Text>
                                <Row>
                                    <Col>
                                <h6 className="text-muted">4.5</h6>
                                <h5>$800.32</h5>
                                </Col>
                                <Col>
                                    <Image src="https://instadapp.io/img/icons/erc20Tokens/dai.svg" width="50px" />
                                </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </CardColumns>
            </Row>
    </Card.Text>
  </Card.Body>
</Card>


            </Row>
        </div>
    )

};

export default Balance;