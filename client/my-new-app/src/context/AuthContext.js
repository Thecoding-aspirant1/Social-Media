import {createContext,useReducer,useEffect} from "react";
import AuthReducer from "./AuthReducer";

const userFromLocalStorage = localStorage.getItem("user");
let parsedUser = null;

try {
  parsedUser = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
} catch (error) {
  console.error("Error parsing user from localStorage:", error);
  // Handle the error if needed
} 
const INITIAL_STATE = {
  /*  user:{
        _id:"6558d373b70167f0ea22979c",
         conversationId:"6558d0208e71a459cd19d7a7"
        

       
       
       
    },  */
    
    user: parsedUser,
  
    isFetching:false,
    error: false
}


export const AuthContext = createContext(INITIAL_STATE);


export const AuthContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
      },[state.user]) 
    

    return(
        <AuthContext.Provider 
        value={{
        user:state.user,
        isFetching:state.isFetching,
        error:state.error,
        dispatch,
        }}>
        {children}
        </AuthContext.Provider>
    )
}