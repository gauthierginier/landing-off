import React, { Component } from 'react'
import Equipe  from '../../Components/Equipe'

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>Qui sommes nous ?</h1>
        <h2>Notre activité</h2>
        <p>Officium Conseil est une agence de Chasseurs de Talents.
            Nous accompagnons nos clients dans leur projet de recrutement, de l'identification du besoin au coaching du collaborateur.
            </p>
            <h2>Nos valeurs</h2>
            <p>La valorisation des compétences aux Antilles ainsi que le retour de celles qui sont parties est notre mission de tous les jours.
                French Caribbean #BestPlaceToWork</p>
            <Equipe/>
      </div>
    )
  }
}
