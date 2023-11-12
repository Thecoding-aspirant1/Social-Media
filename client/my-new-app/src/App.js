//App.js

import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import Profile from "./pages/profile/Profile"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


//import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <Router>
    <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
    
    
    
    </Routes>



    </Router>


  );
    
  

}

library.add(fas);
export default App;
