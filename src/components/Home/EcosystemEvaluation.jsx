import React, { Component } from 'react';
import { 
  Row, 
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap';
import './EcoSystemEvaluation.scss';

const evalu = 'media/eval.png';
const search = 'media/search.png';

class EcoSystemEvaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Row className="EcoSystemEvaluation">
        <Col xs="12" md="6">
          <Card mb-1 className="card-element">
            <CardImg className="card-image"
              src={evalu}
              alt="Card image"
            />
            <CardBody className="card-truc">
              <CardTitle>Vous voulez évaluer vos matériaux ?</CardTitle>
              <CardSubtitle>Comment trouver la bonne alernative entre Technologie et Ecologie</CardSubtitle>
              <CardText>Le but de ce test est de vous montrer à quel point nous pouvons améliorer nos environnement avec des gestes simples et de vous donner une visualisation ecologique de la Technologie. </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
          <Card className="card-element">
            <CardImg className="card-image"
              src={search}
              alt="Card image cap"
            />
            <CardBody className="card-truc">
              <CardTitle>Vous voulez choisir un outils informatique écologique ?</CardTitle>
              <CardSubtitle>Comment trouver la bonne alernative entre Technologie et Ecologie</CardSubtitle>
              <CardText>Le but de ce test est de vous montrer à quel point nous pouvons améliorer nos environnement avec des gestes simples et de vous donner une visualisation ecologique de la Technologie.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row> 
    );
  }
}
 
export default EcoSystemEvaluation;