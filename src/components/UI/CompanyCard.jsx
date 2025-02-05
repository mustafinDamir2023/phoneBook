import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import CompanyEdit from './CompanyEdit';

export default function CompanyCard({company, user, deleteHandler}) {
  console.log(company);
  const [show, setShow] = React.useState(false);
  const [comp, setComp] = React.useState(company);
  const showHandler = () => {
    setShow((prev) => !prev);
  };

  const [show2, setShow2] = React.useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);

  const deleteHandler2 = () => {
    deleteHandler(company.id);
    handleClose();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    // console.log(formData);
    await axios.put(`/api/comp/${company.id}`, formData);
    setComp(formData);
    setShow(false);
  };

  return (
    <div className="col-3">
      <div className="card">
        <div className="card-body">
        <small>company name:</small>
          <h5 className="card-title">{comp.name}</h5>
        </div>
        <div className="card-body">
        <small>phone number:</small>
          <p className="card-text">{comp.phone}</p>
        </div>
        <div className="d-flex justify-content-between">
          {user?.id === company?.user_id && (
            <>
              <Button onClick={handleShow} type="button" className="btn btn-secondary">
                Delete
              </Button>
              <Button onClick={showHandler} type="button" className="btn btn-secondary">
                Edit
              </Button>
            </>
          )}
        </div>
      </div>
      {show && <CompanyEdit comp={comp} submitHandler={submitHandler} />}
      <Modal show={show2} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this important campaign and phone?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
          <Button variant="danger" onClick={deleteHandler2}>
            delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

