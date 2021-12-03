import { AppTheme } from "./AppTheme";
import {useReducer} from 'react';

const theme = {
    mode: "dark"
}
const reducer = (currentState, action)=> {

    //return the updatedState
    if(action.type === "DARK"){
        return {
            mode: "dark"
        }
    }
    if(action.type === "LIGHT"){
        return {
            mode: "light"
        }
    }
    return currentState;
}
function AppThemeProvider(props){

    const [store, dispatcher] = useReducer(reducer, theme);

    return (
        <AppTheme.Provider value={{state: store, dispatcher: dispatcher}}>
               {props.children}
        </AppTheme.Provider>
    )
}

export default AppThemeProvider;