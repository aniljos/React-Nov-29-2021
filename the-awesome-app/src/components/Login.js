import React, { useState } from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
function Login(props){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    //dispatch is a method of redux to dispatch an action
    const dispatch = useDispatch();

    async function login(){
        console.log(userName, password);

        try {
            var url = "http://localhost:9000/login";
            const response = await axios.post(url, {name: userName, password: password});
            setMessage("");
            //dispatch an action
            dispatch({type: "SET_AUTH", payload:  {
                isAuth: true,
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken
            }});
            props.history.push("/gadgets");

        } catch (error) {

            setMessage("Failed to login...");
            dispatch({type: "SET_AUTH", payload:  {
                isAuth: false,
                accessToken: "",
                refreshToken: ""
            }});
        }
    }
    return(
        <div>
            <h3>Login</h3>

            {message ? <div className="alert alert-danger">{message}</div> : null}
            
            <p>UserName</p>
            <div>
                <input className="form-control" value={userName} 
                                            onChange={(e) => setUserName(e.target.value) }/>
            </div>
            <p>Password</p>
            <div>
                <input className="form-control" type="password" value={password} 
                                            onChange={(e) => setPassword(e.target.value) }/>
            </div>
            <br/>
            <button className="btn btn-success" onClick={login}>Login</button>
        </div>
    )
}

export default Login;