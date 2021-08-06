import React from 'react'
import { Container} from 'react-bootstrap'
import classes from "./LandingPage.module.css";
import logo from "./logo.png"
const LandingPage = () => {
    const year = new Date().getFullYear();
    return (
      
        <Container fluid className={classes.container}>
             <section className={classes.section}>
               <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quibusdam eum nostrum,
                rerum et repellendus eligendi vitae eaque quasi tenetur! At perferendis,
                in saepe dolore molestias et omnis velit quis?</p>
               <strong> Get weather details for more than 200,000 cities for FREE!!</strong>
            </section>
            <article className={classes.option}>
               <p>Get our app on device of your choice:</p> 
                <img src={logo} alt="device logo"/>

            </article>
            <footer>
                <section>
                    <p>Copyright &copy; {year}</p>
                    <p>Created by: <span>XYZ org</span></p>
                    
                </section>
                <p>Contact us: <a href="mailto:test@test.com" target="_blank" rel="noopener noreferrer">test@test.com</a></p>
            </footer>
           
            </Container>
          
    )
}

export default LandingPage
