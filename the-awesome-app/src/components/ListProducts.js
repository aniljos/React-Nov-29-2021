import {Component} from 'react';
import axios  from 'axios';


class ListProducts extends Component{

    state = {
        products: []
    }

    async componentDidMount(){

        var url = "http://localhost:9000/products";

        try {
            
            const response = await axios.get(url);
            console.log("response", response);
            this.setState({products: response.data});


        } catch (error) {

            console.log(error);
        }

    }
    

    render(){
        return (
            <div>
                <h4>Products</h4>
                <div>
                    {this.state.products.map((item, index) => {
                        return (
                            <div>
                                <p>Id: {item.id}</p>
                                <p>Name: {item.name}</p>
                                <p>Description: {item.description}</p>
                                <p>Price: {item.price}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default ListProducts;