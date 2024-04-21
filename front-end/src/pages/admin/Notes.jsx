import React, { useEffect, useState } from 'react'
import {  BsPatchCheckFill, BsBackspaceFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

function Notes() {

  const [showModal, setShowModal] = useState(false);
  // const [isLoading, setLoading] = useState(false);
  const [titre, setTitre] = useState('');
  const [contenu, setContenu] = useState('');
  const [departement, setDepartement] = useState('');
  const [notes, setNotes] = useState([]);


  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = async () => {
    // Préparer les données de la note
    const note = { titre, contenu, departement };
  
    try {
      const response = await axios.post('http://localhost:8000/api/notes', note);
      console.log(response.data);
      // Gérer la réponse - par exemple, mettre à jour l'état avec la nouvelle note
      toast.success('Le congé a été accordé avec succès !');
      handleCloseModal()
      fetchNotes();
    } catch (error) {
      // Gérer l'erreur - par exemple, afficher un message d'erreur
      toast.error('Une erreur est survenue lors de l\'ajout du type de congé. !');

    }
  };
//recuperation des notes++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const fetchNotes = async () => {
  try {
    // Remplacer avec l'URL de votre API Laravel
    const response = await axios.get('http://localhost:8000/api/notes');
    setNotes(response.data); // Stocker les notes dans l'état
  } catch (error) {
    console.error(error);
    
  }
};
useEffect(() => {
  
  fetchNotes();
}, []); 

  const handleSearch = () => {
    // Logique pour filtrer les notes en fonction de la recherche
    console.log("Recherche :", searchQuery);
  };

  return (
    <div>
       <ToastContainer />

      <div className="main-title" style={{ marginBottom: "30px" }}>
        <h3 style={{ textTransform: "uppercase" }}>notes</h3>
      </div>

      <div className="container-fluid mt-3">
        <div className="notes-container">
         
          <div className="card mt-2">
            <div className=" p-2" style={{ background: '#2d2e5c' }}>
              <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                  <p className='text-white'> <BsPatchCheckFill /> <span className='fs-5 my-3'> Notes internes </span> </p>
                  <Button className='fs' variant="light" size="sm" onClick={handleShowModal}>
                    Ajouter une note
                  </Button>{' '}

                </div>
              </div>
            </div>

            <div className="container-fluid mt-2 p-3">
              <div className="d-flex">
                <Form.Control style={{ width: "15%" }} size="sm" type="text" placeholder="Titre/Content" />
                <Form.Select style={{ width: "15%" }} className='mx-2' aria-label="Default select example">
                  <option>Département</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Button style={{ background: '#2d2e5c',border:'none' }} onClick={handleSearch} className="ms-2">
                  Rechercher
                </Button>
              </div>
              <div className="mt-3 bg-light p-2">
                <div className="d-flex justify-content-between align-items-center">
                <div className="notes-list">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div key={note.id} className="note">
              <h5>{note.titre}</h5>
              <p>{note.contenu}</p>
              {/* Afficher le département si présent */}
              {note.department && <p>Département : {note.department}</p>}
            </div>
          ))
        ) : (
          <p>Aucune note trouvée</p>
        )}
      </div>
                  <Button style={{ background: '#2d2e5c', border:'none' }} size="sm">
                    <BsBackspaceFill />
                  </Button>{' '}
                </div>
              </div>
              <div className="text-center mt-2">
                <Button style={{ background: '#2d2e5c', border:'none' }} >
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
                  <Form.Control type="text" value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="Entrez le titre de la note" />
                </Form.Group>
                <Form.Group controlId="content">
                  <Form.Label>Contenu :</Form.Label>
                  <Form.Control as="textarea" rows={3} value={contenu} onChange={(e) => setContenu(e.target.value)} placeholder="Entrez le contenu de la note" />
                </Form.Group>
                <Form.Group controlId="department">
                  <Form.Label>Département :</Form.Label>
                  <Form.Select value={departement} onChange={(e) => setDepartement(e.target.value)}>
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
              <Button  style={{ background: '#2d2e5c' }} onClick={handleCloseModal}>
                Annuler
              </Button>
              <Button style={{ background: '#2d2e5c' }} onClick={handleSubmit}>
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
