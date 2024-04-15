import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { AiOutlinePlus } from "react-icons/ai";
import axios from 'axios';

function AjoutEmploye({ updateEmployees }) {
  const [employees, setEmployees] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");
  const [hireDate, setHireDate] = useState("");

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleHireDateChange = (event) => {
    setHireDate(event.target.value);
  };
 // Fermer la modal
  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmployee = {
      firstName,
      lastName,
      email,
      address,
      department,
      hireDate,
    
    };

    
      updateEmployees(newEmployee);
      // Fermer la modal après la soumission du formulaire
      handleClose();
    setEmployees([...employees, newEmployee]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setDepartment("");
    setHireDate("");
  };

  return (
    <div>
      <Button
        variant="primary"
        className="my-2 rounded-0 border-0 bg-secondary"
        onClick={handleShow}
      >
        <AiOutlinePlus className="me-3" />
        Nouvel employé
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        className="border-primary modal-dialog modal-lg"
      >
        <Modal.Header className="bg-primary">
          <Modal.Title className="text-white">Nouvel employé</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group
            className=" text-black"
            controlId="exampleForm.ControlInput1"
          >
            <div className="row">
              <div className=" mb-2 col-6">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  className=" rounded-0"
                  type="name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  placeholder="Entrer votre prénom"
                  required
                />
              </div>
              <div className=" mb-2 col-6">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  className=" rounded-0"
                  type="name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  placeholder="Entrer votre nom"
                  required
                />
              </div>
              <div className=" mb-2 col-6">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className=" rounded-0"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Entrer votre email"
                  required
                />
              </div>
              <div className=" mb-2 col-6">
                <Form.Label>Date d'embauche</Form.Label>
                <Form.Control
                  className=" rounded-0"
                  type="date"
                  value={hireDate}
                  onChange={handleHireDateChange}
                  required
                />
              </div>
              <div className=" mb-2 col-6">
                <Form.Label>Adresse</Form.Label>
                <Form.Control
                  className=" rounded-0"
                  type="adress"
                  value={address}
                  onChange={handleAddressChange}
                  required
                />
              </div>
              <div className=" mb-2 col-6">
                <Form.Label>Departement</Form.Label>
                <Form.Control
                  className=" rounded-0"
                  type="text"
                  value={department}
                  onChange={handleDepartmentChange}
                  required
                />
              </div>
            </div>
          </Form.Group>
          <div className="text-end me-2">
            <Button
              className="border-0 rounded-0"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Valider
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AjoutEmploye;

