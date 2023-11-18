import {createContext,useReducer} from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
   user:{
        _id:"6557669342a89bb469f97c0b",
        username:"alluring stardom",
        email:"thisistanisha@gmail.com",
        password:"tanisha123456",
        profilePicture:"",
        coverPicture:"",
        followers:["6557664a42a89bb469f97c08"],
        followings:["6557664a42a89bb469f97c08"],
        isAdmin:false,
        desc:"Coffeeholic"
       
    },
    isFetching:false,
    error: false
}


export const AuthContext = createContext(INITIAL_STATE);


export const AuthContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE);

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