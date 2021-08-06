import React,{useState} from 'react'

const AuthContext = React.createContext({
    token: "",
    isLogged: false,
    login: token => { },
    logout: () => { },
    email: "",
    name: "",
    city: "",
    country: "",
    customInput: (a, b) => { },
    weatherData: {},
   
   
});




export const AuthProvider = ({ children }) => {
    const initialToken = localStorage.getItem("token");
    const [token, setToken] = useState(initialToken);
    const initialEmail = localStorage.getItem("email");
    const [userEmail, setUserEmail] = useState(initialEmail);
    const initialName = localStorage.getItem("name");
    const [userName, setUserName] = useState(initialName);
    // const initialCity = localStorage.getItem("city");
    // const [city, setCity] = useState(initialCity);
    // const [city, setCity] = useState("");
    const [hourlyData, setHourlyData] = useState([]);
  
    const [weatherData,setWeatherData]=useState({
        city: "Loading",
        counry:"",
        temp: "",
        max_temp: "",
        min_temp: "",
        description: "Loading",
        lat: "",
        lon: "",
        dt:"",
        
    })
   
 



    const userIsLoggedIn = !!token; // if token is not empty return true otherwise false 

    const logOutHandler = () => {
        setToken("");
        localStorage.removeItem("token")
        setUserEmail("");
        localStorage.removeItem("email");
        setUserName("");
        localStorage.removeItem("name")
      
        

      
    }

    const logInHandler = (token,email,username) => {
        setToken(token);
        localStorage.setItem("token", token);
        setUserEmail(email);
        localStorage.setItem("email", email);
        setUserName(username);
        localStorage.setItem("name", username);
       
    }
    const customInput = (data) => {
        setWeatherData({
            city: data.name,
            country:data.sys.country,
            temp: data.main.temp,
            max_temp: data.main.temp_max,
            min_temp: data.main.temp_min,
            description: data.weather[0].description,
            lat: data.coord.lat,
            lon: data.coord.lon,
            dt:data.dt
        });
        
      
      
        
    }
    // const getCity = (city) => {
    //     setCity(city);
        
    // }
    const hourlyTemp = (tempArr) => {
        setHourlyData(tempArr)

    }



   
   

    const contextValue = {
        token: token,
        isLogged: userIsLoggedIn,
        login: logInHandler,
        logout: logOutHandler,
        email: userEmail,
        name: userName,
        // city: city,
        // getCity:getCity,
        customInput: customInput,
        weatherData: weatherData,
        hourlyTemp:hourlyTemp,
        hourlyData:hourlyData,
      
        

 
    }

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}
    



export default AuthContext