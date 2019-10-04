import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from'react-router-dom';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.exercise._id}>edit</Link> | <Link to="/" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</Link>
        </td>
    </tr>
)

export default class ExerciseList extends Component {

    constructor(props) {
        super(props);
    
        this.deleteExercise = this.deleteExercise.bind(this)
    
        this.state = {exercises: []};
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/exercise/')
        .then(res=>this.setState({
            exercises: res.data
        }))
        .catch(err=>console.log(err));
    }

    deleteExercise(id){
        Axios.delete(`http://localhost:5000/exercise/delete/${id}`)
        .then(res=>console.log(res.data))

        this.setState({
            exercises: this.state.exercises.filter(el=>el._id !== id)
        })
    }
    
    exerciseList(){
        return this.state.exercises.map(params=>{
            return <Exercise exercise={params} deleteExercise={this.deleteExercise} key={params._id} />
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.exerciseList() }
                </tbody>
                </table>
            </div>
        )
    }
}
