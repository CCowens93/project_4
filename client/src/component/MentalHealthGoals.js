import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class MentalHealthGoals extends Component{
    state = {
        mental_health_goal:'',
        medication:'',
        meditation:'',
        therapy:'',
        allMentalHealthGoals:[]
    }

    componentDidMount(){
        axios.get('/api/mental_health_goal')
        .then((res) => {
            console.log(res.data)
            const allMentalHealthGoals = res.data;
            this.setState({allMentalHealthGoals: allMentalHealthGoals})
        })
    }

    render(){
        return(
            <div>
            <Link to='/'>Home</Link>
            <div>
                {this.state.allMentalHealthGoals.map((mentalHealthGoal, i) => {
                    return(
                        <div className='mental_health' key={i}>
                            <p>{mentalHealthGoal.mental_health_goal}</p>
                            <p>{mentalHealthGoal.medication}</p>
                            <p>{mentalHealthGoal.meditation}</p>
                            <p>{mentalHealthGoal.therapy}</p>
                        </div>
                    )
                })}
            </div>
            </div>
        )
    }
}

export default MentalHealthGoals