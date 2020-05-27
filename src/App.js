import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import SideBar from './components/SideBar'

import './App.css';


function App() {
  return (
    <div >      
 <BrowserRouter>
            <Switch>
           
             <Route path="/" component={LandingPage}  exact/>
                 
                 
             <Route path="/LoginPage" component={LoginPage}/> 
             <Route path="/SideBar" component={SideBar}/> 
          
            
           </Switch>
        
      </BrowserRouter>

     
    </div>




  );
}

export default App;

