import React from 'react'
import { Link } from 'react-router-dom'
import cl from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={cl.Navbar} id='Navbar'>
            <Link to="/stopwatch">Stopwatch</Link>
            <Link to="/savedlaps">SavedLaps</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navbar