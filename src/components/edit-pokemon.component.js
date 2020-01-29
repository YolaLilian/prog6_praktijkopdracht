import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom';

class EditPokemon extends Component {

  constructor(props) {
    super(props)

    this.onChangeBabyPokemon = this.onChangeBabyPokemon.bind(this);
    this.onChangeTeenPokemon = this.onChangeTeenPokemon.bind(this);
    this.onChangeAdultPokemon = this.onChangeAdultPokemon.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      baby: '',
      teen: '',
      adult: '',
      redirect: false
    }
  }

  componentDidMount() {
    axios.get('http://145.24.222.110:8000/posts/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          baby: res.data.baby,
          teen: res.data.teen,
          adult: res.data.adult
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://145.24.222.110:8000/posts/' + this.props.match.params.id, pokemonObject)
      .then((res) => {
        console.log(res.data)
        console.log('Pokemon updated successfully!! Pika Pika!')
      }).catch((error) => {
        console.log(error)
      })
      .then(() => this.setState({redirect: true}));
  }
  
  
  render() {
    const { redirect } = this.state;
  
    if (redirect) {
      return <Redirect to="/" />
    }
    
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Baby">
          <Form.Label>Baby</Form.Label>
          <Form.Control type="text" value={this.state.baby} onChange={this.onChangeBabyPokemon} />
        </Form.Group>

        <Form.Group controlId="Teen">
          <Form.Label>Teen</Form.Label>
          <Form.Control type="text" value={this.state.teen} onChange={this.onChangeTeenPokemon} />
        </Form.Group>

        <Form.Group controlId="Adult">
          <Form.Label>Adult</Form.Label>
          <Form.Control type="text" value={this.state.adult} onChange={this.onChangeAdultPokemon} />
        </Form.Group>

        <Button variant="outline-info" size="lg" block="block" type="submit">
          Update Pokemon
        </Button>
      </Form>
    </div>);
  }
}

export default withRouter(EditPokemon);