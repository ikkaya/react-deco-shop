import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions';
import Checkout from './Checkout';

class Cart extends Component {
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    } 
    render() {
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                        
                        <div className="row my-2 text-center list-group-item avatar" key={item.id}>
                        
                                    <div className="row text-center item-desc">
                                        <div className="col-10 mx-auto col-lg-2 list-group-item-img"> 
                                            <img src={item.img} alt={item.img} className=""/>
                                        </div>
                                        <span className="col-10 mx-auto col-lg-2 title">{item.title}</span>
                                        <p className="col-10 mx-auto col-lg-2"><b>Price: {item.price}$</b></p> 
                                        
                                        <div className="col-10 mx-auto col-lg-2">
                                            <p><b>Quantity: {item.quantity}</b></p>
                                            <Link to="/cart"><Icon className="fas fa-arrow-up" style={{color: '#194D33'}} onClick={() => {this.handleAddQuantity(item.id)}}/></Link>
                                            <Link to="/cart"><Icon className="fas fa-arrow-down" style={{color: '#194D33'}} onClick={() => {this.handleSubtractQuantity(item.id)}} /></Link>
                                        </div>
                                        <div className="col-10 mx-auto col-lg-2 ">
                                            <button className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light" onClick={() => {this.handleRemove(item.id)}}>Remove</button>
                                        </div>
                                        <p className="col-10 mx-auto col-lg-2 "><b>Total: {item.quantity * item.price}$</b></p>
                                        
                                    </div>
                                    
                               </div>                        
                    )
                })
            ):

             (
                <p style={{paddingLeft:"70px"}}>Cart is empty.</p>
             )
       return(
            <div className="container-fluid">
                <div className="cart">
                    <br/>
                    <div className="container-fluid text-center d-none d-lg-block">
                        <div className="row" style={{color:"#575063"}}>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">products</p>
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">name of product</p>
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">price</p>
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">quantity</p>
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">remove</p>
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <p className="text-uppercase">total</p>
                            </div>
                        </div>
                    </div>
                    <ul className="list-group">
                        {addedItems}
                        
                    </ul>
                    <div className="text-right">
                        <Checkout />
                    </div>
                </div>  
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
 