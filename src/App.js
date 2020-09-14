import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AddPath from './components/AddPath'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <Container className="container">
        <Row>
          <Col className="text-left" xs={6} md={6}>
              <div className="i"></div>
              <div className="text-logo">Saunter</div>           
          </Col>
          <Col className="text-right" xs={6} md={6}> <AddPath /> </Col>
        </Row>
        <hr />
      </Container>
    )
  }
}

export default App;
