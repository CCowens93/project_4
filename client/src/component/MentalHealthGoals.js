import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

class MentalHealthGoals extends Component{
    state = {
        mental_health_goal:'',
        medication:'',
        meditation:'',
        therapy:'',
        allMentalHealthGoals:[]
    }

    handleMentalHealthData = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newState = { ...this.state };
        newState[attributeName] = attributeValue;
        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/mental_health_goal', this.state)
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

        const allMentalHealthGoals = this.state.allMentalHealthGoals;

        const MentalHealthComponents = allMentalHealthGoals.map((mentalHealthGoal, i) => {
                    return(
                        <div className='mental_health' key={i}>
                            <p>Main Goal: {mentalHealthGoal.mental_health_goal}</p>
                            <p>Time Dedicated to Taking Meds: {mentalHealthGoal.medication}</p>
                            <p>Time Dedicated to Meditation: {mentalHealthGoal.meditation}</p>
                            <p>Set Time to Attend Therapy: {mentalHealthGoal.therapy}</p>
                        </div>);
                })

                        return(
                            <div>
                                <h2>Goals</h2>
                            <div>
                                {MentalHealthComponents}
                            </div>
                            <div className="form">
                                <form onSubmit={this.handleSubmit}>
                                    <div>
                                        <select
                                            name=""
                                            value={this.state.mental_health_goal}
                                            onChange={this.handleMentalHealthData}>

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
                        
           

export default MentalHealthGoals