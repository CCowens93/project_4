import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

class DietaryGoals extends Component{
    state = {
        dietary_goal:'',
        elimination:'',
        allDietaryGoals:[]
    }

    handleDietaryData = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newState = { ...this.state };
        newState[attributeName] = attributeValue;
        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/dietary_goal', this.state)
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

        const allDietaryGoals = this.state.allDietaryGoals;
        const DietaryComponent = allDietaryGoals.map((dietaryGoal, i) => {
                    
            return(
                        <div className='diet' key={i}>
                                <p>Main Goal: {dietaryGoal.dietary_goal}</p>
                                <p>Foods to Eliminate: {dietaryGoal.elimination}</p>
                        </div>);
        })

            return(
                <div>
                    <h2>Goals</h2>
                <div>
                    {DietaryComponent}
                </div>
                    <div className="form">
                        <form onSubmit={this.handleSubmit}>
                        <div>
                            <select
                                name="dietary_goals"
                                value={this.state.handleSleepData}>
                                    <option name="lose_weight">Lose Weight</option>
                                    <option name="gain_weight">Gain Weight</option>
                                    <option name="improve_health">Improve Health</option>
                            </select>
                        </div>

                        <div>
                            <input
                                type="submit"
                                value="Create Mental Health Goals"
                                />
                        </div>
                        </form>
                    </div>
                    </div>
            )
    }
}        
            

export default DietaryGoals