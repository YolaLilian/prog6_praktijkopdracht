import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Redirect, withRouter } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

class PokemonTableRow extends Component {
    constructor(props) {
        super(props);
        this.deletePokemon = this.deletePokemon.bind(this);

        this.state = {
            redirect: false,
            showModal: false
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

    handleShow = () => this.setState({ showModal: true });
    handleHide = () => this.setState({ showModal: false });
    
    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />
        }

        return (
            <>
                <tr>
                    <td>
                        {/* {this.props.obj.baby} */}
                        {/* <showModel /> */}
                        <Button variant="outline-success" onClick={this.handleShow}>
                            {this.props.obj.baby}
                        </Button>
                    </td>
                    <td>
                        <Button variant="outline-info" size="sm" href={"edit-pokemon/" + this.props.obj._id}>Edit</Button>
                    </td>
                    <td>
                        <Button onClick={this.deletePokemon} size="sm" variant="outline-danger">Delete</Button>           
                    </td>
                </tr>

                <Modal show={this.state.showModal} onHide={this.handleHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Baby form: {this.props.obj.baby}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Teen form: {this.props.obj.teen}<br />
                        Adult from: {this.props.obj.adult}
                        </Modal.Body>
                    <Modal.Footer>
                    <Button variant="outline-dark" onClick={this.handleHide}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default withRouter(PokemonTableRow);