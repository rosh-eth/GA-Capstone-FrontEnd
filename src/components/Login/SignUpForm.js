import React, {useState} from 'react';
import { Form, Button, Card } from 'react-bootstrap'

const SignUpForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        console.log("2")
    }

    return (
        <div>
            <Card bg="dark" text="white" style={{ width: '24rem' }} className="mx-auto d-flex align-items-center">
            <Card.Img className="img-thumbnail" style={{ width: '8rem' }} variant="top" src="https://instadapp.io/img/logo.png" />
            <Card.Header>InstaDapp</Card.Header>
                <Card.Body>
                    <Card.Title className="text-center">Sign Up!</Card.Title>
                    <Card.Text>
                        <Form className="text-center" onSubmit={handleSubmit} >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                    </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Donald" />
                            </Form.Group>

                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Trump" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
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

export default SignUpForm;

