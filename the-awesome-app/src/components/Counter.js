import {Component} from 'react';

class Counter extends Component{

    //immutable
    state = {
        count: 10,
        message: "hello"
    }

    inc = (evt) => {
       // console.log("inc..", evt);
        //this.state.count++;
        const updatedCount = this.state.count + 1;
        //setState is async
        // setState(slice of the state to update, callback to be invoked after the state is updated)
        this.setState({
            count: updatedCount
        }, () => {
            console.log("count", this.state.count);
        });
       
    }
    decr = () => {
        console.log("decr..");
        const updatedCount = this.state.count - 1;
        this.setState({
            count: updatedCount
        });
    }

    change = (evt) => {

        const value = evt.target.value;
        this.setState({
            count:  value //? parseInt(value) : 0
        });
    }

    render(){
        //retrun the JSX
        return (
            <div>
                <h4>Counter: {this.state.count}</h4>
                <p>This is a class component</p>
                <p>Message: {this.props.message}</p>
                <div>
                    <button onClick={this.inc}>Inc</button>&nbsp;
                    <button onClick={this.decr}>Decr</button>
                </div>
                <div>
                    Count: <input type="number" placeholder="Count" 
                                    value={this.state.count} onChange={this.change}/>
                </div>
            </div>
        )
    }
}

export default Counter;