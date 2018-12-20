import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './components/Home/Home';
import List from './components/Catalogue/List';
import NeedsForm from './components/Needs/NeedsForm';
import Sheet from './components/Product/Sheet';
import ChooseProducts from './components/Assessment/ChooseProducts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/liste-produits" component={List} />
          <Route path="/formulaire-besoins" component={NeedsForm} />
          <Route path="/fiche-produits" component={Sheet} />
          <Route path="/evaluation-produits" component={ChooseProducts} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
