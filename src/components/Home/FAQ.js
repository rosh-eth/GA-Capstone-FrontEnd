import React from 'react';
import { Accordion, Row, Card } from 'react-bootstrap';

const FAQ = () => {

    return (
        <div>
            <h3 className="text-center py-5 font-weight-normal">Frequently Asked Questions</h3>
            <Row className="justify-content-md-center">
            <Accordion defaultActiveKey="0" className="center-block" style={{width: '45rem'}}>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        What is InstaDApp?
    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            Your Smart Wallet to Decentralised Finance where you can perform complex financial activities like borrow, lend, leverage, swap etc in a very simpler manner.
                            </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        What do I need to get started?
    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            You need an ethereum web3 wallet like Metamask, Coinbase Wallet, TrustWallet, Imtoken etc to interact with InstaDApp portal. We will also soon launch a standalone mobile app.
                            </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        Who keeps the custody of assets?
    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                        InstaDApp uses smart contracts to secure the transactions and your assets are stored on Contract Wallet. Therefore, all transactions are traceable and irreversible. Smart Contracts are operated on algorithmic logic, which is formulated with accuracy and precision. You can view everything publicly. We do not hold any of your assets.
                            </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        What are our fees?
    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                        All of our basic platform interactions are free to use. However, you must have enough ETH while carrying out transactions to pay your gas fee.
                            </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        Is InstaDApp available in my country?
    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                        You can access InstaDApp from anywhere in the world provided you have access to your private key and internet.
                            </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                        How can I connect with the team?
    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>
                        Have a question? or know ways we can improve? or just have some feedback? Connect with us on different channels via links below at the footer. We’re always happy to get in touch with you.
                            </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Row>
        </div>
    )

}

export default FAQ