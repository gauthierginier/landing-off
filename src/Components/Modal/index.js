import React, { Component } from 'react';
import axios from 'axios';


class Modal extends Component {

  state = {
    email: '',
    prenom: '',
    nom: '',
    tel: '',
    msg: '',
    poste: '',
  }

  getForm=(obj)=>{

    axios({
  method: 'get',
  headers : {
    'Accept': 'application/x-www-form-urlencoded',
    'Content-Type' : 'application/x-www-form-urlencoded'
    },
  url: 'http://ansavfesa.com/konektey/api-officium/public/index.php',
  params: {
    prenom: obj.prenom,
    nom: obj.nom,
    mail: obj.email,
    tel: obj.tel,
    msg: obj.msg,
    poste: this.props.titre,
    type : "candidature",
    action : "mail-to"
  }
});
  }

  

    render() {
        return (

  <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Votre candidature</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
  <div className="form-group">
  <div className="form-row">
    <div className="col">
      <input type="text" className="form-control" placeholder="prénom" id="prenom"   onChange={(e)=>{this.setState({
      prenom: e.target.value
    })}} />
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="nom"  id="nom"  onChange={(e)=>{this.setState({
      nom: e.target.value
    })}} />
    </div>
  </div>
    <label for="exampleFormControlInput1">votre adresse email</label>
    <input type="email" className="form-control" id="adressemail" placeholder="nom@exemple.com"  onChange={(e)=>{this.setState({
      email: e.target.value
    })}} />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">votre numéro de téléphone</label>
    <input type="tel" className="form-control" id="numtel" placeholder="0690 XX XX XX"  onChange={(e)=>{this.setState({
      tel: e.target.value
    })}} />
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Votre message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="15" onChange={(e)=>{this.setState({
      msg: e.target.value
    })}} ></textarea>
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
        <button type="button" className="btn btn-primary"   onClick={()=>{this.getForm(this.state)}} data-dismiss="modal" >postuler !</button>
      </div>
    </div>
  </div>

</div>


         );
    }
}


export default Modal;