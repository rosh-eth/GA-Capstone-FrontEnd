import React from 'react';
import { Accordion, Row, Col, Image, Card } from 'react-bootstrap';

const Cards = () => {

    return (
        <div>
            <Row className="mb-4 py-2" style={{background: 'white'}}>
                <Row> 
                <Col xs="4" sm="4" md="4" lg="2" xl="2" className="mx-3  py-4">
                    <Image src="https://instadapp.io/assets/img/illustrations/trustless.png" fluid />
                </Col>
                <Col xs="8" sm="8" md="6" lg="3" xl="3" className="mx-3  py-4">
                    <h5>
                        Lend & Earn
        </h5>
                    <p className='text-muted'>
                        Deposit cryptos to continuously earn variable algorithmic interest over time.
        </p>
                </Col>


                <Col xs="4" sm="4" md="4" lg="2" xl="2" className="mx-3 py-4">
                    <Image src="https://instadapp.io/assets/img/illustrations/secure.png" fluid />
                </Col>
                <Col xs="8" sm="8" md="6" lg="3" xl="3" className="mx-3 py-4">
                    <h5>
                        Perform Complex Actions
        </h5>
                    <p className='text-muted'>
                        Easily perform complex actions like leverage, shorting or debt switching.
        </p>
                </Col>
                </Row>


            </Row>
        </div>
    )

}

export default Cards