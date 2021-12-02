import {createStore, combineReducers} from 'redux';

const authData = {
    accessToken: "",
    refreshToken: "",
    isAuth: false
}
//reducer
const authReducer = (currentState=authData, action)=> {

    //return the updated state
    if(action.type === "SET_AUTH"){
        return {
            ...action.payload
        }
    }

    return currentState;
}

const cartData = {
    cart: []
}

//reducer
const cartReducer = (currentState=cartData, action)=> {

    //return the updated state
    return currentState;
}


//store
//export const store = createStore(reducer);

export const store = createStore(combineReducers({auth: authReducer, cart: cartReducer}), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());