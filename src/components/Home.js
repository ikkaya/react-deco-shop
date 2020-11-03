import React, { Component } from 'react';
import {img7, img8, img9, img10, img12} from '../img/img.js';
import Carousel from 'react-bootstrap/Carousel'

export default class Home extends Component {
    render() {
        return (
            <div >
                <br/><br/><br/>
                <h1 style={{fontFamily:"Gabriela, serif", textAlign: "center", color:"#2c6979cc"}}><b>DECO SHOP</b></h1>
                <br/><br/>
                <div className="container">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img7}
                                alt="First slide"/>
                                <Carousel.Caption>
                                    <h3>Best home decorating ideas and trends</h3>
                                    <br/><br/>
                                </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img8}
                                alt="First slide"/>
                                <Carousel.Caption>
                                    <h3>Timeless design</h3>
                                    <p>Travelling through time for interior home design</p>
                                </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div style={{marginTop:"250px"}}></div>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6 lg-6 sm-6">
                            <div className="card" style={{ height: '100%' }}>
                                <img className="card-img-top" src={img12} alt="Card cap"/>
                                <div className="card-body">
                                    <p className="card-text" style={{color:"#153f2a"}}><i>HAVE A COLORFUL LIFE WITH COLORFUL HOME DESIGN</i></p>
                                    <a href="/products" className="btn btn-outline-info btn-md btn-rounded btn-home waves-effect waves-light">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 lg-6 sm-6" >
                            <div className="card" style={{ height: '100%' }}>
                                <img className="card-img-top" src={img10} alt="Card cap"/>
                                <div className="card-body">
                                    <p className="card-text"style={{color:"#153f2a"}}><i>DESIGN YOUR COLORFUL LIFE WITH COLORS OF THE NATURE</i></p>
                                    <a href="/products" className="btn btn-outline-info btn-md btn-rounded btn-home waves-effect waves-light">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <div style={{marginTop:"250px"}}></div>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6 lg-6 mb-2">
                            <div className="card" style={{height:"30vh", borderColor: "transparent"}}>
                                <div className="card-body">
                                    <p className="card-text" style={{marginTop:"70px", color:"#194D33", fontSize:"20px", paddingLeft:"20px"}}><i>Could you have a look the latest projects to mix multiple decor styles without losing your mind?</i></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 lg-6 mb-2" > 
                            <img className="d-block w-100" src={img9} alt="First slide"/>  
                        </div>
                    </div>
                </div>
                
                
            </div>
            
    
        )
    }
}
