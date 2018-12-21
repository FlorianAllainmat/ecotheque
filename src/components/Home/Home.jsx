import React, { Component } from 'react';
import Search from './Search';
import SpecificNeed from './SpecificNeed';
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
        <SpecificNeed />
        <EcosystemEvaluation />
        <Concept />
        <Community />
      </div>
    );
  }
}

export default Home;