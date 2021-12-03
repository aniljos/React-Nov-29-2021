import { Component } from "react";

class EditProduct extends Component{

    state = {
        product: null
    }
    constructor(props){
        super(props);

        this.state.product = this.props.prod;

    }
    static getDerivedStateFromProps(nextProps, currentState){

        if(nextProps.prod.id !== currentState.product.id){

            //return the new state to be updated
            return {
                ...currentState,
                product: nextProps.prod
            };
        }
        else{
            //no state update
            return null;
        }
    }

    change = (evt) => {
        
        const value = evt.target.value;
        const propName = evt.target.name;
        const product = {...this.state.product};
        product[propName] = value;
        this.setState({
            product
        });

    }
    changePrice = (evt) => {
        
        const value = evt.target.value;
        
        const product = {...this.state.product};
        product.price =  value? parseFloat(value) : 0;
        this.setState({
            product
        });

    }
    save = () => {
        if(this.props.onSave){
            this.props.onSave(this.state.product);
        }
    }
    cancel = () => {
        if(this.props.onCancel){
            this.props.onCancel();
        }
    }
    render(){
        return (
            <div>
                <h4>Edit Product : {this.state.product.id}</h4>

                <div className="form-group">
                    <label for="name">Name</label>
                    <input id="name" className="form-control" placeholder="Name" name="name"
                                value={this.state.product.name} onChange={this.change}/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input className="form-control" type="number" placeholder="Price" name="price"
                                value={this.state.product.price} onChange={this.changePrice}/>
                </div>
                <div className="form-group">
                    <label>Desc</label>
                    <input className="form-control" placeholder="Desc" name="description"
                            value={this.state.product.description} onChange={this.change}/>
                </div>
                <div>
                    <button className="btn btn-success" onClick={this.save}>Save</button> &nbsp;
                    <button  className="btn btn-danger"onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default EditProduct;