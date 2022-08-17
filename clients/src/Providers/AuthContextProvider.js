import { useReducer } from "react"
import AuthContext from "../Context/AuthContext"
import { AuthReducer, INITIAL_STATE } from "../reducers/AuthReducer"

// Create a provider
const AuthContextProvider = ({ children }) => {

    const [ state , dispatch ] = useReducer( AuthReducer, INITIAL_STATE )

    return(

      <AuthContext.Provider
        value={{
          isUserLoggedIn : state.isUserLoggedIn,
            user_info : state.user_info,
            dispatch
        }}
      >
        { children }
      </AuthContext.Provider>

    );

}


// export provider
export default AuthContextProvider