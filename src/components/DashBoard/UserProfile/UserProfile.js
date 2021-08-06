import React,{useRef,useContext} from 'react'
import Navigation from '../Navigation/Navigation'
import { Card, Form, Button } from 'react-bootstrap'
import AuthContext from '../../../store/AuthContext'
import { useHistory } from 'react-router-dom'
const UserProfile = () => {
    const chpasswordRef = useRef();
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        const newPassword = chpasswordRef.current.value;
        
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBRJJ6gHcpdlbKrj_lWZsJorPQYDH74MAE", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                idToken: authCtx.token,
                password: newPassword,
                returnSecureToken: true
            })
        }).then(res => res.json()).then(data => {
            console.log(data.email,"Success");
            
            history.replace('/dashboard')
        }).catch(err=>console.log(err,"error"))
        
    }

        
        
    
    return (
        <>
        <Navigation/>
            <Card style={{ maxWidth: "45rem", width: "90%" }} className="mx-auto mt-5">
                <Card.Body>
                    <Card.Title className="text-center">Hi {authCtx.name}, Update Your Profile</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ maxWidth: "45rem", width: "90%" }} className="mx-auto mt-5 p-2">
                <Card.Body>
                    <Card.Title className="text-center">Email:{authCtx.email}</Card.Title>
                    <Form>
                        <Form.Group id="password">
                            <Form.Label>Change Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required ref={chpasswordRef} />
                        </Form.Group>
                        <div className="text-center mt-3">
                            <Button variant="primary" onClick={submitHandler}>Change Password</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default UserProfile
