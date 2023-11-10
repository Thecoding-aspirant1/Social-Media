import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import Profile from "./pages/profile/Profile"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return <Home/>

}

library.add(fas);
export default App;
