import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      test : [],
    }
  }
  componentDidMount() {
    fetch(`http://localhost:4000/api/test`)
      .then(results => results.json())
      .then((data) => {
        this.setState({ test : data });
      });
  }

  render() { 
    const { test } = this.state ;
    console.log(test)
    return ( 
    <div>    
      test de fetch           
    </div> );
  }
}
 
export default Test;