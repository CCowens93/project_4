import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import exercise from './exercise.png'
import sleep from './sleep.png'
import fork from './fork.png'
import mental_health from './mental_health.png'




class Home extends Component {



    render() {
        return (
            <div className="home">
                <h1>Wellness App</h1>
                <div className="sprites1">
                <Link to={`/sleep_goal`}>
                    <p>Sleep Goals</p>
                    <img src={sleep} alt="sleep" width="275" height="275"/>
                </Link>
                <Link to={`/exercise_goal`}>
                    <p>Exercise Goals</p>
                    <img src={exercise} alt="exercise" width="275" height="275"/>
                </Link>
                </div>
                <div className="sprites2">
                <Link to={`/mental_health_goal`}>
                    <p>Mental Health Goals</p>
                    <img src={mental_health} alt="mental_health" width="275" height="275"/>
                </Link>
                <Link to={`/dietary_goal`}>
                    <p>Dietary Goals</p>
                    <img src={fork} alt="diet" width="275" height="275"/>
                </Link>
                </div>


            </div>
        )
    }
}

export default Home
