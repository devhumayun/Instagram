import { useReducer } from "react"
import LoaderContext from "../Context/LoaderContext"
import { LoaderReducer, LOADER_INITIAL_STATE } from "../reducers/LoaderReducer"

// Create a provider
const LoaderContextProvider = ({ children }) => {

    const [ loaderState , loaderDispatch ] = useReducer( LoaderReducer, LOADER_INITIAL_STATE )

    return(

      <LoaderContext.Provider
        value={{
          loaderState,
          loaderDispatch
        }}
      >
        { children }
      </LoaderContext.Provider>

    );

}


// export provider
export default LoaderContextProvider