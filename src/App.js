import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import {Route,Switch,HashRouter} from 'react-router-dom';
import Recruteur from './Components/Recruteur'
import Candidat from './Components/Candidat'
import NotFound from './Components/notFound'
import Jumbotron from './Components/Jumbotron'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
import About from './Components/About'
import Login from './Components/Login'


class App extends Component {
  render() {
    return (
      <div className="App">
     
      <HashRouter>
     
      <div>
      <Menu/>
       <Switch>
         <Route exact path="/" component={Home} />
          <Route path="/Candidat" component={Candidat} />
          <Route path="/Recruteur" component={Recruteur} />
          <Route path="/About" component={About} />
          <Route path="/Login" component={Login} />
          <Route path="*" component={NotFound} />
          </Switch>
          <Footer/>
          </div>
			</HashRouter>
   
      </div>
    );
  }
}

export default App;
