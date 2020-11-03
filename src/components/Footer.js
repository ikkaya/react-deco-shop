import React from "react";

const Footer = () => (
    <div className="page-container">
        <div className="wrapper">
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col" style={{paddingLeft:"40px"}}>
                            <br />
                            <h4 style={{fontFamily:"Gabriela, serif", fontSize:"30px"}}><b>DECO SHOP</b></h4>
                            <ul className="list-unstyled">
                                <li>425-13-33</li>
                                <li>Istanbul, TURKEY</li>
                                <li>123 Street</li> <br/>
                                <li>Follow us on:
                                    <i className="fab fa-facebook" style={{paddingLeft:"10px"}}/> 
                                    <i className="fab fa-instagram" style={{paddingLeft:"10px"}}/> 
                                    <i className="fab fa-twitter" style={{paddingLeft:"10px"}}/>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <br />
                            <h4>Support</h4>
                            <ul className="list-unstyled">
                                <li>About us</li>
                                <li>Payment Methods</li>
                                <li>Shipping Delivery</li>
                                <li>Contact</li>
                                <li>Terms and Conditions</li>
                            </ul>
                        </div>
                        <div className="col">
                            <br />
                            <h4>Informations</h4>
                            <ul className="list-unstyled">
                                <li>Warranty,Return and Exchange</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  
);

export default Footer;