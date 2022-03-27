import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to="/stopwatch">Posts</Link>
            <Link to="/savedlaps">Saved laps</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navbar