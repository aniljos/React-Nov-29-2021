import {Component} from 'react';

class Counter extends Component{

    render(){
        //retrun the JSX
        return (
            <div>
                <h4>Counter: 0</h4>
                <p>This is a class component</p>
                <p>Message: {this.props.message}</p>
            </div>
        )
    }
}

export default Counter;