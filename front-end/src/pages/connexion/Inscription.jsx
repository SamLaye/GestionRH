import React, { useState } from "react";
import axios from "axios";

function Inscription() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoyer les données d'inscription au backend
      await axios.post("http://localhost:8000/api/auth/register", { name, email, password });
      // Rediriger vers la page de connexion après l'inscription réussie
      window.location.href = "/connexion";
    } catch (error) {
      setError('Erreur lors de l\'inscription: ' + error.message);
    }
  };

  return (
    <div id="inscription">
      <div className="auth">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="prenom" className="form-label">Prénom</label>
            <input type="text" className="form-control" id="prenom" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Adresse email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input type="password" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary mt-4">S'inscrire</button>
        </form>
      </div>
    </div>
  );
}

export default Inscription;
