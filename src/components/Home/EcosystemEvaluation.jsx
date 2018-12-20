import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class EcosystemEvaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <section id="ecosystem">
      <Row>
        <Col>
          <h2>
            Vous devez remplacer plusieurs dispositifs? Choisissez responsable!
          </h2>
          <p>
            Indiquez les dispositifs que vous souhaitez remplacer, nous vous proposerons les solutions les plus efficaces et moins énergivores!
          </p>
        </Col>
      </Row> 
    </section>
    );
  }
}
 
export default EcosystemEvaluation;