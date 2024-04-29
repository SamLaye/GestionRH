import React, { useState, useEffect } from "react";
import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Paie() {
   const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    employee_id: "",
    mois: "",
    du: "",
    au: "",
    date_embauche: "",
    salaire_base: "",
    situation_familiale: "",
    enfants_charge: "",
    taux_cimr: "",
    taux_assistance_maladie: "",
    assurance_retraite_complementaire: "",
    interet_credit_logement: "",
    retenue_pret: "",
  });

  useEffect(() => {
    // Fonction pour récupérer la liste des employés depuis votre backend
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/employes"); // Endpoint pour récupérer les employés
        setEmployees(response.data); // Met à jour la liste des employés
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees(); // Appel de la fonction pour récupérer les employés au chargement du composant
  }, []);

  const handleChange = (e) => {
    const selectedEmployee = employees.find(
      (employee) => employee.id === e.target.value
    );
    setFormData({
      // ...formData,
      // [e.target.name]: e.target.value,
      ...formData,
      employee_id: e.target.value,
      employee_name: selectedEmployee ? selectedEmployee.name : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/payements", formData)
      .then((response) => {
        console.log("Paiement créé avec succès", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la création du paiement", error);
      });
  };

  return (
    <div>
      <div className="main-title" style={{ marginBottom: "30px" }}>
        <h3 style={{ textTransform: "uppercase" }}>PAYMENT </h3>
      </div>

      <div className="payment">
        <h3>Payment / Fiche de paiement</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <h4 style={{ paddingLeft: "20px", fontStyle: "italic" }}>
                Employés
              </h4>
              <hr style={{ width: "95%" }} />
              <div style={{ margin: "30px 10px 10px 10px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 12px",
                  }}
                >
                  <label>Employé</label>
                  <select
                    id="employee_id"
                    name="employee_id"
                    value={formData.employee_id}
                    onChange={handleChange}
                    style={{
                      display: "flex",
                      alignSelf: "flex-end",
                      width: "60%",
                      padding: "10px",
                    }}
                  >
                    <option value="">Sélectionner un employé</option>
                    {employees.map((employee) => (
                      <option key={employee.id} value={employee.id}>
                        {employee.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 12px",
                  }}
                >
                  <label>Mois</label>
                  <input
                    type="text"
                    name="mois"
                    value={formData.mois}
                    onChange={handleChange}
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
                  <label>Du</label>
                  <input
                    type="date"
                    name="du"
                    value={formData.du}
                    onChange={handleChange}
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 12px",
                  }}
                >
                  <label>Au</label>
                  <input
                    type="date"
                    name="au"
                    value={formData.au}
                    onChange={handleChange}
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 12px",
                  }}
                >
                  <label>date d'embauche</label>
                  <input
                    type="date"
                    name="date_embauche"
                    value={formData.date_embauche}
                    onChange={handleChange}
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 12px",
                  }}
                >
                  <label>Salaire de base</label>
                  <input
                    type="number"
                    name="salaire_base"
                    value={formData.salaire_base}
                    onChange={handleChange}
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>
              </div>
            </div>

            <div style={{ width: "50%" }}>
              <h4 style={{ paddingLeft: "20px", fontStyle: "italic" }}>
                Déductions & retenues
              </h4>
              <hr style={{ width: "95%" }} />
              <div style={{ margin: "30px 10px 10px 10px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 12px",
                  }}
                >
                  <label>Situation familiale</label>
                  <input
                    type="number"
                    name="situation_familiale"
                    value={formData.situation_familiale}
                    onChange={handleChange}
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 12px",
                  }}
                >
                  <label>Enfants à charge</label>
                  <input
                    type="number"
                    name="enfants_charge"
                    value={formData.enfants_charge}
                    onChange={handleChange}
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 12px",
                  }}
                >
                  <label>Taux CIMR</label>
                  <input
                    type="number"
                    name="taux_cimr"
                    value={formData.taux_cimr}
                    onChange={handleChange}
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 12px",
                  }}
                >
                  <label>Taux Assistance Maladie</label>
                  <input
                    type="number"
                    name="taux_assistance_maladie"
                    value={formData.taux_assistance_maladie}
                    onChange={handleChange}
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 12px",
                  }}
                >
                  <label>Assurance Retraite Complémentaire</label>
                  <input
                    type="number"
                    name="assurance_retraite_complementaire"
                    value={formData.assurance_retraite_complementaire}
                    onChange={handleChange}
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 12px",
                  }}
                >
                  <label>Intérert crédit logement</label>
                  <input
                    type="number"
                    name="interet_credit_logement"
                    value={formData.interet_credit_logement}
                    onChange={handleChange}
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 12px",
                  }}
                >
                  <label>Retenue pret</label>
                  <input
                    type="number"
                    name="retenue_pret"
                    value={formData.retenue_pret}
                    onChange={handleChange}
                    style={{ width: "60%", padding: "10px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary">Enregistrer</button>
        </form>
      </div>
    </div>
  );
}

