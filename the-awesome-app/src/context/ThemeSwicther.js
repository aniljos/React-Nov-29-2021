import { useContext } from "react";
import { AppTheme } from "./AppTheme";

function ThemeSwitcher(){

    const theme = useContext(AppTheme);

    function change(){
        if(theme.state.mode === "dark"){
            theme.dispatcher({type: "LIGHT"})
        }

        if(theme.state.mode === "light"){
            theme.dispatcher({type: "DARK"})
        }
    }
    return (
        <button className="btn btn-warning" onClick={change}>Switch Theme</button>
    )
}

export default ThemeSwitcher;