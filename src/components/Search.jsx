import React, { Component } from 'react';
import './Search.scss';
import { Input, Button, Form } from 'reactstrap';
import { withRouter } from 'react-router';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      personcapacity: 0,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  pageResult() {
    //const { history } = this.props;
    //const query = queryString.stringify(this.state);
    //history.push(`/result?${query}`);
  }

  render() {
    const { keyword } = this.state;
    return (
      <div className="search">
        <Form onSubmit={() => this.pageResult()}>
          <div
            className="background"
            style={{ backgroundImage: `url("https://www.mon-environnement.com/wp-content/uploads/2017/03/tree-1750784_1920-1080x675.jpg")`, height: '50vw' }}
          >
            <h1>
              La Technologie Sobre à portée de MAIN
            </h1>

            <Input
              className="search1"
              placeholder="Restaurant"
              style={{ width: '25vw' }}
              value={keyword}
              onChange={this.onChange}
              name="keyword"
            />
            <Button className="search-button btn-submit">Rechercher</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default withRouter(Search);