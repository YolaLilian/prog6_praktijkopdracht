import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreatePokemon extends Component {

  constructor(props) {
    super(props)

    this.onChangeBabyPokemon = this.onChangeBabyPokemon.bind(this);
    this.onChangeTeenPokemon = this.onChangeTeenPokemon.bind(this);
    this.onChangeAdultPokemon = this.onChangeAdultPokemon.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      baby: '',
      teen: '',
      adult: ''
    }
  }

  onChangeBabyPokemon(e) {
    this.setState({ baby: e.target.value })
  }

  onChangeTeenPokemon(e) {
    this.setState({ teen: e.target.value })
  }

  onChangeAdultPokemon(e) {
    this.setState({ adult: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const pokemonObject = {
      baby: this.state.baby,
      teen: this.state.teen,
      adult: this.state.adult
    };

    axios.post('http://145.24.222.110:8000/posts/', pokemonObject)
    .then(res => console.log(res.data_))
    // console.log('Pokemon successfully created!!!!!!!');
    // console.log(`Baby: ${this.state.baby}`);
    // console.log(`Teen: ${this.state.teen}`);
    // console.log(`Adult: ${this.state.adult}`);

    this.setState({
      baby: '', 
      teen: '', 
      adult:'' 
    });
  }

  render() {
    return (
      <div class="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Baby">
            <Form.Label>Baby evolution</Form.Label>
            <Form.Control type="text" value={this.state.baby} onChange={this.onChangeBabyPokemon} />
          </Form.Group>
          <Form.Group controlId="Teen">
            <Form.Label>Teen evolution</Form.Label>
            <Form.Control type="text" value={this.state.teen} onChange={this.onChangeTeenPokemon} />
          </Form.Group>
          <Form.Group controlId="Adult">
            <Form.Label>Adult evolution</Form.Label>
            <Form.Control type="text" value={this.state.adult} onChange={this.onChangeAdultPokemon} />
          </Form.Group>
          <Button variant="outline-success" size="lg" block="block" type="submit">
            Create Pokemon!
          </Button>
        </Form>
      </div>
    );
  }
}