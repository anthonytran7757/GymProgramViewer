import Table from "react-bootstrap/Table";
import React from "react";
import WorkoutList from "./WorkoutList";

class Workout extends React.Component{

    constructor(props){
        super(props);
    }

    formatExercises(exercises){
        let formatedExercises = [];
        for(let exercise in exercises){
            let str = exercise + " : " +exercises[exercise]
            formatedExercises.push(<p>{str}</p>)
        }
        return formatedExercises
    }

    render(){
        let exercise = this.formatExercises(this.props.workout.exercises);
        return(
            <tr>
                <td>{this.props.workout.name}</td>
                <td>{this.props.workout.dayOfWeek}</td>
                <td>{exercise}</td>
            </tr>
        )
    }
}

export default Workout