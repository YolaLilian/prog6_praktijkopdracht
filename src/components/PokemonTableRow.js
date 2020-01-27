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
                <td>{this.props.obj.baby}</td>
                {/* <td>{this.props.obj.teen}</td>
                <td>{this.props.obj.adult}</td> */}
                <td>
                    <Link className="edit-link" to={"/edit-pokemon/" + this.props.obj._id}>
                        Edit
                    </Link>
                    {/* <Link className="edit-link" to={"edit-pokemon/" + this.props.obj._id}>
                        Change this pokemon!
                    </Link> */}
                    {/* <Button onClick={<Link to={"edit-pokemon/" + this.props.obj_id} size="lg" variant="outline-info"></Link>}>Edit this poor Pokemon</Button> */}
                    <Button onClick={this.deletePokemon} size="lg" variant="outline-danger">Delete this pokemon from existance</Button>
                    
                    
                </td>
            </tr>
        );
    }
}