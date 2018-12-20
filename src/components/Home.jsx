import React, { Component } from 'react';
import Search from './Search';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <div>
      <Search />
    </div> );
  }
}
 
export default Home;