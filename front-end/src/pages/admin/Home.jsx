import React from "react";
import {
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";

function Home() {
  //

  return (
    <>
      <div className="main-title">
        <h3>DASHBORD</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>EMPLOYES</h3>
            <GrUserWorker className="card_icon" />
          </div>
          <h1>70</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>DEPARTEMENTS</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>PRESENTS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>53</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
