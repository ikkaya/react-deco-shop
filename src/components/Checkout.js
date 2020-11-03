import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { addShipping, subtractShipping } from './actions/cartActions';

class Checkout extends Component {
    componentWillUnmount() {
        if(this.refs.shipping.checked)
        this.props.subtractShipping()
    }
    handleChecked = (e) => {
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.subtractShipping();
        }
    }
    render() {
        return (
            <div className="container">
                <li className="list-group">
                    <li className="list-group-item">
                        <div>
                            <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                            <span style={{paddingLeft:"10px"}}>Shipping(+6$)</span>
                        </div>
                    </li>
                    <li className="list-group-item"><b>General Total: {this.props.total} $</b>
                    <br/><br/>
                    <button className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Checkout</button>
                    </li>
                    
                </li>
                
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        subtractShipping: ()=>{dispatch({type: 'SUBTRACT_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)