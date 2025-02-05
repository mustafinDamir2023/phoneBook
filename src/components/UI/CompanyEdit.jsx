import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function CompanyEdit({ comp, submitHandler }) {
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-1">
        <Form.Label>Company</Form.Label>
        <Form.Control name="name" type="text" defaultValue={comp.name} />
        <Form.Text className="text-muted">edit company</Form.Text>
      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Label>Phone number</Form.Label>
        <Form.Control name="phone" type="text" defaultValue={comp.phone} />
        <Form.Text className="text-muted">edit phone</Form.Text>
      </Form.Group>

      <Button variant="secondary" type="submit">
        Edit
      </Button>
    </Form>
  );
}
