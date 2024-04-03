import React from "react";

function Inscription() {
  return (
    <div id="inscription">
      <div className="auth">
        <form>
          <div className="mb-3">
            <label for="prenom" className="form-label">
              Prénom
            </label>
            <input type="text" className="form-control" id="prenom" />
          </div>
          <div className="mb-3">
            <label for="nom" className="form-label">
              Nom
            </label>
            <input type="text" className="form-control" id="nom" />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btnSubmit mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Inscription;
