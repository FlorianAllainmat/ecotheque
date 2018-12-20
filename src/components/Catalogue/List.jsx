import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import './List.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
    };
  }

  componentDidMount() {
    fetch(`http://192.168.1.96:8000/api/products/271`)
      .then(results => results.json())
      .then((data) => {
        this.setState({ data : data["hydra:member"]});
      });
  }
  render() {
    console.log(this.state.data)
    return (
      <div className="Filter">
        <Row>
          <Col sm="12" md="6" xl="4">
          
          {this.state.data.map( element => (
            <Card key={element.id} className="card-Element">
              <CardImg
                top
                width="400px"
                height="175px"
                src= {element.image} 
              />
              <CardBody>
                <CardTitle>Modèle = {element.model}</CardTitle>
                <CardSubtitle>Prix = {element.price}$</CardSubtitle>
                <CardText>Description = {element.description}</CardText>
              </CardBody>
            </Card>
          ))};
          </Col>
        </Row>
      </div>
    );
  }
}

export default List ;