import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";


{/* <ProtectedRoute path="/gadgets" component={Gadgets}/> */}
function ProtectedRoute(props){

    const isAuth = useSelector(state=> state.auth.isAuth);

    if(isAuth === true){
        return (
            <Route {...props} />
        )
    }
    else{
        return (
            <Route path={props.path} >
                <Redirect to={"/login?redirectTo=" + props.path}/>
            </Route>
        )
    }
}

export default ProtectedRoute;