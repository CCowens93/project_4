import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Home extends Component {



    render() {
        return (
            <div className="home">
                <Link to={`/sleep_goal`}>
                    <div>Link to Sleep Goals</div>
                </Link>


            </div>
        )
    }
}

export default Home
