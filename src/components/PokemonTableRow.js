import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class PokemonTableRow extends Component {
    constructor(props) {
        super(props);
        this.deletePokemon = this.deletePokemon.bind(this);
    }
    
    deletePokemon() {
        axios.delete('http://localhost:4000/posts/delete-pokemon' + this.props.obj._id)
            .then((res) => {
                console.log('Pokemon deleted successfully!!!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.baby}
                </td>
                <td>
                    <Button variant="outline-success" size="sm" href={"edit-pokemon/" + this.props.obj._id}>Edit</Button>
                </td>
                <td>
                    <Button onClick={this.deletePokemon} size="sm" variant="outline-danger">Delete this pokemon from existance</Button>           
                </td>
            </tr>
        );
    }
}