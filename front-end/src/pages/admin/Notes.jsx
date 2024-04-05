import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { BsChevronCompactRight, BsPatchCheckFill, BsBackspaceFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Notes() {

  const [showModal, setShowModal] = useState(false);
  // const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [department, setDepartment] = useState('');

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSubmit = () => {
    // Logique pour soumettre la note
    console.log("Titre :", title);
    console.log("Contenu :", content);
    console.log("Département :", department);
    // Vous pouvez ajouter ici la logique pour envoyer les données à votre backend, par exemple.
    handleCloseModal();
  };


  return (
    <div>
      <div className="main-title" style={{ marginBottom: "30px" }}>
        <h3 style={{ textTransform: "uppercase" }}>notes</h3>
      </div>

      <div className="container-fluid mt-3">
        <div className="notes-container">
          <div className="">
            <div className="d-flex align-items-center " style={{ background: '#f9f9f9' }}>
              <p><IoHomeOutline /> Accueil</p>
              <p className=''><BsChevronCompactRight className='fw-bolder' /> Notes internes</p>
            </div>
          </div>
          <div className="card mt-2">
            <div className="bg-secondary p-2">
              <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                  <p className='text-white'> <BsPatchCheckFill /> <span className='fs-5 my-3'> Notes internes </span> </p>
                  <div className="">
                    <div className="d-flex justify-content-between align-items-center">
                      <p>Aucune note trouvée</p>
                      <Button className='fs' size="sm">
                      <BsBackspaceFill />
                      </Button>{' '}
                    </div>
                  </div>
                  <Button className='fs' variant="light" size="sm">
                    Ajouter une note
                  </Button>{' '}

                </div>
              </div>
            </div>

            <div className="container-fluid mt-2 p-3">
              <div className="d-flex">
                <Form.Control style={{ width: "15%" }} size="sm" type="text" placeholder="Titre/Conten" />
                <Form.Select style={{ width: "15%" }} className='mx-2' aria-label="Default select example">
                  <option>Département</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <div className="text-center">
                <Button variant="primary" onClick={handleShowModal}>
                  + Marqueeer une note interne
                </Button>
              </div>
            </div>
          </div>

          {/* Modal */}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter une note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="title">
                  <Form.Label>Titre :</Form.Label>
                  <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Entrez le titre de la note" />
                </Form.Group>
                <Form.Group controlId="content">
                  <Form.Label>Contenu :</Form.Label>
                  <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Entrez le contenu de la note" />
                </Form.Group>
                <Form.Group controlId="department">
                  <Form.Label>Département :</Form.Label>
                  <Form.Select value={department} onChange={(e) => setDepartment(e.target.value)}>
                    <option>Choisir...</option>
                    <option value="administration">Administration</option>
                    <option value="commercial">Commercial</option>
                    <option value="finances">Finances</option>
                    <option value="ressource-humaine">Ressource Humaine</option>
                    <option value="technique">Technique</option>
                  </Form.Select>
                  <Form.Text className="text-muted my-2">
                    Si aucun département n'est sélectionné, la note sera visible pour tous.
                  </Form.Text>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Annuler
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Enregistrer
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Notes;
