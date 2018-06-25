import React, { Component } from 'react'

export default class Recruteur extends Component {
  render() {
    return (
      <div className="Recruteur">
        <h1>hello recruteur</h1>
    {/*     Nom et Prenom         */}
        <div className="underline">
        <span>BONJOUR, MOI C'EST</span>
        <span className="block-input">
        <input className="firstname" type="text" placeholder="Prénom"></input>
        <span>JE RECHERCHE ACTUELLEMENT</span>
        <input className="name" type="text" placeholder="Poste recherché"></input> .
        </span>
    {/*     Entreprise et poste        */}
        <div className="underline">
        <span>JE REPRESENTE</span>
        <span className="block-input">
        <input className="companyName" type="text" placeholder="Nom de l'entreprise"></input>
        <span>EN TANT QUE</span>
        <input className="name" type="text" placeholder="Poste recherché"></input> .
        </span>
        </div>
      </div>
      </div>
    )
  }
}
