import React, {Component} from 'react';
import {Consumer, Provider, AuthContext} from "../Authcontext";
import OneStyle from "./OneStyle";
import {Col, Container, Row} from "react-bootstrap";
import Signin from "../loginandsignin/Signin";

class Karatestyles extends Component {

    state = {styles :[]};

    componentDidMount=() => {
    this.context.getAllStyles()
        .then(data =>{
        this.setState({styles: data})
    })};

    render() {

        var styles = this.state.styles.map((style)=>{
            return(<OneStyle key={style.id} info={style}/>)});

        return (
            <div>
                <Container style={{alignItems:'center'}}>
                    <Row>
                    {styles}
                    </Row>
                </Container>
            </div>
        );
    }
}
Karatestyles.contextType = AuthContext;
export default Karatestyles;