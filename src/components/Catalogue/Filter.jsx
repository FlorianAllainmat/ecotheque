import React, { Component } from 'react';
import {
  Row,
  Col,
  Input,
  Button,
  Form,
} from 'reactstrap';
import './Filter.scss';


class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="Filter">
        <Form onSubmit={this.searchSubmit}>
          <Row>
            <Col xs="4" className="padding">
              <Input
                className="search1"
                placeholder="Restaurant"
                onChange={this.onChange}
                name="keyword"
              />
            </Col>
            <Col xs="3">
              <Input
                type="select"
                className="search2"
                placeholder="Catégories"
              >
                
              </Input>
              <Input
                type="select"
                className="search2"
                placeholder="Marque"
              >
                <option>Lonovo</option>
                <option>Asus</option>
                <option>Dell</option>
                <option>Hp</option>
                <option>Apple</option>
                <option>Acer</option>
                <option>Samsumg</option>
              </Input>
              <Input
                type="select"
                className="search2"
                placeholder="Besoin"
              >
                <option>Gaming</option>
                <option>Video</option>
                <option>Bureautique</option>
                <option>Désign</option>
              </Input>
              <Input
                type="select"
                className="search2"
              >
                <option>Pour combien ?</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </Input>
            </Col>
            <Col xs="4">
              <Button
                color="warning"
                className="btn-submit submit-button all-btn"
              >
                Rechercher
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}


export default Filter;
