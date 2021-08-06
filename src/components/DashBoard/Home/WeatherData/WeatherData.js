import React,{useContext,useEffect} from 'react'
import classes from "./WeatherData.module.css"
import AuthContext from '../../../../store/AuthContext';

const WeatherData = () => {
    const API_key = "e66873db1caf6c60b3c24a0ed66113dd";
    const ctxAuth = useContext(AuthContext);
    
    const fetchApi = async (lat, long) => {
      let api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_key}`
        const res = await fetch(api);
        const data = await res.json();
        const ApiChart = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${long}&dt=${data.dt}&units=metric&appid=${API_key}`
        const reso = await fetch(ApiChart);
        const datac = await reso.json();
        // console.log(datac);
        ctxAuth.customInput(data);
        let mappedArr = datac.hourly.map(hour=>hour.temp)
        ctxAuth.hourlyTemp(mappedArr)
        }
            
    useEffect(() => {
       
             try {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                       fetchApi(position.coords.latitude, position.coords.longitude)
                        console.log("success")
                  
                    }, () => {
                        fetchApi(51.50853, -0.12574)
                        console.log("kindly grant access to your current location")
                    })
                } else {
                    alert("Geolocation is not supported by this browser")
                }
            } catch (e) {
                console.log(e);
             }
        
             
            

    }, [])
   
return (
        <>
            <div className={classes.tempDetails}>
              <h2>{ctxAuth.weatherData.city},{ctxAuth.weatherData.country}</h2>
                <h3>{ctxAuth.weatherData.temp}&deg; C</h3>
                <div className={classes.minMax}>
                    <h4>max:{ctxAuth.weatherData.max_temp}&deg; C</h4>
                    <h4>min:{ctxAuth.weatherData.min_temp}&deg; C</h4>
                </div>
            <h5>{ctxAuth.weatherData.description}</h5>
        </div>
        </>
    )
}

export default WeatherData
   