import React from 'react'
import { Button } from 'react-bootstrap'
import classes from "./Header.module.css"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header className={classes.header}>
                    <Link to="/" style={{textDecoration:"none"}}>
                    <h1>Weather<span>APP</span></h1>
                </Link>
                <Link to="/login">
                    <Button variant="primary">LogIn/Signup</Button>
                    </Link>
            </header>
            
        </div>
    )
}

export default Header
