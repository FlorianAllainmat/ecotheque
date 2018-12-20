import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class SpecificNeed extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <section id="specificNeed">
      <Row>
        <Col>
          <h2>
            Vous avez un besoin matériel? Choisissez soutenable!
          </h2>
          <p>
            Indiquez le type de dispositif dont vous avez besoin ainsi que l'utilisation prévue. Nous vous conseillerons la solution la plus écologique!
          </p>
        </Col>
      </Row> 
    </section>
    );
  }
}
 
export default SpecificNeed;