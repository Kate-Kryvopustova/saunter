import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AddPath.css';

function AddPath() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add
            </Button>

            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new path</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Row className="">
                            <Col xs={6} md={6} className="forms">
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Text input" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Short description</Form.Label>
                                    <Form.Control type="text" placeholder="Text area" minLength={9} maxLength={160} />
                                    <Form.Text muted className="text-right">
                                        Limit 9 of 160
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Full description</Form.Label>
                                    <Form.Control type="text" placeholder="Text area" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Text className="text-center">
                                        Length 1.13 km
                                    </Form.Text>
                                </Form.Group>
                                <div className="add-path">
                                    <Button variant="light" >Add path</Button>
                                </div>
                            </Col>
                            <Col xs={6} md={6} >
                                <iframe
                                    title="myFrame"
                                    width="350"
                                    height="200"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.4373521010065!2d32.048979733891514!3d49.44461132522692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b866064977f%3A0xf8dce723a9cbb5d8!2z0KfQtdGA0LrQsNGB0YHRiywg0KfQtdGA0LrQsNGB0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDE4MDAw!5e1!3m2!1sru!2sua!4v1599729564188!5m2!1sru!2sua"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen="">
                                </iframe>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}


export default AddPath;