import React, { useState } from 'react';
import './EmployeePresence.css';
import { BsChevronCompactLeft, BsChevronCompactRight, BsPatchCheckFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import { AiFillPlusSquare } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Presence() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const employees = [
    { id: 1, name: 'Salarié 1 Test' },
    { id: 2, name: 'Salarié 2 Test' },
    { id: 3, name: 'Salarié 3 Test' },
    // ... autres employés
  ];

  const goToPreviousDay = () => {
    setCurrentDate(prevDate => new Date(prevDate.setDate(prevDate.getDate() - 1)));
  };

  const goToNextDay = () => {
    setCurrentDate(prevDate => new Date(prevDate.setDate(prevDate.getDate() + 1)));
  };

  // const handlePresenceMarking = (employeeId) => {
  //     // Logique pour marquer la présence
  //     console.log(`Marquer la présence pour l'employé ID: ${employeeId}`);
  // };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="main-title" style={{ marginBottom: "30px" }}>
        <h3 style={{ textTransform: "uppercase" }}>présences</h3>
      </div>

      <div className="mt-3">
        <div className="presence-container">
          <div className="">
            <div className="d-flex align-items-center p-2" style={{ background: '#f9f9f9' }}>
              <p><IoHomeOutline /> Accueil</p>
              <p className='mx-3'><BsChevronCompactRight className='fw-bolder' /> Présence</p>
            </div>
          </div>
          <div className="card mt-3" style={{margin: '0', padding: '0'}}>
            <div className="bg-secondary p-2">
              <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                  <p className='text-white'> <BsPatchCheckFill /> <span className='fs-5'>Présence des employés</span> </p>
                  <Button className='fs' variant="light" size="sm">
                    + Marqueeer la présence
                  </Button>{' '}
                </div>
              </div>
            </div>

            <div className="container-fluid mt-2">
              <div className="d-flex">
                <Form.Control style={{ width: "15%" }} size="sm" type="text" placeholder="Nom/Prénom/Email" />
                <Form.Select style={{ width: "15%" }} className='mx-2' aria-label="Default select example">
                  <option>Département</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>

            <div className="date-navigation mt-4">
              <button onClick={goToPreviousDay}><BsChevronCompactLeft className='fw-bolder' /> Jour précédent</button>
              <span>{currentDate.toLocaleDateString()}</span>
              <button onClick={goToNextDay}>Jour suivant <BsChevronCompactRight className='fw-bolder' /></button>
            </div>
            <div className="container-fluid p-3">
              <table className='table table-striped table-hover'>
                {/*<thead>
                  <tr>
                      <th>Nom/Prénom/Email</th>
                      <th>Action</th>
                  </tr>
                  </thead>*/}
                <tbody>
                  {employees.map(employee => (
                    <tr key={employee.id}>
                      <td>{employee.name}</td>
                      <td className='text-end'>
                        <button onClick={handleShow}><AiFillPlusSquare /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Marquer la présence</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="employeeSelect">
                  <Form.Label>Sélectionner l'employé :</Form.Label>
                  <Form.Select>
                    <option>Choisir...</option>
                    {employees.map(employee => (
                      <option key={employee.id} value={employee.id}>{employee.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="timeIn">
                  <Form.Label>Heure d'entrée :</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="timeOut">
                  <Form.Label>Heure de sortie :</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="notes">
                  <Form.Label>Notes :</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Ajouter des notes..." />
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Annulé
              </Button>
              <Button variant="primary">Enregistré</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Presence;
