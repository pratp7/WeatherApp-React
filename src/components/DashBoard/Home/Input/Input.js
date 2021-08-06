import React,{useRef,useContext,useState} from 'react'
import classes from "./Input.module.css"
import AuthContext from '../../../../store/AuthContext';
import { Alert } from 'react-bootstrap';

const Input = () => {
    const cityRef = useRef();
    const ctxAuth = useContext(AuthContext);
    const [error, setError] = useState("");
    const API_key = "e66873db1caf6c60b3c24a0ed66113dd";
    // const API_City = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${API_key}`
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredCity = cityRef.current.value;
        // ctxAuth.getCity(enteredCity);
        

        const fetchApi = async () => {
          
            console.log(enteredCity);
            try {
                let api = `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&units=metric&appid=${API_key}`
                const res = await fetch(api);
                const data = await res.json();
                setError("");
            const ApiChart = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${data.coord.lat}&lon=${data.coord.lon}&dt=${data.dt}&units=metric&appid=${API_key}`
            const reso = await fetch(ApiChart);
            const datac = await reso.json();
            // console.log(datac);
            ctxAuth.customInput(data);
            let mappedArr = datac.hourly.map(hour=>hour.temp)
            ctxAuth.hourlyTemp(mappedArr)
            } catch (e) {
                setError("Invalid City");
            }
          
            
            
        }
        
        fetchApi();
        
        
     }

    return (
        <>
            <h3 className={classes.h3}>Search City:</h3>
            <form className={classes.form}>
            
                <input type="text" placeholder="City" ref={cityRef} required />
                <button type="button" onClick={submitHandler}>Search</button>
            </form>
            <div className={classes.error}>
                {error && <Alert variant="danger">{error}</Alert>}
            </div>
            
        </>
    )
}

export default Input
