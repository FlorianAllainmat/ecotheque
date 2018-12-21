import React, { Component } from 'react';
import Database from '../Database';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row, Container
} from 'reactstrap';
import '../Catalogue/List.scss';

class ChooseProducts extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: Database
     }
  }
  render() { 
    console.log(this.state.data);
    return ( 
      <Container fluid className="mb-3">
        <Row className="mt-3 mb-2 text-center">
          <Col>
            <h3>Liste de dispositifs</h3>
          </Col>
        </Row>
        <Row>
          {this.state.data.map(element => {
            let cssSapin = "";
            if(element.energyClass === "F" || element.energyClass === "E"){
              cssSapin = "text-danger";
            }
            if(element.energyClass === "D" || element.energyClass === "C"){
              cssSapin = "text-warning";
            }
            if(element.energyClass === "B" || element.energyClass === "A"){
              cssSapin = "text-success";
            }
            return (
              <Col sm="12" md="6" xl="4" key={element.id}>
                <Card className="card-element mb-2 mt-2">
                  <CardImg className="card-image"
                    top
                    src={element.image}
                    alt="Card image cap"
                  />
                  <CardBody className="card-text">
                    <CardTitle>{element.model}</CardTitle>
                    <Row>
                      <Col lg="7" sm="6">
                        <CardSubtitle>{element.category}</CardSubtitle>
                        <CardText>For {element.need}</CardText>
                      </Col>
                      <Col lg="5" sm="6">
                      <CardText>
                        Classe {element.energyClass} 
                        <br />
                        <span className={`${cssSapin} btn-lg`}>
                        <i className="fas fa-tree"></i></span>
                      </CardText> 
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
     );
  }
}
 
export default ChooseProducts;