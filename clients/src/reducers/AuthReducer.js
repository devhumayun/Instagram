import cookie from 'js-cookie'

// initial state
export const INITIAL_STATE = {
    isUserLoggedIn : false,
    user_info : { }
};

export const AuthReducer = ( state , {type, payload } ) => {

    switch (type) {
        case "LOGIN_USER_SUCCESS":
            
            return({
                isUserLoggedIn : true,
                user_info : payload
            });
        case "USER_LOGOUT":
            
            return({
                isUserLoggedIn : false,
                user_info : {}
            });
            

        default:
            break;
    }

}

