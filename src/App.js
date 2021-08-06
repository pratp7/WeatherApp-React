import {Switch, Route,Redirect} from "react-router-dom";
import Header from "./components/IntroPage/Header/Header";
import LandingPage from "./components/IntroPage/Landing Page/LandingPage"
import DashBoard from "./components/DashBoard/DashBoard";
import AuthForm from "./components/IntroPage/LoginSignUp/AuthForm";
import UserProfile from "./components/DashBoard/UserProfile/UserProfile";
import About from "./components/DashBoard/About/About"
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/IntroPage/LoginSignUp/ForgotPassword";

function App() {


  return (
    <>
       <Switch>
           <Route path="/" exact>
              <Header />
              <LandingPage/>
            </Route>
           <Route path="/login">
                  <Header />
                  <AuthForm />
        </Route>
        <Route path="/forgot-password">
                  <Header />
                  <ForgotPassword />
        </Route>
        <PrivateRoute path="/dashboard" component={DashBoard}/>
        <PrivateRoute path="/profile" component={UserProfile} />
        <PrivateRoute path="/about" component={About}/>
        <Route path="*">
          <Redirect to="/" />
        </Route>
          
       </Switch>
    
    </>
  );
}

export default App;
