import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import {Consumer as AuthConsumer, Provider, AuthContext} from "./Authcontext";

class Frontpage extends Component {


    render() {
        return (
            <Carousel style={carouselStyle}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/pictures/karategirl.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Traditional martial art</h3>
                        <p>Master your body, master your mind.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="pictures/darkkarate.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Become a samurai</h3>
                        <p>You can become a true warrior only through pain.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

const carouselStyle =  {
    width:'1200px',
    margin:'0 auto',
    marginTop:'30px'
}

export default Frontpage;