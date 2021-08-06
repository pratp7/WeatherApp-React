import React,{useContext} from 'react'
import {CanvasJSChart} from 'canvasjs-react-charts'
import AuthContext from '../../../../store/AuthContext';
const History = () => {
    // const API_key = "e66873db1caf6c60b3c24a0ed66113dd";
    const ctxAuth = useContext(AuthContext);
    const { hourlyData } = ctxAuth;
    let dataP;
    if (hourlyData) {
        dataP= hourlyData.map((element, index) => {
            parseInt(element)
           return { x: index + 1, y: element };

        })
        console.log(dataP);
       
   }
   
   const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Temperature Difference"
        },
        axisY: {
            title: "Temperature",
            suffix: "C"
        },
        axisX: {
            title: "temperature difference",
            prefix: "H",
            interval: 1
        },
        data: [{
            type: "line",
            toolTipContent: "Hour {x}: {y}C",
            dataPoints: dataP
            // dataPoints: [
            //     { x: 1, y: ctxAuth.weatherData.min_temp },
            //     { x: 2, y: ctxAuth.weatherData.temp },
            //     { x: 3, y: ctxAuth.weatherData.max_temp},
            //    ]
            
        }]
   }
    //   console.log(ctxAuth.hourlyData, typeof(ctxAuth.hourlyData))
    return (
        <div style={{ maxWidth: "45rem", width: "90%",margin:"2rem auto",padding:"1rem"}}>
           <CanvasJSChart options = {options}/>
        </div>
    )
}

export default History
