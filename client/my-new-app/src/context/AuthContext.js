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
 /* user:{
        _id:"6557664a42a89bb469f97c08",
        username:"vidhigupta",
        email:"vidhi123@gmail.com",
        password:"vidhi123456",
        profilePicture:"",
        coverPicture:"",
        followers:[],
        followings:[1,2],
        isAdmin:false,
        desc:"Happy Coder" 
       
    },  */
    
    user: parsedUser,
   // user:JSON.parse(localStorage.getItem("user")) || null ,
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