import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About/About'
import SavedLaps from '../pages/SavedLaps/SavedLaps'
import Stopwatch from '../pages/Stopwatch/Stopwatch'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/stopwatch' element={<Stopwatch />} />
            <Route path='/about' element={<About />} />
            <Route path='/savedlaps' element={<SavedLaps />} />
            <Route path='*' element={<Navigate replace to='/stopwatch' />} /> 
        </Routes>
    )
}

export default AppRouter