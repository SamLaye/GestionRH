import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { AiOutlinePlus } from "react-icons/ai";

function AjoutEmploye({ onEmployeeAdded }) {
  const [show, setShow] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    hireDate: "",
    gender: "",
    idNumber: "",
    phoneNumber: "",
    address: "",
    birthDate: "",
    employeeId: "",
    department: "",
    position: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  const handleSubmit = () => {
    
    onEmployeeAdded(employeeDetails);
    // Reset form fields and close modal
    setEmployeeDetails({
      firstName: "",
      lastName: "",
      email: "",
      hireDate: "",
      gender: "",
      idNumber: "",
      phoneNumber: "",
      address: "",
      birthDate: "",
      employeeId: "",
      department: "",
      position: "",
    });
    setShow(false);
  };

  return (
    <div>
      <Button
        variant="primary"
        className="mt-2 rounded-0 border-0 bg-secondary"
        onClick={handleShow}
      >
        <AiOutlinePlus className="me-3" />
        Nouvel employé
      </Button>
      <div className="modal-dialog modal-lg">
        <Modal
          show={show}
          onHide={handleClose}
          className="border-primary modal-dialog modal-lg"
        >
          <Modal.Header className="bg-primary">
            <Modal.Title className="text-white">Nouvel employé</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="row">
                <div className="col-6">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    className="border-0 border-bottom rounded-0"
                    type="name"
                    placeholder="entrer votre prenom"
                    required
                  />
                </div>
                <div className="col-6">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    className="border-0 border-bottom rounded-0"
                    type="name"
                    placeholder="entrer votre nom"
                    required
                  />
                </div>
                <div className="col-6">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="border-0 border-bottom rounded-0"
                    type="email"
                    placeholder="entrer votre email"
                    required
                  />
                </div>
                <div className="col-6">
                  <Form.Label>Date d'embauche</Form.Label>
                  <Form.Control
                    className="border-0 border-bottom rounded-0"
                    type="date"
                    required
                  />
                </div>
                <div className="col-6">
                  <Form.Label className="me-3">Sexe</Form.Label>
                  <input
                    className="border-0 border-bottom rounded-0"
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    required
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Homme
                  </label>{" "}
                  <input
                    className="border-0 border-bottom rounded-0"
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    required
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Femme
                  </label>
                </div>
                <div className="col-6">
                  <Form.Label>CNI</Form.Label>
                  <Form.Control
                    className="border-0 border-bottom rounded-0"
                    type="number"
                  />
                </div>
                <div className="col-6">
                  <Form.Label>Telephone</Form.Label>
                  <Form.Control
                    className="border-0 border-bottom rounded-0"
                    type="date"
                  />
                </div>
                <div className="col-6">
                  <Form.Label>Adresse</Form.Label>
                  <Form.Control
                    className="border-0 border-bottom rounded-0"
                    type="text"
                  />
                </div>
                <div className="col-6">
                  <Form.Label>Date de naissance</Form.Label>
                  <Form.Control
                    className="border-0 border-bottom rounded-0"
                    type="date"
                  />
                </div>
                <div className="col-6">
                  <Form.Label>Matricule</Form.Label>
                  <Form.Control
                    className="border-bottom border-0 border-bottom"
                    type="number"
                  />
                </div>
                <div className="col-6 mt-3">
                  <select
                    className="border-0 border-bottom rounded-0"
                    aria-label="Default select example"
                  >
                    <option selected>Departement</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6">
                  <Form.Label>Fonction</Form.Label>
                  <Form.Control
                    className="border-bottom border-0 rounded-0"
                    type="text"
                  />
                </div>
              </div>
            </Form.Group>
          </Modal.Body>
          <div className="text-end my-1 me-2">
            <Button
              className="border-0 rounded-0"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Valider
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default AjoutEmploye;
