import {useEffect, useState} from 'react'
import axios from 'axios';
import {useSelector} from 'react-redux';

function Gadgets(){

    const [products, setProducts] = useState([]);
    //const authData = useSelector(reduxState => reduxState.auth);
    const authData = useSelector((reduxState) => { return reduxState.auth});
    //const [count, setCount] = useState(0);

    console.log("outside use effect...");   
    useEffect(() => {
        console.log("in use effect...componentDidMount");   
        console.log("authData", authData);
        fetch();

        //equivalent of the componentWillUnmount
        return () => {
            console.log("in use effect...componentWillUnmount");  
        }
    }, [])

    useEffect(() => {
        console.log("in use effect...componentDidUpdate(product)");  
    }, [products])

    async function fetch(){

        try {
            
            const url = "http://localhost:9000/products";
            const response = await axios.get(url);
            setProducts(response.data);
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    }

    function update(){

        setProducts([{id:1, name:"abc"}]);
       
    }
    function renderProducts() {

        const productsView =  products.map((item, index) => {
            return (
                <div className="col" key={index} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button href="#" className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
    
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }

    return(
      <div>
          <h4>Gadgets</h4>
          <button onClick={update}>Update</button>
          {renderProducts()}
      </div>  
    )
}

export default Gadgets;