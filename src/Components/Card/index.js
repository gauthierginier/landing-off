import React, { Component } from 'react';
import Signing from '../../Images/signing.png';
import Money from '../../Images/moneyBag.png';
import Time from '../../Images/time.png';
import Marker from '../../Images/MarkerMap.png';
import Contrat from '../../Images/contract.png';
import Epingle from '../../Images/epingle.png'
import axios from 'axios';


class Card extends Component {

    render() {
        return (

         
  <div className="card">
  <div className="card-content">
    <span className="card-title grey-text text-darken-4" >{this.props.titre}</span>

    <div className="divIcon">
   <div className="divImgCard"><img src={Money} alt="money"/><p>{this.props.remuneration}</p></div>
   <div className="divImgCard"><img src={Time} alt="time"/><p>{this.props.date}</p></div>
    <div className="divImgCard"><img src={Marker} alt="marker"/>{this.props.lieu}<p></p></div>
    <div className="divImgCard"><img src={Contrat} alt="contrat"/><p>{this.props.type}</p></div>
    </div>
   

    <span className="card-title activator " data-dismiss="modal">En savoir plus...</span>
  </div>
  <div className="card-reveal">
    <p className="card-title grey-text text-darken-4"><span><i className="material-icons right">close</i></span><h5>Mission :</h5></p>
    <p>{this.props.mission}</p>
    <h5 className="card_title">Profil :</h5>
    <p>{this.props.profil}</p>
    {/*bouton modal*/}
<button type="button" className="btn btn-primary" data-toggle="modal" data-target={this.props.modal} onClick={this.props.fonctionTitre}>
  Postuler !
</button>
  </div>
{/*modal*/}


</div>
    
         );
    }
}


export default Card;