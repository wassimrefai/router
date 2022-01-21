import React, { Component } from 'react';
import { Navbar,Nav,Container} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from '../views/Contact';
import Home from '../views/Home';
import Movies from '../views/Movies';

export default class Navbarlist extends Component{
    render(){
        return(
            <>
             <Router>
            <Navbar bg="dark" variant="dark">
              <Container>
              <Navbar.Brand href="#home">Egybest</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link}  to={"/home"}>Home</Nav.Link>
                <Nav.Link as={Link}  to={"/movies"}>Movies</Nav.Link>
                <Nav.Link as={Link}  to={"/contact"}>Contact</Nav.Link>
              </Nav>
              </Container>
            </Navbar>
            <div>
            <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
            </div>
            </Router>
           
          </>
        )
    }
}
