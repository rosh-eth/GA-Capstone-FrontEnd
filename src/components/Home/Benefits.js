import React from 'react';
import { Jumbotron, Button, Row, Container, Image, Col } from 'react-bootstrap';

const Benefits = () => {
    return (
        <React.Fragment>
            <h3 className="text-center py-5">InstaDApp makes it much <span className="text-primary">simpler</span> to...</h3>

            <Row className="mb-4 text-center">
                <Col xs="4" sm="4" md="4" lg="3" xl="3">
                    <Image src="https://instadapp.io/img/illustrations/lend.svg" fluid />
                </Col>
                <Col xs="8" sm="8" md="6" lg="3" xl="3">
                    <h3>
                        Lend & Earn
        </h3>
                    <p>
                        Deposit cryptos to continuously earn variable algorithmic interest over time.
        </p>
                </Col>


                <Col xs="4" sm="4" md="4" lg="3" xl="3">
                    <Image src="https://instadapp.io/img/illustrations/leverage.svg" fluid />
                </Col>
                <Col xs="8" sm="8" md="6" lg="3" xl="3">
                    <h3>
                        Perform Complex Actions
        </h3>
                    <p>
                        Easily perform complex actions like leverage, shorting or debt switching.
        </p>
                </Col>



                <Col xs="4" sm="4" md="4" lg="3" xl="3">
                    <Image src="https://instadapp.io/img/illustrations/borrow.svg" fluid />
                </Col>
                <Col xs="8" sm="8" md="6" lg="3" xl="3">
                    <h3>
                        Optimize Holdings
        </h3>
                    <p>
                        Seamlessly optimize and manage your holdings across different protocols.
        </p>
                </Col>



                <Col xs="4" sm="4" md="4" lg="3" xl="3">
                    <Image src="https://instadapp.io/img/illustrations/swap.svg" fluid />
                </Col>
                <Col xs="8" sm="8" md="6" lg="3" xl="3">
                    <h3>
                        Switch Position
        </h3>
                    <p>
                        Switch positions between protocols to take advantage of rates, liquidations and more.
        </p>
                </Col>
            </Row>
        </React.Fragment>
    )

}

export default Benefits;