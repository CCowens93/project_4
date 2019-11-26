import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component{
    state = {
        allSleepGoals: []
    }

    componentDidMount() {
        axios.get('/api/sleep_goal')
            .then((res) => {
                console.log(res.data)
                const allSleepGoals = res.data;
                this.setState({ allSleepGoals: allSleepGoals})
            })
        }
    render(){
        return(
            <div className="home">
                <h1>Wellness App</h1>
            </div>
        )
    }
}

export default Home