export default Paie;

// import React, { useState } from "react";
// import axios from 'axios';

// function Paie() {
//   const [formData, setFormData] = useState({
//     employee_id: '',
//     mois: '',
//     du: '',
//     au: '',
//     date_embauche: '',
//     salaire_base: '',
//     situation_familiale: '',
//     enfants_charge: '',
//     taux_cimr: '',
//     taux_assistance_maladie: '',
//     assurance_retraite_complementaire: '',
//     interet_credit_logement: '',
//     retenue_pret: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8000/api/payements', formData)
//       .then(response => {
//         console.log('Paiement créé avec succès', response.data);
//       })
//       .catch(error => {
//         console.error('Erreur lors de la création du paiement', error);
//       });
//   };

//   return (
//     <div>
//       <div className="main-title" style={{ marginBottom: "30px" }}>
//         <h3 style={{ textTransform: "uppercase" }}>PAYMENT </h3>
//       </div>

//       <div className="payment">
//         <h3>Payment / Fiche de paiement</h3>
//         <form onSubmit={handleSubmit}>
//           <div style={{ display: "flex" }}>
//             <div style={{ width: "50%" }}>
//               <h4 style={{ paddingLeft: "20px", fontStyle: "italic" }}>
//                 Employés
//               </h4>
//               <hr style={{ width: "95%" }} />
//               <div style={{ margin: "30px 10px 10px 10px" }}>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "10px 12px",
//                   }}
//                 >
//                   <label>Employé</label>
//                   <select
//                     id="employee_id"
//                     name="employee_id"
//                     value={formData.employee_id}
//                     onChange={handleChange}
//                     style={{
//                       display: "flex",
//                       alignSelf: "flex-end",
//                       width: "60%",
//                       padding: "10px",
//                     }}
//                   >
//                     <option value="employes">Selectionner un employés</option>
//                     <option value="employes0">Employés 0</option>
//                     <option value="employes1">Employés 1</option>
//                     <option value="employes2">Employés 2</option>
//                   </select>
//                 </div>
//                <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "10px 12px",
//                   }}
//                 >
//                   <label>Mois</label>
//                   <input
//                     type="text"
//                     style={{
//                       display: "flex",
//                       alignSelf: "flex-start",
//                       width: "60%",
//                       padding: "10px",
//                     }}
//                   />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "10px 12px",
//                   }}
//                 >
//                   <label>Du</label>
//                   <input
//                     type="date"
//                     style={{ width: "60%", padding: "10px" }}
//                   />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "10px 12px",
//                   }}
//                 >
//                   <label>Au</label>
//                   <input
//                     type="date"
//                     style={{ width: "60%", padding: "10px" }}
//                   />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "10px 12px",
//                   }}
//                 >
//                   <label>date d'embauche</label>
//                   <input
//                     type="date"
//                     style={{ width: "60%", padding: "10px" }}
//                   />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "10px 12px",
//                   }}
//                 >
//                   <label>Salaire de base</label>
//                   <input
//                     type="text"
//                     style={{ width: "60%", padding: "10px" }}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div style={{ width: "50%" }}>
//               <h4 style={{ paddingLeft: "20px", fontStyle: "italic" }}>
//                 Déductions & retenues
//               </h4>
//               <hr style={{ width: "95%" }} />
//               <div style={{ margin: "30px 10px 10px 10px" }}>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "10px 12px",
//                   }}
//                 >
//                   <label>Situation familiale</label>
//                   <input
//                     type="text"
//                     style={{ width: "60%", padding: "10px" }}
//                   />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "10px 12px",
//                   }}
//                 >
//                   <label>Enfants à charge</label>
//                   <input
//                     type="text"
//                     style={{ width: "60%", padding: "10px" }}
//                   />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "10px 12px",
//                   }}
//                 >
//                   <label>Taux CIMR</label>
//                   <input
//                     type="text"
//                     style={{ width: "60%", padding: "10px" }}
//                   />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "10px 12px",
//                   }}
//                 >
//                   <label>Taux Assistance Maladie</label>
//                   <input
//                     type="text"
//                     style={{ width: "60%", padding: "10px" }}
//                   />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "10px 12px",
//                   }}
//                 >
//                   <label>Assurance Retraite Complémentaire</label>
//                   <input
//                     type="text"
//                     style={{ width: "60%", padding: "10px" }}
//                   />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "10px 12px",
//                   }}
//                 >
//                   <label>Intérert crédit logement</label>
//                   <input
//                     type="text"
//                     style={{ width: "60%", padding: "10px" }}
//                   />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "10px 12px",
//                   }}
//                 >
//                   <label>Retenue pret</label>
//                   <input
//                     type="text"
//                     style={{ width: "60%", padding: "10px" }}
//                   />
//                 </div>
//               </div>
//               </div>
//             </div>

//             {/* Ajoutez la deuxième moitié du formulaire ici */}

//           </div>
//           <button className="btn btn-primary">Enregistrer</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Paie;
