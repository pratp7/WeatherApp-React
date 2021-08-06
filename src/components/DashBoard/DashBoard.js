import React from 'react'
import Navigation from './Navigation/Navigation'
import History from "./Home/History/History"
import Input from './Home/Input/Input'
import classes from "./DashBoard.module.css"
import WeatherData from './Home/WeatherData/WeatherData'

const DashBoard = () => {
    
    return (
        <>
            <Navigation/>
            <section className={classes.dashboard}>
                <Input />
                <WeatherData/>
                <History/>
            </section>
            
       </>
    )
}

export default DashBoard
