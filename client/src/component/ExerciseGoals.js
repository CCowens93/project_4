import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ExerciseGoals extends Component {

    
    state = {
        body_goals: '',
        workout_schedule: '',
        minutes_of_exercise: '',
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
        axios.post('/api/exercise_goal/', this.state)
    }

    componentDidMount() {
        axios.get('/api/exercise_goal')
            .then((res) => {
                console.log(res.data)
                this.setState({ allExerciseGoals: res.data })
            })
    }
    
    
    
    render() {
       
       
        const allExerciseGoals = this.state.allExerciseGoals;

        const ExerciseComponent = allExerciseGoals.map((exerciseGoal, i) => {
                return (
                            <div className='exercise'  key={i}>
                                <p>Main Goal\ {exerciseGoal.body_goals} <input type="checkbox"></input></p>
                                <p>Schedule\ {exerciseGoal.workout_schedule} </p>
                                <p>Dedicated Minutes to Exercise\ {exerciseGoal.minutes_of_exercise} <input type="checkbox"></input></p>
                                <p>Focus for the Day\ {exerciseGoal.daily_focus}<input type="checkbox"></input></p>
                                
                                
                            </div>);
                    })

                        return (
                            
                            <div>
                                <h2>Choose what goal you want to achieve and make a schedule for yourself!</h2>
                            <div className="link">
                                <Link to={'/'}>Home</Link>
                            </div>
                            <div className="component">
                                {ExerciseComponent}
                            </div>
                        <div className='form'>
                       
                                <form onSubmit={this.handleSubmit}>
                                    <div>
                                        <select 
                                            name="body_goals"
                                            value={this.state.body_goals}
                                            onChange={this.handleExerciseData}>
                                                <option name="weight_loss" value= 'weight loss'>Weight Loss</option>
                                                <option name="increase_strength" value='increase strength'>Increase Strength</option>
                                                <option name="improve_endurance" value='improve endurance'>Improve Endurance</option>
                                                <option name="reduce_health_risks" value='reduce health risks'>Reduce Health Risks</option>
                                                <option name="energy_boost" value='energy boost'>Energy Boost</option>
                                        </select>
                                            
                                    </div>

                                    <div>
                                        <select
                                            name="workout_schedule"
                                            value={this.state.workout_schedule}
                                            onChange={this.handleExerciseData}>
                                                <option name='monday' value='Monday'>Monday</option>
                                                <option name='tuesday' value='Tuesday'>Tuesday</option>
                                                <option name='wednesday' value='Wednesday'>Wednesday</option>
                                                <option name='thursday' value='Thursday'>Thursday</option>
                                                <option name='friday' value='Friday'>Friday</option>
                                                <option name='saturday' value='Saturday'>Saturday</option>
                                                <option name='sunday' value='Sunday'>Sunday</option>
                                            </select>

                                            
                                            
                                    </div>

                                    <div>
                                        <input
                                            name="minutes_of_exercise"
                                            type="number"
                                            placeholder="minutes of exercise"
                                            value={this.state.minutes_of_exercise}
                                            onChange={this.handleExerciseData}
                                            />
                                    </div>

                                    <div>
                                        <select
                                            name="daily_focus"
                                            value={this.state.daily_focus}
                                            onChange={this.handleExerciseData}>
                                                <option name='cardio' value='cardio'>Cardio</option>
                                                <option name='weight_lifting' value='weight lifting'>Weight Lifting</option>
                                                <option name='yoga' value="yoga">Yoga</option>
                                               
                                        </select>
                                            
                                    </div>

                                    <div>
                                        <input
                                            type="submit"
                                            value="Create Exercise Goals"
                                        />
                                    </div>
                                </form>
                            </div>
                            
                            </div>
                )
        }

    }

export default ExerciseGoals

