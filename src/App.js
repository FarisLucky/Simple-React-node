import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./component/Navbar";
import ExerciseList from "./component/ExerciseList";
import EditExercise from "./component/EditExercise";
import CreateExercise from "./component/CreateExercise";
import CreateUser from "./component/CreateUser";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>        
    </Router>
  );
}

export default App;
