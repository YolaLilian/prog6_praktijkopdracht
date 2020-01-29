import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Redirect, withRouter } from 'react-router-dom';

class PokemonTableRow extends Component {
    constructor(props) {
        super(props);
        this.deletePokemon = this.deletePokemon.bind(this);

        this.state = {
            redirect: false
        }
    }
    
    deletePokemon(e) {
        e.preventDefault();
        axios.delete('http://145.24.222.110:8000/posts/' + this.props.obj._id)
            .then((res) => {
                console.log('Pokemon deleted successfully!!!')
            }).catch((error) => {
                console.log(error)
            })
            .then(() => this.setState({ redirect: true}));
    }

    
    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />
        }
        
        return (
            <tr>
                <td>
                    {this.props.obj.baby}
                </td>
                <td>
                    <Button variant="outline-info" size="sm" href={"edit-pokemon/" + this.props.obj._id}>Edit</Button>
                </td>
                <td>
                    <Button onClick={this.deletePokemon} size="sm" variant="outline-danger">Delete</Button>           
                </td>
            </tr>
        );
    }
}

export default withRouter(PokemonTableRow);