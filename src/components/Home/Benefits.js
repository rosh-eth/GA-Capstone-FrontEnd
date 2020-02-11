import React from 'react';
import { Jumbotron, Button, Row, Container, Image, Col } from 'react-bootstrap';

const Benefits = () => {
    return (
        <React.Fragment>
            <h2 className="text-center py-5 my-3 font-weight-normal">InstaDApp makes it much <span className="text-primary">simpler</span> to...</h2>

            <Row className="mb-4 py-2">
                <Col xs="4" sm="4" md="4" lg="2" xl="2" className="mx-3  py-4">
                    <Image src="https://instadapp.io/img/illustrations/lend.svg" fluid />
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
                    <Image src="https://instadapp.io/img/illustrations/leverage.svg" fluid />
                </Col>
                <Col xs="8" sm="8" md="6" lg="3" xl="3" className="mx-3 py-4">
                    <h5>
                        Perform Complex Actions
        </h5>
                    <p className='text-muted'>
                        Easily perform complex actions like leverage, shorting or debt switching.
        </p>
                </Col>



                <Col xs="4" sm="4" md="4" lg="2" xl="2" className="mx-3 py-4">
                    <Image src="https://instadapp.io/img/illustrations/borrow.svg" fluid />
                </Col>
                <Col xs="8" sm="8" md="6" lg="3" xl="3" className="mx-3 py-4">
                    <h5>
                        Optimize Holdings
        </h5>
                    <p className='text-muted'>
                        Seamlessly optimize and manage your holdings across different protocols.
        </p>
                </Col>



                <Col xs="4" sm="4" md="4" lg="2" xl="2" className="mx-3 py-4">
                    <Image src="https://instadapp.io/img/illustrations/swap.svg" fluid />
                </Col>
                <Col xs="8" sm="8" md="6" lg="3" xl="3" className="mx-3 py-4">
                    <h5>
                        Switch Position
        </h5>
                    <p className='text-muted'>
                        Switch positions between protocols to take advantage of rates, liquidations and more.
        </p>
                </Col>
            </Row>
        </React.Fragment>
    )

}

export default Benefits;