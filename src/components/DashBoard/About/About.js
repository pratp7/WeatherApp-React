import React from 'react'
import Navigation from '../Navigation/Navigation'
import img from "./teamWork.jpg"
const About = () => {
    return (
       
        <>
            <Navigation/>
            <div style={{fontWeight:"bold"}}>
            <p className="p-5 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit mollitia aliquid quis repellat
                explicabo, consequatur reiciendis exercitationem in voluptas odit ratione obcaecati rem, officia
                tempore aut a quidem repellendus! Accusantium.
            </p>
            <p className="p-5 text-center ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit mollitia aliquid quis repellat
                explicabo, consequatur reiciendis exercitationem in voluptas odit ratione obcaecati rem, officia
                tempore aut a quidem repellendus! Accusantium.
                </p>
                </div>
            <div className="text-center">
                <img src={img} alt="work" height="200rem" />
            </div>
            </>
        
    )
}

export default About
