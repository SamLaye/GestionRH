import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Paie() {
  return (
    <div>
      <div className="main-title" style={{ marginBottom: "30px" }}>
        <h3 style={{ textTransform: "uppercase" }}>PAYMENT </h3>
      </div>

      <div className="payment">
        <h3>Payment / Fiche de paiement</h3>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <h4 style={{ marginBottom: "45px" }}>Employés</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 12px",
              }}
            >
              <label style={{ color: "#fff" }}>Employé</label>
              <select
                id="employes"
                style={{
                  display: "flex",
                  alignSelf: "flex-end",
                  width: "60%",
                  padding: "10px",
                }}
              >
                <option value="employes">Selectionner un employés</option>
                <option value="employes0">Employés 0</option>
                <option value="employes1">Employés 1</option>
                <option value="employes2">Employés 2</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 12px",
              }}
            >
              <label style={{ color: "#fff" }}>Mois</label>
              <input
                type="text"
                style={{
                  display: "flex",
                  alignSelf: "flex-start",
                  width: "60%",
                  padding: "10px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 12px",
              }}
            >
              <label style={{ color: "#fff" }}>Du</label>
              <input type="date" style={{ width: "60%", padding: "10px" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 12px",
              }}
            >
              <label style={{ color: "#fff" }}>Au</label>
              <input type="date" style={{ width: "60%", padding: "10px" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 12px",
              }}
            >
              <label style={{ color: "#fff" }}>date d'embauche</label>
              <input type="date" style={{ width: "60%", padding: "10px" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 12px",
              }}
            >
              <label style={{ color: "#fff" }}>Salaire de base</label>
              <input type="text" style={{ width: "60%", padding: "10px" }} />
            </div>
          </div>

          <div style={{ width: "50%" }}>
            <h4 style={{ marginBottom: "45px" }}>Déductions & retenues</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 12px",
              }}
            >
              <label style={{ color: "#fff" }}>Situation familiale</label>
              <input type="text" style={{ width: "60%", padding: "10px" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 12px",
              }}
            >
              <label style={{ color: "#fff" }}>Enfants à charge</label>
              <input type="text" style={{ width: "60%", padding: "10px" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 12px",
              }}
            >
              <label style={{ color: "#fff" }}>Taux CIMR</label>
              <input type="text" style={{ width: "60%", padding: "10px" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 12px",
              }}
            >
              <label style={{ color: "#fff" }}>Taux Assistance Maladie</label>
              <input type="text" style={{ width: "60%", padding: "10px" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 12px",
              }}
            >
              <label style={{ color: "#fff" }}>
                Assurance Retraite Complémentaire
              </label>
              <input type="text" style={{ width: "60%", padding: "10px" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 12px",
              }}
            >
              <label style={{ color: "#fff" }}>Intérert crédit logement</label>
              <input type="text" style={{ width: "60%", padding: "10px" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 12px",
              }}
            >
              <label style={{ color: "#fff" }}>Retenue pret</label>
              <input type="text" style={{ width: "60%", padding: "10px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paie;
