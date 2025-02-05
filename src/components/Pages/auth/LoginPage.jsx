import React from 'react';
import axios from 'axios';
import { Form, Button, Container} from 'react-bootstrap';

export default function LoginPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post('/auth/login', Object.fromEntries(new FormData(e.target)));
    if (response.status === 200) {
      window.location = '/';
    }
  };
  return (
    <Container className="d-flex justify-content-center" style={{ width: '400px' }}>
    <Form onSubmit={submitHandler} className="mt-1">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="email"
          id="email"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="password"
          id="password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        login
      </Button>
    </Form>
  </Container>
  );
}