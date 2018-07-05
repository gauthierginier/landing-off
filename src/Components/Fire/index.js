import React, { Component } from 'react'
import Good from '../../Images/goodJob.png'
import Button from 'react-dom'
import Card  from '../../Components/Card'
import Modal from '../../Components/Modal'

export default class Fire extends Component {
  
    state = {
        selectedTitre : null,
        data : [
                {
                    date : 'ASAP',
                    titre : 'Auditeur Financier',
                    remuneration:'Selon profil',
                    type:'CDI',
                    lieu:'Baie-Mahault, 971',
                    mission:"Vous intervenez sur des missions de commissariat aux comptes ou sur des missions financières à forte valeur ajoutée. \n Vous mettez en œuvre la méthodologie d'audit du client et portez une attention particulière à la communication financière de ces groupes dans plusieurs référentiels. \n Vous êtes amené(e) à intervenir sur un ensemble de problématiques et d'enjeux financiers afin d'apporter à nos clients et à leurs interlocuteurs l'assurance et la fiabilité nécessaires à leur progression.",
                    profil:"● Compétences : \n - Goût pour les chiffres \n - Analyse financière \n - Maîtrise des bases en comptabilité \n ● Expérience \n - 1 à 2 ans d’expérience \n ● Personnalité \n - Très bon relationnel \n - Autonomie \n - Force de proposition",
                },
                {
                    date : 'ASAP',
                    titre : 'Chef de projet ERP Comptabilité',
                    remuneration:'Selon profil',
                    type:'',
                    lieu:'',
                    mission:'',
                    profil:'',    
                },
                {
                    date : 'ASAP',
                    titre : 'Chef de projet ERP Grande Distribution',
                    remuneration:'Selon profil',
                    type:'',
                    lieu:'',
                    mission:'',
                    profil:'',    
                },
                {
                    date : 'ASAP',
                    titre : '',
                    remuneration:'Selon profil',
                    type:'',
                    lieu:'',
                    mission:'',
                    profil:'',    
                },
                {
                    date : 'ASAP',
                    titre : '',
                    remuneration:'Selon profil',
                    type:'',
                    lieu:'',
                    mission:'',
                    profil:'',    
                },
                {
                    date : 'ASAP',
                    titre : '',
                    remuneration:'Selon profil',
                    type:'',
                    lieu:'',
                    mission:'',
                    profil:'',    
                },
                {
                    date : 'ASAP',
                    titre : '',
                    remuneration:'Selon profil',
                    type:'',
                    lieu:'',
                    mission:'',
                    profil:'',    
                },
                {
                    date : 'ASAP',
                    titre : '',
                    remuneration:'Selon profil',
                    type:'',
                    lieu:'',
                    mission:'',
                    profil:'',    
                }
            ]
    }

    getSelectedTitre=(titre)=>{
        this.setState({
            selectedTitre : titre,
        })
    }


  render() {

    console.log(this.state)
    return (
        <div className="Fire">
            <div className="cardJob">
            {this.state.data.map((el, i)=>{
                return (
                    <Card date={el.date} titre={el.titre} remuneration={el.remuneration} type={el.type} lieu={el.lieu}  mission={el.mission}
profil={el.profil} fonctionTitre={()=>{this.getSelectedTitre(el.titre)}} />
                    )
            })}

            
        
            <Modal titre={this.state.selectedTitre}/>
            </div>
            </div>
    )
  }
}


