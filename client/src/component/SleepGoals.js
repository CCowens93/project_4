import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class SleepGoals extends Component {
    state = {
        sleep_goals: '',
        hours_of_sleep: '',
        bedtime: '',
        routine: '',
        allSleepGoals: []
    }

    handleSleepData = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newState = { ...this.state };
        newState[attributeName] = attributeValue;
        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/sleep_goal/', this.state)
    }

    componentDidMount() {
        axios.get('/api/sleep_goal/')
            .then((res) => {
                console.log(res.data)
                const allSleepGoals = res.data;
                this.setState({ allSleepGoals: allSleepGoals })
            })
    }


    render() {

        const allSleepGoals = this.state.allSleepGoals;

        const SleepComponent = allSleepGoals.map((sleepGoal, i)=>{

        
        return (
                <div className='sleep' key={i}>
                    <p>Main Goal\ {sleepGoal.sleep_goals} <input type="checkbox"></input></p>
                    <p>Hours of Sleep\ {sleepGoal.hours_of_sleep} <input type="checkbox"></input></p>
                    <p>Bedtime\ {sleepGoal.bedtime}<input type="checkbox"></input></p>
                    <p>Routine\ {sleepGoal.routine}<input type="checkbox"></input></p>
                </div>);
            })
                return(
                    <div>
                        <h2>Choose what goal you want to achieve and make a schedule for yourself!</h2>
                    <div>
                        <Link to={'/'}>Home</Link>
                    </div>
                    <div className="component">
                        {SleepComponent}
                    </div>
                        <div className="form">
                            <form onSubmit={this.handleSubmit}>
                            <div>
                                <select
                                    name="sleep_goals"
                                    value={this.state.sleep_goals}
                                    onChange={this.handleSleepData}>
                                        <option name="sleep_more" value='sleep more'>Sleep More</option>
                                        <option name="sleep_less" value='sleep less'>Sleep Less</option>
                                </select>
                            </div>

                            <div>
                                <input
                                    name="hours_of_sleep"
                                    type="number"
                                    placeholder="Hours of Sleep"
                                    value={this.state.handleSleepData}
                                    onChange={this.handleSleepData}
                                    />
                            </div>

                            <div>
                                <input 
                                    name="bedtime"
                                    type="time"
                                    placeholder="Bedtime"
                                    value={this.state.handleSleepData}
                                    onChange={this.handleSleepData}
                                    />
                            </div>

                            <div>
                                <input
                                    name="routine"
                                    type="text"
                                    placeholder="Routine"
                                    value={this.state.handleSleepData}
                                    onChange={this.handleSleepData}
                                    />
                            </div>

                            <div>
                                <input
                                    type="submit"
                                    value="Create Sleep Goals"
                                    />
                            </div>
                            </form>
                        </div>
                        </div>
                )
            }  
}
             
export default SleepGoals