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

    handleMentalHealthData = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newState = { ...this.state };
        newState[attributeName] = attributeValue;
        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/mental_health_goal/', this.state)
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
                            <p>Main Goal\ {mentalHealthGoal.mental_health_goal}<input type="checkbox"></input></p>
                            <p>Time Dedicated to Taking Meds\ {mentalHealthGoal.medication}<input type="checkbox"></input></p>
                            <p>Time Dedicated to Meditation\ {mentalHealthGoal.meditation}<input type="checkbox"></input></p>
                            <p>Set Time to Attend Therapy\ {mentalHealthGoal.therapy}<input type="checkbox"></input></p>
                        </div>);
                })

                        return(
                            <div>
                                <h2>Choose what goal you want to achieve and make a schedule for yourself!</h2>
                            <div className="link">
                                <Link to={'/'}>Home</Link>
                            </div>
                            <div className="component">
                                {MentalHealthComponents}
                            </div>
                            <div className="form">
                                <form onSubmit={this.handleSubmit}>
                                    <div>
                                        <select
                                            name="mental_health_goal"
                                            value={this.state.mental_health_goal}
                                            onChange={this.handleMentalHealthData}>
                                                <option name="reduce_anxiety" value='reduce anxiety'>Reduce Anxiety</option>
                                                <option name="reduce_depression" value='reduce depression'>Reduce Depression</option>
                                                <option name="increase_self_esteem" value='increase self-esteem'>Increase Self Esteem</option>
                                                <option name="reduce_and_or_eliminate_substance_use" value='substance use'>Reduce and/or Eliminate Substance Use</option>
                                        </select>
                                    </div>

                                    <div>
                                        <select
                                            name="medication"
                                            value={this.state.medication}
                                            onChange={this.handleMentalHealthData}>
                                                <option name="does_not_apply_to_me" value='does not apply to me'>Does Not Apply To Me</option>
                                                <option name="take_in_the_morning" value='take in the morning'>Take In The Morning</option>
                                                <option name="take_at_night"value='take at night'>Take At Night</option>
                                                <option name="take_in_morning_and_night" value='take in the morning and night'>Take In Morning/Night</option>
                                        </select>
                                    </div>

                                    <div>
                                        <input
                                            name="meditation"
                                            type="number"
                                            placeholder="Minutes Per Day For Meditation"
                                            value={this.state.meditation}
                                            onChange={this.handleMentalHealthData}>
                                                
                                        </input>
                                    </div>

                                    <div>
                                        <select
                                            name="therapy"
                                            value={this.state.therapy}
                                            onChange={this.handleMentalHealthData}>
                                                <option name="does_not apply_to_me" value='does not apply to me'>Does Not Apply To Me</option>
                                                <option name="twice_per_week" value='twice a week'>Twice per Week</option>
                                                <option name="once_per_week" value='once a week'>Once Per Week</option>
                                                <option name="every_other_week" value='every other week'>Every Other Week</option>
                                                <option name="once_per_month" value='once a month'>Once Per Month</option>
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