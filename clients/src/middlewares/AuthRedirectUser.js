import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../Context/AuthContext"

//  create authredirect user
const AuthRedirectUser = ({ children }) => {

    const { isUserLoggedIn } = useContext(AuthContext)

    return isUserLoggedIn ? <Navigate to="/" /> : children

}

// export auth redirect 
export default AuthRedirectUser