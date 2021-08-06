import React, { useState,useRef,useContext } from 'react'
import { Card, Form, Button,Alert } from 'react-bootstrap';
import AuthContext from '../../../store/AuthContext';
import { useHistory,Link } from 'react-router-dom';


const AuthForm = () => {
    let url,displayError;
    const [loginTogg, setLoginTogg] = useState(true);
    const [loading, setLoading] = useState(false);
    const ctxAuth = useContext(AuthContext);
    const nameRef = useRef();
    const confirmPassRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();
    const [error, setError] = useState("");

    const switchAuthHandler = () => {
        setLoginTogg(prevVal=>!prevVal)
    }
   

    const formHandler = (e) => {
        e.preventDefault();
        let enteredConfirmedPass = "";
        let enteredName = "";
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value
        //add validation
        if (!loginTogg) {
            enteredConfirmedPass = confirmPassRef.current.value;
            enteredName = nameRef.current.value;
            if (enteredPassword !== enteredConfirmedPass) {
                return setError("Passwords do not match")
            }
        }
        setLoading(true);
        if (loginTogg) {
            url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBRJJ6gHcpdlbKrj_lWZsJorPQYDH74MAE"
        } else {
            url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBRJJ6gHcpdlbKrj_lWZsJorPQYDH74MAE"
        }
        
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
                displayName:enteredName
            })
        }).then(res => {
            setLoading(false);
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then(data => {
                    //show error
                    let errorMessage = "Authentication Failed";
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    console.log(errorMessage)
                    throw new Error(errorMessage);
                    
                })
            }
        }).then(data => {
            console.log(data.email, data.displayName,"success");
            ctxAuth.login(data.idToken,data.email, data.displayName);
            history.replace("/dashboard");
        }).catch(err => {
            setError(err.message,"error")
            // alert(err.message);
        })


        
    }
    
    return (
        <Card style={{ maxWidth: "45rem", width: "90%" }} className="mx-auto mt-5">
            <Card.Body>
                <Card.Title className="text-center">{loginTogg ? "Login" : "Signup"}</Card.Title>
               {error && <Alert variant="danger">{error}</Alert>} 
                <Form onSubmit={formHandler}>
                {!loginTogg && <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required ref={nameRef}/>
                    </Form.Group>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" required ref={emailRef}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" required ref={passwordRef} />
                    </Form.Group>
                    {!loginTogg && <Form.Group className="mb-3" controlId="formBasicPasswordC">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="confirm password" required ref={confirmPassRef}/>
                    </Form.Group>}
                    <Form.Group className="text-center mb-2">
                        {!loading ? <Button type="submit" variant="primary" disabled={loading}>
                            {loginTogg ? "Login" : "Signup"}
                        </Button>:"Loading..."}
                        {displayError}
                    </Form.Group>
                </Form>
                <div className={loginTogg?"d-flex justify-content-around":"d-flex justify-content-center"}>
                    <button type="button" className="btn btn-link" onClick={switchAuthHandler}>
                        {loginTogg ?"Create a new account":"Login with existing account"}
                    </button>
                    <Link to="/forgot-password">
                    <button type="button" className="btn btn-link">
                        {loginTogg ?"Forgot Password?":""}
                        </button>
                        </Link>
                </div>
            </Card.Body>
            
        </Card>
    )
}

export default AuthForm
