import Button from 'react-bootstrap/Button'
import WorkoutList from "./WorkoutList"
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown"
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ProgramModal from "./ProgramModal"
import "./app.css"
import Jumbotron from "react-bootstrap/Jumbotron";

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');



class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {programs: [], programList: false, currProgram: null, createClicked: false};
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/programs'}).done(response => {
            this.setState({programs: response.entity._embedded.programs});
        });
    };

    handleClose(){
        this.setState({createClicked : false})
    }

    handleOpen(){
        this.setState({createClicked : true})
    }

    renderModal(){
        if(this.state.createClicked){
            return <ProgramModal show={true} handleClose={this.handleClose}/>
        }
    }

    deleteProgram(program){
        let programLink = program._links.program.href
        let indexOfRemoval = this.state.programs.indexOf(program)
        client({method: 'DELETE', path: programLink}).done(response =>{
            let currPrograms = this.state.programs
            currPrograms.splice(indexOfRemoval,1)
            this.setState({programs: currPrograms})
            alert("Program has been Deleted")
            window.location.reload()
        })
    }

    renderJumbotron(){
        if(!this.state.programList){
            return <Jumbotron className="jumbotron">
                    <h1 className="jumbotron-text">Hi!</h1>
                    <p>
                        Get started by viewing a program or creating a workout program with the button below!
                    </p>
                    <p>
                        <Button variant="success"
                                onClick={() => this.handleOpen()}>
                            Create</Button>
                    </p>
                </Jumbotron>

        }
    }

    render() {
        return (
            <div>
                <h1>Gym Program Viewer</h1>
                <ButtonToolbar>
                    <DropdownButton className="ml-2" id="dropdown-basic-button" title="Programs">
                        {this.state.programs.map(program => <Dropdown.Item>
                            <div onClick={() => this.setState({programList: true, currProgram: program})}>
                                {program.programName}
                            </div>
                        </Dropdown.Item>)}
                    </DropdownButton>
                    <Button className="ml-2" variant="success"
                            onClick={() => this.handleOpen()}>
                        Create</Button>
                    <DropdownButton className="ml-2"id="dropdown-basic-button" title="Delete" variant="danger">
                        {this.state.programs.map(program => <Dropdown.Item>
                            <div onClick={() => this.deleteProgram(program)}>
                                {program.programName}
                            </div>
                        </Dropdown.Item>)}
                    </DropdownButton>
                </ButtonToolbar>
                {this.renderJumbotron()}
                {this.renderModal()}
                <WorkoutList programs={this.state.currProgram}/>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('react')
)