import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return <Profile/>

}

library.add(fas);
export default App;
