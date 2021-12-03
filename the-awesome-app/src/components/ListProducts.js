import {Component, PureComponent} from 'react';
import axios  from 'axios';
import './ListProducts.css';
import EditProduct from './EditProduct';


class ListProducts extends PureComponent{

    //immutable
    state = {
        products: [],
        selectedProduct: null
    }

    url = "http://localhost:9000/products";

    constructor(props){
        super(props);
        console.log("ListProducts constructor");
    }

    async componentDidMount(){

        console.log("ListProducts componentDidMount");
        //var url = "http://localhost:9000/products";
        try {
            
            const response = await axios.get(this.url);
            console.log("response", response);
            this.setState({products: response.data});


        } catch (error) {

            console.log(error);
        }
    }
    delete = async (product) => {

        try{
            const url = this.url + "/" + product.id;
            const response = await axios.delete(url);

            //copy of the state(products)
             const products = [...this.state.products];
             const index = products.findIndex(item => item.id === product.id);
             if(index !== -1){
                 products.splice(index, 1);
                 this.setState({
                     products
                 });
             }

            alert("Deleted product: " + product.id);



        }
        catch(error){
            alert("Failed to delete");
        }
    }

    edit = (product) => {
        this.setState({
            selectedProduct: product
        });
    }

    editUpdate = async(updatedProduct)=> {
        
        try {
            
            const url = this.url + "/" + updatedProduct.id;
            const resp = await axios.put(url, updatedProduct);
            const response = await axios.get(this.url);
            this.setState({
                products: response.data,
                selectedProduct: null
            });

        } catch (error) {
            alert("update failed");
        }
    }

    editCancel = () => {
        //alert("cancelling...");
        this.setState({
            selectedProduct: null
        });
    }

    render(){
        console.log("ListProducts render");
        return (
            <div>
                <h4>Products</h4>
                <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
                    {this.state.products.map((item, index) => {
                        return (
                            <div className="product" key={item.id}>
                                <p>Id: {item.id}</p>
                                <p>Name: {item.name}</p>
                                <p>Description: {item.description}</p>
                                <p>Price: {item.price}</p>
                                <div>
                                    <button className="btn btn-danger" onClick={() => {this.delete(item)}}>Delete</button>&nbsp;
                                    <button className="btn btn-warning" onClick={() => this.edit(item)}>Edit</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    {this.state.selectedProduct !== null ? 
                            <EditProduct 
                                prod={this.state.selectedProduct}
                                onSave={this.editUpdate}
                                onCancel={this.editCancel}/> : null}
                </div>

                
            </div>
        )
    }

    componentWillMount(){
        console.log("ListProducts componentWillMount");
    }
    componentWillReceiveProps(){
        console.log("ListProducts componentWillReceiveProps");
    }
    // shouldComponentUpdate(){
    //     console.log("ListProducts shouldComponentUpdate");
    //     return true;
    // }
    componentWillUpdate(){
        console.log("ListProducts componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("ListProducts componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("ListProducts componentWillUnmount");
    }

}

export default ListProducts;