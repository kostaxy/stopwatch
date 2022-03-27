import React from 'react';
import { BrowserRouter, Route, Router,Switch } from 'react-router-dom';
import AppRouter from '../../AppRouter/AppRouter';
import Navbar from '../../Navbar/Navbar';
import Stopwatch from '../Stopwatch/Stopwatch';
import classes from './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    )

};

export default App;
