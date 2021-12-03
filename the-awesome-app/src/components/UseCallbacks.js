import React, { useState, useCallback } from 'react';

// Recat.memo ==> ensures the component is updated onlyif state or props changes
const Simple =  (props) => {
    console.log("executing simple..");
    return (
        <div>
            <h4>Simple</h4>
            <p>Counter: {props.counter}</p>
            <p>
                <button onClick={() => props.onUpdate()}>Update</button>
            </p>
        </div>
    );
};



const UseCallbackDemo = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    //callback
    const update = useCallback(() => {

        setCount(count + 2);
        alert("in update..." +  count);
    }, [count]);

    return (
        <div>
            <h3>UseCallback Demo</h3>

            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            <div>
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <Simple counter={count} onUpdate={update}/>
        </div>
    )
}

export default UseCallbackDemo;