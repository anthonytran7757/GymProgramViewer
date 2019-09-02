import Table from "react-bootstrap/Table";
import React from "react";
import Workout from "./Workout"

const client = require('./client');


class WorkoutList extends React.Component{
    constructor(props){
        super(props);
        this.state = {workouts: []}
    }

    render(){
        if (this.props.programs) {
            if (this.state.workouts != null) {
                let getReq = this.props.programs._links.listOfWorkouts.href
                client({method: 'GET', path: getReq}).done(response => {
                    this.setState({workouts: response.entity._embedded.workouts});
                });
            }
                const workoutNames = this.state.workouts.map(workout => <Workout workout={workout}/>);
                return (
                    <div className="workout-table">
                        <Table striped bordered hover responsive>
                            <tbody>
                            <tr>
                                <th>Workout Name</th>
                                <th>Day of Week</th>
                                <th>Exercises</th>
                            </tr>
                            {workoutNames}
                            </tbody>
                        </Table>
                    </div>

                )

        }
        return null
    }
}

export default WorkoutList