import {Component} from 'react';
import axios  from 'axios';


class ListProducts extends Component{


    async componentDidMount(){

        var url = "http://localhost:9000/products";

        try {
            
            const response = await axios.get(url);
            console.log("response", response);

        } catch (error) {

            console.log(error);
        }

    }
    

    render(){
        return (
            <div>
                <h4>Products</h4>
            </div>
        )
    }
}

export default ListProducts;