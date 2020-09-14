import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddPath from './components/AddPath';
import RoadList from './components/RoadList';
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
        <Row className="row vdivide">
          <Col className="col-xs-6" xs={6} md={6}> <RoadList /> </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
