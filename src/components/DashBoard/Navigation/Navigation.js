import React,{useContext} from 'react'
import { Link ,useHistory} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import AuthContext from '../../../store/AuthContext'
import classes from "./Navigation.module.css"

const Navigation = () => {
    const ctxAuth = useContext(AuthContext)
    const history = useHistory();
    
    const logoutHandler = () => {
        ctxAuth.logout();
        history.replace("/login");
    }
    return (
        <>
            <nav className={classes.nav}>
                <Link to="/dashboard" className={classes.navlink}>Home</Link>
                <Link to="/about" className={classes.navlink}>About us</Link>
                <Link to="/profile" className={classes.navlink}>{ctxAuth.name}'s Profile</Link>
                <Button variant="primary" onClick={logoutHandler}>Logout</Button>
            </nav>
        </>
    )
}

export default Navigation
