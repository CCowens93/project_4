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

    componentDidMount() {
        axios.get('/api/sleep_goal/')
            .then((res) => {
                console.log(res.data)
                const allSleepGoals = res.data;
                this.setState({ allSleepGoals: allSleepGoals })
            })
    }
    

    render() {
        return (
            <div>
            <Link to='/'>Home</Link>
            
            <div>
                {this.state.allSleepGoals.map((sleepGoal, i) => {
                    return (
                        <div className='sleep' key={i}>
                        <p>{sleepGoal.sleep_goals}</p>
                        <p>{sleepGoal.hours_of_sleep}</p>
                        <p>{sleepGoal.bedtime}</p>
                        <p>{sleepGoal.routine}</p>
                        </div>)
                    
                    
                })}
            </div>
            </div>
        )
       

    }
}
    


export default SleepGoals