import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
} from 'reactstrap';
import './List.scss';

class List extends Component {
constructor(props) {
super(props);
this.state = { 
data: [],
}
}

componentDidMount() {
fetch('http://192.168.1.96:8000/api/products/')
.then(res => res.json())
.then(data => this.setState({ data: data["hydra:member"]}));
}

render() { 
console.log(this.state.data);
return ( 
  <div className="List">
    <Row>
    {this.state.data.map(element => {
        return (
        <Col sm="12" md="6" xl="4">
          <Card className="card-element" key={element.id}>
            <CardImg className="card-image"
              top
              src={element.image}
              alt="Card image cap"
            />
            <CardBody className="card-text">
              <CardTitle>{element.model}</CardTitle>
              <CardSubtitle>{element.price}</CardSubtitle>
              <CardText>{element.need}</CardText>
            </CardBody>
          </Card>
        </Col>
      )})};
    </Row>
  </div>
  );
}
}

export default List;