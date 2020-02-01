import React from 'react';
import { Form, Button, Card } from 'react-bootstrap'

const LoginForm = () => {

    return (
        <div>
            <Card bg="dark" text="white" style={{ width: '24rem' }} className="mx-auto d-flex align-items-center">
            <Card.Img className="img-thumbnail" style={{ width: '8rem' }} variant="top" src="https://instadapp.io/img/logo.png" />
            <Card.Header>InstaDapp</Card.Header>
                <Card.Body>
                    <Card.Title className="text-center">Login</Card.Title>
                    <Card.Text>
                        <Form className="text-center" >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required/>
                            </Form.Group>
                            <Button variant="light" type="submit">
                                Login
                </Button >
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>



            </div>
    )
}

export default LoginForm;

