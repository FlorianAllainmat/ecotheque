import React, { Component } from 'react';
import List from './List';
import Filter from './Filter';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <div>
      <Filter />
      <List clef={this.props.match.params.clef}/>
    </div> );
  }
}
 
export default Result;