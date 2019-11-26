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
                            <p>{exerciseGoal.body_goals}</p>
                            <p>{exerciseGoal.workout_schedule}</p>
                            <p>{exerciseGoal.hours_of_exercise}</p>
                            <p>{exerciseGoal.daily_focus}</p>
                        </div>
                    )
                })}

            </div>
            </div>
        )
    }

}

export default ExerciseGoals

