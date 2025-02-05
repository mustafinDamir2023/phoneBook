import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function CompanyAdd({submitHandler}) {
  return (
    <Form onSubmit={submitHandler} style={{ width: '400px' }}>
      <Form.Group className="mb-3">
        <Form.Label>Company</Form.Label>
        <Form.Control name="name" type="text" placeholder="name" />
        <Form.Text className="text-muted">Write name of the company</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control name="phone" type="text" placeholder="phone" />
      </Form.Group>

      <Button variant="secondary" type="submit">
        Add
      </Button>
    </Form>
  );
}

