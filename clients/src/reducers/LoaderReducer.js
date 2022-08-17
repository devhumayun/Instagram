
// initial state
export const LOADER_INITIAL_STATE = 0

export const LoaderReducer = ( state , {type, payload } ) => {

    switch (type) {
        case "LOADER_START":

            return 100;

        case "LOADER_END":
            
            return 0;
            

        default:
            break;
    }

}

