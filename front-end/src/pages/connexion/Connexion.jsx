import React, { useState } from "react";
import axios from "axios"; // Assurez-vous d'avoir axios installé
import { useNavigate } from "react-router-dom";


function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", {
        email,
        password,
      });
      // Authentification réussie, stocker le jeton d'authentification dans le stockage local
      localStorage.setItem("token", response.data.access_token);
      // Rediriger l'utilisateur vers une autre page
      // Exemple : window.location.href = "/dashboard";
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div id="connexion">
      <div className="auth">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btnSubmit mt-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
