import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreatePokemon from "./components/create-pokemon.component";
import EditPokemon from "./components/edit-pokemon.component";
import ListPokemon from "./components/list-pokemon.component";
import Logo from "./images/Not-the-real-Pokemon-API.png"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
                  <img src={Logo} alt="website logo" />
          <Navbar bg="#FECA1B" variant="dark" >
            <Container>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/pokemon"} className="nav-link">
                    Pokemon List
                  </Link>
                </Nav>
                <Nav>
                  <Link className="nav-link" to={"/pokemon"}>
                    |
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/pokemon/create"} className="nav-link">
                    Create Pokemon
                  </Link>
                </Nav>
              </Nav>

            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path='/pokemon' component={ListPokemon} />
                  <Route path="/pokemon/create" component={CreatePokemon} />
                  <Route path="/pokemon/:id/edit" component={EditPokemon} />
                  <Route path="/pokemon/:id" component={ListPokemon} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
