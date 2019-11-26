import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Home extends Component {



    render() {
        return (
            <div className="home">
                <h1>Wellness App</h1>
                <Link to={`/sleep_goal`}>
                    <div>Link to Sleep Goals</div>
                </Link>
                <Link to={`/exercise_goal`}>
                    <div>Link to Exercise Goals</div>
                </Link>
                <Link to={`/mental_health_goal`}>
                    <div>Link to Mental Health Goals</div>
                </Link>


            </div>
        )
    }
}

export default Home
