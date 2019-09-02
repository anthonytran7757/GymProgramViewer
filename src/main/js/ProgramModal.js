import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import client from "./client"

class ProgramModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        let newProgram = {
            name: this.programName.value,
            workouts: [
                {
                    workoutName: this.WMName.value, day: 1, exercises: [
                        {exerciseName: this.WME1.value, sets: this.WMSet1.value, reps: this.WMRep1.value},
                        {exerciseName: this.WME2.value, sets: this.WMSet2.value, reps: this.WMSet2.value},
                        {exerciseName: this.WME3.value, sets: this.WMSet3.value, reps: this.WMRep3.value},
                        {exerciseName: this.WME4.value, sets: this.WMSet4.value, reps: this.WMRep4.value},
                        {exerciseName: this.WME5.value, sets: this.WMSet5.value, reps: this.WMRep5.value},
                    ]
                },
                {
                    workoutName: this.WTName.value, day: 2, exercises: [
                        {exerciseName: this.WTE1.value, sets: this.WTSet1.value, reps: this.WTRep1.value},
                        {exerciseName: this.WTE2.value, sets: this.WTSet2.value, reps: this.WTSet2.value},
                        {exerciseName: this.WTE3.value, sets: this.WTSet3.value, reps: this.WTRep3.value},
                        {exerciseName: this.WTE4.value, sets: this.WTSet4.value, reps: this.WTRep4.value},
                        {exerciseName: this.WTE5.value, sets: this.WTSet5.value, reps: this.WTRep5.value},
                    ]
                },
                {
                    workoutName: this.WWName.value, day: 3, exercises: [
                        {exerciseName: this.WWE1.value, sets: this.WWSet1.value, reps: this.WWRep1.value},
                        {exerciseName: this.WWE2.value, sets: this.WWSet2.value, reps: this.WWSet2.value},
                        {exerciseName: this.WWE3.value, sets: this.WWSet3.value, reps: this.WWRep3.value},
                        {exerciseName: this.WWE4.value, sets: this.WWSet4.value, reps: this.WWRep4.value},
                        {exerciseName: this.WWE5.value, sets: this.WWSet5.value, reps: this.WWRep5.value},
                    ]
                },
                {
                    workoutName: this.WRName.value, day: 4, exercises: [
                        {exerciseName: this.WRE1.value, sets: this.WRSet1.value, reps: this.WRRep1.value},
                        {exerciseName: this.WRE2.value, sets: this.WRSet2.value, reps: this.WRSet2.value},
                        {exerciseName: this.WRE3.value, sets: this.WRSet3.value, reps: this.WRRep3.value},
                        {exerciseName: this.WRE4.value, sets: this.WRSet4.value, reps: this.WRRep4.value},
                        {exerciseName: this.WRE5.value, sets: this.WRSet5.value, reps: this.WRRep5.value},
                    ]
                },
                {
                    workoutName: this.WFName.value, day: 5, exercises: [
                        {exerciseName: this.WFE1.value, sets: this.WFSet1.value, reps: this.WFRep1.value},
                        {exerciseName: this.WFE2.value, sets: this.WFSet2.value, reps: this.WFSet2.value},
                        {exerciseName: this.WFE3.value, sets: this.WFSet3.value, reps: this.WFRep3.value},
                        {exerciseName: this.WFE4.value, sets: this.WFSet4.value, reps: this.WFRep4.value},
                        {exerciseName: this.WFE5.value, sets: this.WFSet5.value, reps: this.WFRep5.value},
                    ]
                }
            ]
        };
        let stringified = newProgram;
        client({
            method: 'POST',
            path: '/api/program',
            entity: stringified,
            headers: {'Content-Type': 'application/json'}
        })
        alert("Program Created")
    }

    render() {
        return (
            <Modal centered show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create Workout Program
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group id="formProgramName">
                            <Form.Label>Program Name</Form.Label>
                            <Form.Control placeholder="Enter Program Name"
                                          id="programName"
                                          ref={(ref) => this.programName = ref}/>
                        </Form.Group>

                        <Form.Group>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            Monday
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <Form.Label>Monday's Workout</Form.Label>
                                            <Form.Control placeholder="Enter Workout Name"
                                                          id="WMName"
                                                          ref={(ref) => this.WMName = ref}/>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Label>Exercise 1</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WME1"
                                                                  ref={(ref) => this.WME1 = ref}/>
                                                    <Form.Label>Exercise 2</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WME2"
                                                                  ref={(ref) => this.WME2 = ref}/>
                                                    <Form.Label>Exercise 3</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WME3"
                                                                  ref={(ref) => this.WME3 = ref}/>
                                                    <Form.Label>Exercise 4</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WME4"
                                                                  ref={(ref) => this.WME4 = ref}/>
                                                    <Form.Label>Exercise 5</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WME5"
                                                                  ref={(ref) => this.WME5 = ref}/>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WMSet1"
                                                                  ref={(ref) => this.WMSet1 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WMSet2"
                                                                  ref={(ref) => this.WMSet2 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WMSet3"
                                                                  ref={(ref) => this.WMSet3 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WMSet4"
                                                                  ref={(ref) => this.WMSet4 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WMSet5"
                                                                  ref={(ref) => this.WMSet5 = ref}/>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WMRep1"
                                                                  ref={(ref) => this.WMRep1 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WMRep2"
                                                                  ref={(ref) => this.WMRep2 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WMRep3"
                                                                  ref={(ref) => this.WMRep3 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WMRep4"
                                                                  ref={(ref) => this.WMRep4 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WMRep5"
                                                                  ref={(ref) => this.WMRep5 = ref}/>
                                                </Col>
                                            </Form.Row>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            Tuesday
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <Form.Label>Tuesday's Workout</Form.Label>
                                            <Form.Control placeholder="Enter Workout Name"
                                                          id="WTName"
                                                          ref={(ref) => this.WTName = ref}/>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Label>Exercise 1</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WTE1"
                                                                  ref={(ref) => this.WTE1 = ref}/>
                                                    <Form.Label>Exercise 2</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WTE2"
                                                                  ref={(ref) => this.WTE2 = ref}/>
                                                    <Form.Label>Exercise 3</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WTE3"
                                                                  ref={(ref) => this.WTE3 = ref}/>
                                                    <Form.Label>Exercise 4</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WTE4"
                                                                  ref={(ref) => this.WTE4 = ref}/>
                                                    <Form.Label>Exercise 5</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WTE5"
                                                                  ref={(ref) => this.WTE5 = ref}/>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WTSet1"
                                                                  ref={(ref) => this.WTSet1 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WTSet2"
                                                                  ref={(ref) => this.WTSet2 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WTSet3"
                                                                  ref={(ref) => this.WTSet3 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WTSet4"
                                                                  ref={(ref) => this.WTSet4 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WTSet5"
                                                                  ref={(ref) => this.WTSet5 = ref}/>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WTRep1"
                                                                  ref={(ref) => this.WTRep1 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WTRep2"
                                                                  ref={(ref) => this.WTRep2 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WTRep3"
                                                                  ref={(ref) => this.WTRep3 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WTRep4"
                                                                  ref={(ref) => this.WTRep4 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WTRep5"
                                                                  ref={(ref) => this.WTRep5 = ref}/>
                                                </Col>
                                            </Form.Row>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                            Wednesday
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <Form.Label>Wednesday's Workout</Form.Label>
                                            <Form.Control placeholder="Enter Workout Name"
                                                          id="WWName"
                                                          ref={(ref) => this.WWName = ref}/>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Label>Exercise 1</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WWE1"
                                                                  ref={(ref) => this.WWE1 = ref}/>
                                                    <Form.Label>Exercise 2</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WWE2"
                                                                  ref={(ref) => this.WWE2 = ref}/>
                                                    <Form.Label>Exercise 3</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WWE3"
                                                                  ref={(ref) => this.WWE3 = ref}/>
                                                    <Form.Label>Exercise 4</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WWE4"
                                                                  ref={(ref) => this.WWE4 = ref}/>
                                                    <Form.Label>Exercise 5</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WWE5"
                                                                  ref={(ref) => this.WWE5 = ref}/>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WWSet1"
                                                                  ref={(ref) => this.WWSet1 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WWSet2"
                                                                  ref={(ref) => this.WWSet2 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WWSet3"
                                                                  ref={(ref) => this.WWSet3 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WWSet4"
                                                                  ref={(ref) => this.WWSet4 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WWSet5"
                                                                  ref={(ref) => this.WWSet5 = ref}/>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WWRep1"
                                                                  ref={(ref) => this.WWRep1 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WWRep2"
                                                                  ref={(ref) => this.WWRep2 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WWRep3"
                                                                  ref={(ref) => this.WWRep3 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WWRep4"
                                                                  ref={(ref) => this.WWRep4 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WWRep5"
                                                                  ref={(ref) => this.WWRep5 = ref}/>
                                                </Col>
                                            </Form.Row>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                            Thursday
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <Form.Label>Thursday's Workout</Form.Label>
                                            <Form.Control placeholder="Enter Workout Name"
                                                          id="WRName"
                                                          ref={(ref) => this.WRName = ref}/>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Label>Exercise 1</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WRE1"
                                                                  ref={(ref) => this.WRE1 = ref}/>
                                                    <Form.Label>Exercise 2</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WRE2"
                                                                  ref={(ref) => this.WRE2 = ref}/>
                                                    <Form.Label>Exercise 3</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WRE3"
                                                                  ref={(ref) => this.WRE3 = ref}/>
                                                    <Form.Label>Exercise 4</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WRE4"
                                                                  ref={(ref) => this.WRE4 = ref}/>
                                                    <Form.Label>Exercise 5</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WRE5"
                                                                  ref={(ref) => this.WRE5 = ref}/>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WRSet1"
                                                                  ref={(ref) => this.WRSet1 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WRSet2"
                                                                  ref={(ref) => this.WRSet2 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WRSet3"
                                                                  ref={(ref) => this.WRSet3 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WRSet4"
                                                                  ref={(ref) => this.WRSet4 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WRSet5"
                                                                  ref={(ref) => this.WRSet5 = ref}/>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WRRep1"
                                                                  ref={(ref) => this.WRRep1 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WRRep2"
                                                                  ref={(ref) => this.WRRep2 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WRRep3"
                                                                  ref={(ref) => this.WRRep3 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WRRep4"
                                                                  ref={(ref) => this.WRRep4 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WRRep5"
                                                                  ref={(ref) => this.WRRep5 = ref}/>
                                                </Col>
                                            </Form.Row>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                            Friday
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            <Form.Label>Friday's Workout</Form.Label>
                                            <Form.Control placeholder="Enter Workout Name"
                                                          id="WFName"
                                                          ref={(ref) => this.WFName = ref}/>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Label>Exercise 1</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WFE1"
                                                                  ref={(ref) => this.WFE1 = ref}/>
                                                    <Form.Label>Exercise 2</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WFE2"
                                                                  ref={(ref) => this.WFE2 = ref}/>
                                                    <Form.Label>Exercise 3</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WFE3"
                                                                  ref={(ref) => this.WFE3 = ref}/>
                                                    <Form.Label>Exercise 4</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WFE4"
                                                                  ref={(ref) => this.WFE4 = ref}/>
                                                    <Form.Label>Exercise 5</Form.Label>
                                                    <Form.Control placeholder="Exercise Name"
                                                                  id="WFE5"
                                                                  ref={(ref) => this.WFE5 = ref}/>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WFSet1"
                                                                  ref={(ref) => this.WFSet1 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WFSet2"
                                                                  ref={(ref) => this.WFSet2 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WFSet3"
                                                                  ref={(ref) => this.WFSet3 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WFSet4"
                                                                  ref={(ref) => this.WFSet4 = ref}/>
                                                    <Form.Label>Sets</Form.Label>
                                                    <Form.Control placeholder="Enter # of Sets"
                                                                  id="WFSet5"
                                                                  ref={(ref) => this.WFSet5 = ref}/>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WFRep1"
                                                                  ref={(ref) => this.WFRep1 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WFRep2"
                                                                  ref={(ref) => this.WFRep2 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WFRep3"
                                                                  ref={(ref) => this.WFRep3 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WFRep4"
                                                                  ref={(ref) => this.WFRep4 = ref}/>
                                                    <Form.Label>Reps</Form.Label>
                                                    <Form.Control placeholder="Enter # of Reps"
                                                                  id="WFRep5"
                                                                  ref={(ref) => this.WFRep5 = ref}/>
                                                </Col>
                                            </Form.Row>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default ProgramModal