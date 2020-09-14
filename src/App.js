import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddPath from './components/AddPath';
import RoadList from './components/RoadList';
import MapInfo from './components/MapInfo';
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
        <Row >
          <Col className="road-list" xs={6} md={6}> <RoadList /> </Col>
          <Col xs={6} md={6}> <MapInfo /> </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
