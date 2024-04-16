
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { AiOutlinePlus } from "react-icons/ai";

function AjoutEmploye() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    date: "",
    adress: "",
    departement: "",
  });

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newEmployee = new FormData();

      // Ajouter les champs et leurs valeurs à FormData
      newEmployee.append("firstname", formData.firstname);
      newEmployee.append("lastname", formData.lastname);
      newEmployee.append("email", formData.email);
      newEmployee.append("date", formData.date);
      newEmployee.append("adress", formData.adress);
      newEmployee.append("departement", formData.departement);

      const response = await fetch("http://127.0.0.1:8000/api/employes", {
        method: "POST",
        body: newEmployee,
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la création de l'employé");
      }

      // Réinitialiser les champs du formulaire après la création réussie de l'employé
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        date: "",
        adress: "",
        departement: "",
      });

      handleClose(); // Fermer la modale après la création réussie de l'employé
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de la création de l'employé:",
        error.message
      );
      // Gérer l'erreur ici, par exemple, afficher un message d'erreur à l'utilisateur
    }
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
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="text-black"
              controlId="exampleForm.ControlInput1"
            >
              <div className="row">
                <div className="mb-2 col-6">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    type="name"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="Entrer votre prénom"
                    required
                  />
                </div>
                <div className="mb-2 col-6">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    type="name"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Entrer votre nom"
                    required
                  />
                </div>
                <div className="mb-2 col-6">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Entrer votre email"
                    required
                  />
                </div>
                <div className="mb-2 col-6">
                  <Form.Label>Date d'embauche</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    type="number"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-2 col-6">
                  <Form.Label>Adresse</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    type="text"
                    name="adress"
                    value={formData.adress}
                    onChange={handleChange}
                    placeholder="Entrer votre adresse"
                    required
                  />
                </div>
                <div className="mb-2 col-6">
                  <Form.Label>Département</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    type="text"
                    name="departement"
                    value={formData.departement}
                    onChange={handleChange}
                    placeholder="Entrer votre département"
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
              >
                Valider
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AjoutEmploye;
