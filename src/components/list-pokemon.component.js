import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import PokemonTableRow from './PokemonTableRow'; 

export default class ListPokemon extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    axios.get('http://145.24.222.110:8000/posts/')
    .then(res => {
      this.setState({ 
        pokemons: res.data.items
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  DataTable() {

    // for (var key in myObject) {
    //   arr.push(myObject[key]);
    // }
    return this.state.pokemons.map((res, i) => {
      return <PokemonTableRow obj={res} key={i} />;
    });
  }
  
  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Baby form</th>
              {/* <th>Teen form</th>
              <th>Adult form</th> */}
              <th>Action</th> 
            </tr>
          </thead>
          <tbody>
            {this.DataTable()}
          </tbody>
        </Table>
      </div>
    );
  }
}