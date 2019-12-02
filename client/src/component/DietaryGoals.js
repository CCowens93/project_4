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
        axios.post('/api/dietary_goal/', this.state)
    }

    componentDidMount(){
        axios.get('/api/dietary_goal')
        .then((res) => {
            console.log(res.data)
            this.setState({allDietaryGoals: res.data})
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
                    <div className='form'>
                        <form onSubmit={this.handleSubmit}>
                        <div>
                            <select
                                name="dietary_goal"
                                value={this.state.dietary_goal}
                                onChange={this.handleDietaryData}>
                                    <option name='lose_weight' value='lose weight'>Lose Weight</option>
                                    <option name='gain_weight' value='gain weight'>Gain Weight</option>
                                    <option name='improve_health' value='improve health'>Improve Health</option>
                            </select>
                        </div>

                        <div>
                            <select
                                name="elimination"
                                value={this.state.elimination}
                                onChange={this.handleDietaryData}>
                                    <option name='dairy' value='dairy'>Dairy</option>
                                    <option name='soy' value='soy'>Soy</option>
                                    <option name='red_meat' value='red meat'>Red Meat</option>
                                    <option name='pork' value='pork'>Pork</option>
                                    <option name='processed_sugar' value='processed sugar'>Processed Sugar</option>
                                    <option name='alcohol' value='alcohol'>Alcohol</option>
                                    <option name='gluten' value='gluten'>Gluten</option>
                                </select>
                        </div>

                        <div>
                            <input
                                type="submit"
                                value="Create Dietary Goals"
                                />
                        </div>
                        </form>
                    </div>
                    </div>
            )
    }
}        
            

export default DietaryGoals