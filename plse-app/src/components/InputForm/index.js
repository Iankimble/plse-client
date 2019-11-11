import React, { Component } from 'react';
// import {withRouter} from 'react-router-dom';
import "./style.css";
import { Button, Form, Col, Row } from 'react-bootstrap';

class InputForm extends Component {
  render() {
    return <div className="text-center">
      <Row style={{margin:`80px`}}>

        <Col></Col>

        <Col md={6}>

          <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Col sm={3}>
                <Form.Label>
                  Client's Name
          </Form.Label>
              </Col>
              <Col md={{ span: 3 }}>
                <Form.Control placeholder="First Name" />
              </Col>
              <Col sm="5">
                <Form.Control placeholder="Last Name" />
              </Col>

            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Col sm={3}>
                <Form.Label>
                  Date of Birth
          </Form.Label>
              </Col>
              <Col md={{ span: 3 }}>
                <Form.Control placeholder="mm/dd/yyyy" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Col sm={3}>
                <Form.Label>
                  Address
          </Form.Label>
              </Col>
              <Col sm="7">
                <Form.Control placeholder="Street Name, Number" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Col sm={3}>
                <Form.Label>
                </Form.Label>
              </Col>
              <Col sm={2}>
                <Form.Control placeholder="City" />
              </Col>
              <Col sm={2}>
                <Form.Control placeholder="State" />
              </Col>
              <Col sm={2}>
                <Form.Control placeholder="Zip" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Col sm={3}>
                <Form.Label>
                  Social Security
          </Form.Label>
              </Col>
              <Col sm="4">
                <Form.Control placeholder="###-##-####" />
              </Col>
            </Form.Group>

            <Row>

              <Col sm={3}>
                <Form.Label>
                </Form.Label>
              </Col>
              <Col sm="4">
                <Button id="ExpungeButton" type="submit">
                  Start Expunging
        </Button>
              </Col>
            </Row>
          </Form>

        </Col>
        <Col></Col>
      </Row>
    </div>
  }
}

export default InputForm;
