import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ExerciseGoals extends Component{
    state={
        body_goals:'',
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
                        </div>
                    )
                })}

            </div>
            </div>
        )
    }

}

export default ExerciseGoals

