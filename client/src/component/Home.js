import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import garnet from './garnet.png' 
import pearl from './Pearl.png'
import steven from './Steven.png'
import amethyst from './Amethyst.png'


class Home extends Component {



    render() {
        return (
            <div className="home">
                <h1>Wellness App</h1>
                <div className="sprites">
                <Link to={`/sleep_goal`}>
                    <div>Link to Sleep Goals</div>
                    <img src={steven} width="325" height="325"/>
                </Link>
                <Link to={`/exercise_goal`}>
                    <p>Link to Exercise Goals</p>
                    <img src={garnet} width="325" height="325"/>
                </Link>
                <Link to={`/mental_health_goal`}>
                    <div>Link to Mental Health Goals</div>
                    <img src={pearl} width="325" height="325"/>
                </Link>
                <Link to={`/dietary_goal`}>
                    <div>Link to Dietary Goals</div>
                    <img src={amethyst} width="325" height="325"/>
                </Link>
                </div>


            </div>
        )
    }
}

export default Home
