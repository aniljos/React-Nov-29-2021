


function Hello(props){

    //return JSX
    return (
        <div>
            <h3>Hello React</h3>
            <p>This is a functional component</p>
            <p>Created at {new Date().toString()}</p>
            <p>Message: {props.message}</p>
        </div>
    )

}

export default Hello;