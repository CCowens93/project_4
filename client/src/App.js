import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import SleepGoals from './component/SleepGoals';
import ExerciseGoals from './component/ExerciseGoals';
import MentalHealthGoals from './component/MentalHealthGoals';
import DietaryGoals from './component/DietaryGoals';




class App extends Component {

  
  render() {
    return (
      <Router>

        <div className="header">

        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sleep_goal" component={SleepGoals} />
          <Route exact path="/exercise_goal" component={ExerciseGoals}/>
          <Route exact path="/mental_health_goal" component={MentalHealthGoals}/>
          <Route exact path="/dietary_goal" component={DietaryGoals}/>
        </Switch>
      </Router>
    )
  }
}


export default App;
