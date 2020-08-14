import React from 'react';
import './App.css';
import Routes from '../../Routes/Routes.js';
import Nav from '../Nav/Nav'
import { BrowserRouter as Router} from 'react-router-dom';
import { Row, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <Router>
        <Container>
          <Row>
            <Col sm={3}><Nav/></Col>
            <Col sm={9}><Routes/></Col>
          </Row>
        </Container>
      </Router>
  );
}

export default App;
