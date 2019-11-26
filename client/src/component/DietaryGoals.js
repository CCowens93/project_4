import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class DietaryGoals extends Component{
    state={
        dietary_goal:'',
        elimination:'',
        allDietaryGoals:[]
    }

    componentDidMount(){
        axios.get('/api/dietary_goal')
        .then((res) => {
            console.log(res.data)
            const allDietaryGoals = res.data;
            this.setState({allDietaryGoals: allDietaryGoals})
        })
    }

    render(){
        return(
            <div>
                <Link to='/'>Home</Link>
            <div>
                {this.state.allDietaryGoals.map((dietaryGoal, i) => {
                    return(
                        <div className='diet' key={i}>
                                <p>Main Goal: {dietaryGoal.dietary_goal}</p>
                                <p>Foods to Eliminate: {dietaryGoal.elimination}</p>
                        </div>
                    )
                })}
            </div>
            </div>
        )
    }
}

export default DietaryGoals