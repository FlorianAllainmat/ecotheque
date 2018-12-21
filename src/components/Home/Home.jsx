import React, { Component } from 'react';
import Search from './Search';
import EcosystemEvaluation from './EcosystemEvaluation';
import Concept from './Concept';
import Community from './Community';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() { 
    return ( 
      <div>
        <Search />
        <EcosystemEvaluation />
        <Concept />
        <Community />
      </div>
    );
  }
}

export default Home;