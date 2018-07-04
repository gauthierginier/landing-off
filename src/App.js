import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import {Route,Switch,HashRouter} from 'react-router-dom';
import NotFound from './Components/notFound'
import Footer from './Components/Footer'
import Menu from './Components/Menu'


class App extends Component {
  render() {
    return (
      <div className="App">
      <HashRouter>
     
      <div>
      <Menu/>
       <Switch>
         <Route exact path="/" component={Home} />          <Route path="*" component={NotFound} />
          </Switch>
          <Footer/>
          </div>
			</HashRouter>
   
      </div>
    );
  }
}

export default App;
