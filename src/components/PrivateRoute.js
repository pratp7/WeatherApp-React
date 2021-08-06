import React,{useContext} from 'react'
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../store/AuthContext';
const PrivateRoute = ({ component: Component, ...rest }) => {
    const ctxAuth = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={props => (ctxAuth.isLogged ? <Component {...props}/>:<Redirect to="/login"/>)}
        />
            
        
    )
}

export default PrivateRoute
