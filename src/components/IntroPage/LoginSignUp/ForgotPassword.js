import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'



const ForgotPassword= () => {
    const emailRef = useRef();
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

       
        try {
            setMessage("")
            setError("")
            setLoading(true)
            await fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBRJJ6gHcpdlbKrj_lWZsJorPQYDH74MAE", {
                method: "POST",
                headers: {
                    "Content-type":"application/json"
                },
                body: JSON.stringify({
                    requestType: "PASSWORD_RESET",
                    email:emailRef.current.value
                })
            })
            setMessage("check your inbox for further instructions");

        } catch (e) {
            console.log(e);
            setError("Failed to reset the password")
        }

        setLoading(false)


    }

    return (
        <>
            <Card style={{ maxWidth: "45rem", width: "90%" }} className="mx-auto mt-5">
                <Card.Body>
                    <h2 className="text-center mb-4">Reset Password</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required ref={emailRef} />
                        </Form.Group>
                        <Button disabled={loading} type="submit" variant="primary" className="w-100 mt-4">
                            Reset Password
                        </Button>
                    </Form>
                    
                </Card.Body>
            </Card>
         

        </>
    )
}

export default ForgotPassword
