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
import ViewPokemon from "./components/view-pokemon.component";
import ListPokemon from "./components/list-pokemon.component";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="#FECA1B" variant="dark" >
            <Container>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/"} className="nav-link">
                    Prog6 Praktijkopdracht 2
                  </Link>
                </Nav>
                
                <Nav>
                  <Link to={"/create-pokemon"} className="nav-link">
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
                  <Route exact path='/' component={ListPokemon} />
                  <Route path="/create-pokemon" component={CreatePokemon} />
                  <Route path="/edit-pokemon/:id" component={EditPokemon} />
                  <Route path="/view-pokemon/:id" component={ViewPokemon} />
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
