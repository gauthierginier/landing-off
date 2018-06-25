import React, { Component } from 'react'
import Good from '../../Images/goodJob.png'
import Button from 'react-dom'
import Card  from '../../Components/Card'

export default class Fire extends Component {
  
  render() {
    return (
        <div className="Fire">


            <div className="cardJob">
            <Card nombre="1" titre="Auditeur Financier" remuneration="Selon profil" type="CDI" lieu="Baie-Mahault , GUADELOUPE" entreprise="???" />
            <Card nombre="2" titre="Chef de projet ERP Comptabilité" remuneration="Selon profil" type="CDI" lieu="Lamentin, MARTINIQUE" entreprise="???"/>
            <Card nombre="3" titre="Auditeur Financier" remuneration="Selon profil" type="CDI" lieu="Baie Mahault" entreprise="???"/>
            <Card nombre="4" titre="Auditeur Financier" remuneration="Selon profil" type="CDI" lieu="Baie Mahault" entreprise="???"/>
            </div>
            <div className="cardJob">
            <Card nombre="5" titre="Auditeur Financier" remuneration="Selon profil" type="CDI" lieu="Baie Mahault" entreprise="???"/>
            <Card nombre="6" titre="Auditeur Financier" remuneration="Selon profil" type="CDD" lieu="Baie Mahault" entreprise="???"/>
            <Card nombre="7" titre="Auditeur Financier" remuneration="Selon profil" type="CDI" lieu="Baie Mahault" entreprise="???"/>
            <Card nombre="8" titre="Auditeur Financier" remuneration="Selon profil" type="CDI" lieu="Baie Mahault" entreprise="???"/>
            </div>
            </div>
    )
  }
}
