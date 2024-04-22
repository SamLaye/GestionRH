import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

axios.defaults.withCredentials = true;  // Important pour envoyer et recevoir des cookies

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Récupérer le CSRF token au montage du composant
    axios.get("http://localhost:8000/sanctum/csrf-cookie").catch((error) => {
      setError('Erreur lors de la récupération du CSRF token: ' + error.message);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/auth/login", { email, password });
      navigate("/");  
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('Erreur de connexion: ' + error.message);
      }
    }
  };

  return (
    <div id="connexion">
      <div className="auth">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">Adresse email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input type="password" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" style={{ background: '#2d2e5c',border:'none' }} className="btn btn-primary mt-5">Connexion</button> <br />
          <span style={{ color: '#2d2e5c' }}>Vous ne disposez pas de compte , cliquez ici <Link to="/inscription">S'inscrire</Link></span>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
