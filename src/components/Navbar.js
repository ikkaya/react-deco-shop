import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logohome from '../logohome.svg';
import styled from 'styled-components';


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5" >
                <Link to="/"> 
                    <img src={logohome} alt="store" className="navbar-brand toplogo-img"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">home</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/products" className="nav-link">products</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <button className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">
                        <span className="mr-2">
                        <i className="fas fa-shopping-cart"/>
                        </span>
                        My Cart
                    </button>
                </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background-color: #dde1e9;
.nav-link{
    color: #766a8d !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    
}

.toplogo-img{
    height: 30%;
    width: 30%;
}

.btn-navbar{
    color: #766a8d !important;
    border-color: #766a8d !important;
    &:hover{
        background-color: #575063 !important;
        color: #dde1e9 !important;
    }
    
}
`