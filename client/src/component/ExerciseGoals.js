import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ExerciseGoals extends Component{
    state={
        body_goals:'',
        workout_schedule:'',
        hours_of_exercise:'',
        daily_focus:'',
        allExerciseGoals:[]
    }

    componentDidMount(){
        axios.get('/api/exercise_goal')
        .then((res) => {
            console.log(res.data)
            const allExerciseGoals = res.data;
            this.setState({allExerciseGoals: allExerciseGoals})
        })
    }

    render(){
        return(
            <div>
                <Link to='/'>Home</Link>
            <div>
                {this.state.allExerciseGoals.map((exerciseGoal, i) => {
                    return(
                        <div className='exercise' key={i}>
                            <p>Main Goal: {exerciseGoal.body_goals}</p>
                            <p>Schedule: {exerciseGoal.workout_schedule}</p>
                            <p>Dedicated Time to Exercise: {exerciseGoal.hours_of_exercise}</p>
                            <p>Focus for the Day: {exerciseGoal.daily_focus}</p>
                        </div>
                    )
                })}

            </div>
            </div>
        )
    }

}

export default ExerciseGoals

