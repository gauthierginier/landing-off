import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Jumbotron extends Component {
  render() {
    return (
        <div className="Jumbotron"> 
            <p class="selectBis">Bienvenue, Vous etes</p>
            <div>
            </div>
          <div className="Choix"> 
          <NavLink to="/Candidat" className="Choix">TALENT</NavLink>
          <NavLink to="/Recruteur" className="Choix">ENTREPRISE</NavLink>
        </div>
        <p class="selectBis">Choisissez votre profil sur mesure.</p>
        </div>
    )
  }
}
