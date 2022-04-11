import React from 'react'
import './auth.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="col-6 mx-auto main-container d-flex justify-content-center align-items-center ">
            <div className="login-form p-4 ">
                <div className="text-center text-success">
                    <i className="fa-solid fa-leaf fa-8x"></i>
                    <h1>
                        Our Schema
                    </h1>
                    <p> Share your ideas</p>
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Link to = "/">
                        <Button variant="primary" type="submit" className='form-control'>
                            Sign in
                        </Button>
                    </Link>
                    
                    <div className="text-center">
                        <strong className='text-success'>
                            <Link to="/register">Create Account</Link>
                        </strong>
                    </div>

                </Form>
            </div>
        </div>
    )
}
