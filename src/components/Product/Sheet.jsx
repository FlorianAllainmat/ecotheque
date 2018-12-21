import React, { Component } from 'react';
import {
  Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import './Sheet.scss';
import data from '../../components/Database';

class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  /* componentDidMount() {
    fetch('http://192.168.1.96:8000/api/products/271')
      .then(res => res.json())
      .then(data => this.setState({ data }));
  } */
  componentDidMount() {
    this.setState ({ data : data[27]})
  }

  render() {
    const amovible = (this.state.data.batteryMovable) ? "Oui" : "Non";

    console.log(this.state.data);
    const { data } = this.state;
    return (
      <Container className="Sheet" fluid>
        <Row className="prod align-items-center">
          <Col className="imgprod" lg="6" md="6" sm="12">
            <img src={data.image} className="img-fluid" alt="" />
          </Col>
          <Col lg="6" md="6" sm="12">
            <p>{data.description}</p>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="12">
            <ul>
              <li>Catégorie: {data.category}</li>
              <li>Marque: {data.brand}</li>
              <li>Modèle: {data.model}</li>
              <li>Taille écran: {data.size}</li>
              <li>Prix: {data.price} €</li>
            </ul>
          </Col>
          <Col lg="6" md="6" sm="12">
            <ul>
              <li>Classe énergétique: {data.energyClass}</li>
              <li>Gaz effet de serre: {data.ges}</li>
              <li>Batterie amovible: {amovible}</li>
              <li>Taux de recyclage de la batterie: {data.batteryRecyclability}</li>
              <li>Autonomie: {data.autonomy}</li>
              <li>Note écologique: {data.ecologyNotice}</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="alternative">Produits Alternatifs</h3>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <CardGroup>
              <Card>
                <CardImg top width="100%" src="https://static.fnac-static.com/multimedia/Images/FR/MDM/f1/0b/78/7867377/1505-1/tsp20181122140652/TV-Brandt-B4040-Full-HD-39-5.jpg" alt="TV Brandt" />
                <CardBody>
                  <CardTitle>TV Brandt</CardTitle>
                  <CardSubtitle>39 pouces</CardSubtitle>
                  <CardText>Produit de la marque Brandt à faible impact énergétique.</CardText>
                  <Button className="butAlte">Voir la fiche du produit</Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg top width="100%" src="https://static.fnac-static.com/multimedia/Images/34/36/30/35/5064754-1505-1505-1/tsp20170824104929/TV-Strong-SRT39HX100339-LED-HD-Noir-39.jpg#432d56d7-6012-42dc-8863-e93ea5f767d2" alt="TV Strong" />
                <CardBody>
                  <CardTitle>TV Strong</CardTitle>
                  <CardSubtitle>39 pouces</CardSubtitle>
                  <CardText>Produit de la marque Strong à faible impact énergétique.</CardText>
                  <Button className="butAlte">Voir la fiche du produit</Button>
                </CardBody>
              </Card>
              <Card>
                <CardImg top width="100%" src="https://static.fnac-static.com/multimedia/Images/FR/MDM/14/f0/7b/8122388/1505-1/tsp20181017135236/TV-Samsung-UE43NU7405-UHD-4K-Smart-TV-43.jpg" alt="TV Samsung" />
                <CardBody>
                  <CardTitle>TV Samsung</CardTitle>
                  <CardSubtitle>43 pouces</CardSubtitle>
                  <CardText>Téléviseur 4k de la marque Samsung.</CardText>
                  <Button className="butAlte">Voir la fiche du produit</Button>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Sheet;