import React, { useState } from 'react';
import './EmployeePresence.css';
import { BsChevronCompactLeft, BsChevronCompactRight, BsPatchCheckFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import { AiFillPlusSquare } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Presence() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [timeIn, setTimeIn] = useState('');
  const [timeOut, setTimeOut] = useState('');
  const [notes, setNotes] = useState('');
  const [show, setShow] = useState(false);

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

  const handleShow = (employee) => {
    setSelectedEmployee(employee);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedEmployee(null);
    setTimeIn('');
    setTimeOut('');
    setNotes('');
  };

  const handlePresenceMarking = () => {
    if (!selectedEmployee || !timeIn || !timeOut) {
      // Vérifier si toutes les données nécessaires sont remplies
      console.error('Veuillez remplir toutes les informations nécessaires.');
      return;
    }

    // Logique pour enregistrer la présence
    const presenceData = {
      employeeId: selectedEmployee.id,
      timeIn: timeIn,
      timeOut: timeOut,
      notes: notes
    };

    // Envoi des données de présence à votre API ou à votre backend pour enregistrement
    console.log('Présence enregistrée avec succès:', presenceData);
    // Vous pouvez implémenter la logique d'enregistrement avec votre API ici

    // Fermer le modal après avoir enregistré la présence
    handleClose();
  };

  return (
    <div>
      <div className="main-title" style={{ marginBottom: "30px" }}>
        <h3 style={{ textTransform: "uppercase" }}>présences</h3>
      </div>

      <div className="mt-3">
        <div className="presence-container">
          <div className="card mt-3" style={{margin: '0', padding: '0'}}>
            <div className=" p-2" style={{ background: '#2d2e5c' }}>
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
              <span style={{ color: '#2d2e5c' }}>{currentDate.toLocaleDateString()}</span>
              <button onClick={goToNextDay}>Jour suivant <BsChevronCompactRight className='fw-bolder' /></button>
            </div>
            <div className="container-fluid p-3">
              <table className='table table-striped table-hover'>
                <tbody>
                  {employees.map(employee => (
                    <tr key={employee.id}>
                      <td>{employee.name}</td>
                      <td className='text-end'>
                        <button onClick={() => handleShow(employee)}><AiFillPlusSquare /></button>
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
                  <Form.Select onChange={(e) => setSelectedEmployee(employees.find(emp => emp.id === parseInt(e.target.value)))}>
                    <option>Choisir...</option>
                    {employees.map(employee => (
                      <option key={employee.id} value={employee.id}>{employee.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="timeIn">
                  <Form.Label>Heure d'entrée :</Form.Label>
                  <Form.Control type="time" value={timeIn} onChange={(e) => setTimeIn(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="timeOut">
                  <Form.Label>Heure de sortie :</Form.Label>
                  <Form.Control type="time" value={timeOut} onChange={(e) => setTimeOut(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="notes">
                  <Form.Label>Notes :</Form.Label>
                  <Form.Control as="textarea" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Ajouter des notes..." />
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Annulé
              </Button>
              <Button style={{ background: '#2d2e5c',border:'none' }} onClick={handlePresenceMarking}>Enregistré</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Presence;
