import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

class ExerciseGoals extends Component {
    state = {
        body_goals: '',
        workout_schedule: '',
        hours_of_exercise: '',
        daily_focus: '',
        allExerciseGoals: []
    }

    handleExerciseData = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newState = { ...this.state };
        newState[attributeName] = attributeValue;
        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('api/exercise_goal', this.state)
    }

    componentDidMount() {
        axios.get('/api/exercise_goal')
            .then((res) => {
                console.log(res.data)
                const allExerciseGoals = res.data;
                this.setState({ allExerciseGoals: allExerciseGoals })
            })
    }
    render() {


        {this.state.allExerciseGoals.map((exerciseGoal, i) => {
                return (
                    
                        // <Link to='/'>Home</Link>
                        

                            <div className='exercise' key={i}>
                                <p>Main Goal: {exerciseGoal.body_goals}</p>
                                <p>Schedule: {exerciseGoal.workout_schedule}</p>
                                <p>Dedicated Time to Exercise: {exerciseGoal.minutes_of_exercise}</p>
                                <p>Focus for the Day: {exerciseGoal.daily_focus}</p>
                            </div>);
                    })}

                        return (
                        <div className='form'>
                                <form onSubmit={this.handleSubmit}>
                                    <div>
                                        <input
                                            name="body_goals"
                                            type="text"
                                            placeholder="body goals"
                                            value={this.state.body_goals}
                                            onChange={this.handleExerciseData}
                                        />
                                    </div>

                                    <div>
                                        <input
                                            name="workout_schedule"
                                            type="text"
                                            placeholder="workout schedule"
                                            value={this.state.workout_schedule}
                                            onChange={this.handleExerciseData}
                                            />
                                    </div>

                                    <div>
                                        <input
                                            name="minutes_of_exercise"
                                            type="text"
                                            placeholder="minutes of exercise"
                                            value={this.state.minutes_of_exercise}
                                            onChange={this.handleExerciseData}
                                            />
                                    </div>

                                    <div>
                                        <input
                                            name="daily_focus"
                                            type="text"
                                            placeholder="daily focus"
                                            value={this.state.daily_focus}
                                            onChange={this.handleExerciseData}
                                            />
                                    </div>

                                    <div>
                                        <input
                                            type="submit"
                                            value="Create Exercise Goals"
                                        />
                                    </div>
                                </form>
                            </div>
                )
        }

    }

    export default ExerciseGoals

