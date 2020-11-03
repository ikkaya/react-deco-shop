import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';
import Icon from '@material-ui/core/Icon';

class Products extends Component {
    handleClick = (id) => {
        this.props.addToCart(id);
    }
    render() {
        let itemList = this.props.items.map(item=>{
            return(
                    <div className="col-md-4 mb-2">
                        <div className="card" key={item.id}>
                            <div className="card-image ">
                                <img src={item.img} alt="item" className="w-50 p-2" />
                                <Icon onClick={() => {this.handleClick(item.id)}} className="card-icon fa fa-plus-circle" style={{color: '#194D33'}}/>
                            </div>

                            <div className="card-content">
                                <span className="card-title"><b>{item.title}</b></span>
                                <p>{item.info}</p>
                                <p><b>Price: {item.price}$</b></p>
                            </div>
                        </div>
                    </div>   

                
            )
        })
        return(
           
                <div className="container">
                    <br /> 
                    <h3 style={{textAlign: "center", color:"#575063"}}>Our Items</h3>
                    <br />
                    <div className="box">
                        {itemList}
                    </div>
                </div>
             
        )
    }
}


const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps = (dispatch) =>{
    return {
        addToCart: (id) => {dispatch(addToCart(id))}
    }
}
  export default connect(mapStateToProps,mapDispatchToProps)(Products);

