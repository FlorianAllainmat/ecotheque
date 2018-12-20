import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <section id='Community'>
        <Row>
          <Col>
            <h2>La Communauté</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare dui quis odio venenatis, at volutpat metus tincidunt. Ut semper, nisl nec fringilla accumsan, erat magna lacinia quam, a aliquet arcu tortor in erat.
            </p>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Community;