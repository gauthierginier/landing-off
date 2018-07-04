import React, { Component } from 'react'
import Good from '../../Images/goodJob.png'
import Button from 'react-dom'
import Card  from '../../Components/Card'

export default class Fire extends Component {
  
  render() {
    return (
        <div className="Fire">
            <div className="cardJob">
            <Card date="ASAP" titre="Auditeur Financier" remuneration="Selon profil" type="CDI" lieu="Baie-Mahault, 971"  mission="Vous intervenez sur des missions de commissariat aux comptes ou sur des missions financières à forte valeur ajoutée.
Vous mettez en œuvre la méthodologie d'audit du client et portez une attention particulière à la communication financière de ces groupes dans plusieurs référentiels.
Vous êtes amené(e) à intervenir sur un ensemble de problématiques et d'enjeux financiers afin d'apporter à nos clients et à leurs interlocuteurs l'assurance et la fiabilité nécessaires à leur progression."
profil="● Compétences : 
- Goût pour les chiffres
- Analyse financière
- Maîtrise des bases en comptabilité 
● Expérience
- 1 à 2 ans d’expérience
● Personnalité
- Très bon relationnel
- Autonomie
- Force de proposition" />
        <Card date="ASAP" titre="Chef de projet ERP Comptabilité" remuneration="Selon profil" type="CDI" lieu="Lamentin, 972" mission="Au sein de la filiale informatique du client vous évoluerez autour d’une équipe composé dee chef de projets et de développeurs. Vous serez en charge de l’administration et du développement de l’ERP SAGE X3
● Vos missions
- Participer aux gap analysis
- Définir la conception et rédige les spécifications fonctionnelles détaillées
- Définir les tests et participe aux recettes
- Coordonner, synthétiser et assure la qualité des validations prononcées
- Faire circuler et diffuse l'information côté maîtrise d'œuvre
- Garantire le respect du cahier des charges
- Garantire le respect des délais et des coûts
- Encadrer des consultants fonctionnels externes sur les projets ou le support fonctionnel." profil="● Competences :
- Très bonnes compétences fonctionnelles en Supply Chain
- Anglais courant
- Capacité d'analyse et de synthèse
- Maitrise de Sage X3
● Formation
- Ingénieur ou équivalent universitaire
● Experience
- 3 ans minimum d'expérience sur de gestion d’ERP à fort enjeux internationales
- Une expérience valorisante en comptabilité
● Personnalité
- Très bon relationnel
- Autonomie
- Force de proposition" />
            <Card date="ASAP" titre="Chef de projet ERP Grande Distribution" remuneration="Selon profil" type="CDI" lieu="Baie Mahault" />
            </div>
            <div className="cardJob">
            <Card date="ASAP" titre="Auditeur Financier" remuneration="Selon profil" type="CDI" lieu="Baie Mahault" />
            <Card date="ASAP" titre="Auditeur Financier" remuneration="Selon profil" type="CDI" lieu="Baie Mahault" />
            <Card date="ASAP" titre="Auditeur Financier" remuneration="Selon profil" type="CDD" lieu="Baie Mahault" />
            </div>
            <div className="cardJob">
            <Card date="ASAP" titre="Auditeur Financier" remuneration="Selon profil" type="CDI" lieu="Baie Mahault" />
            <Card date="ASAP" titre="Auditeur Financier" remuneration="Selon profil" type="CDI" lieu="Baie Mahault" />
            </div>
            </div>
    )
  }
}


