import {createContext,useReducer} from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user:{
        _id:"6556132b7a6ada4d699aa15b",
        username:"_mradul_",
        email:"paliwal123@gmail.com",
        password:"$2b$10$FrKTAG6fVHrzhpZG9NYSUug1g5Q.VgYykjZLaPNZJgZ2DU5Qs26XW",
        profilePicture:"",
        coverPicture:"",
        followers:[],
        followings:[],
        isAdmin:false
       
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