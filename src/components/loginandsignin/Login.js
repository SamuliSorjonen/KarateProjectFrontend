import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {Consumer as AuthConsumer, Provider, AuthContext} from "../Authcontext";
import { Redirect } from "react-router-dom";
import Signin from "./Signin";
import Frontpage from "../Frontpage";
import {debuggerStatement} from "@babel/types";


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            message:""
        };

    }

    AuthContext=this.context;

     validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const password = this.state.password
        const username = this.state.username
        const userInfo = {username, password}
        this.context.logIn(userInfo)
            .then(res =>{
                if(res.status==200){
                this.props.history.push("/")
                }else{
                this.setState({message:"Could not log in, check your username and password!"})

                }
            })
            }


    render() {

        return (
            <AuthConsumer>
                {({ logIn, logOut, isLoggedIn }) =>(
            <div className="Login" style = {loginStyle}>
                <form onSubmit={this.handleSubmit} style={formStyle}>
                    <FormGroup controlId="username" bssize="large">
                        <FormLabel>Username</FormLabel>
                        <FormControl
                            autoFocus
                            type="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bssize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bssize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        style={buttonStyle}
                    >
                        Login
                    </Button>
                    <p>{this.state.message}</p>
                </form>
            </div>
                    )}
            </AuthConsumer>
        );
    }
}
Login.contextType = AuthContext;

const loginStyle = {
    padding: '60px 0'
}
const formStyle = {
        margin: '0 auto',
        maxWidth: '320px'
    }
const buttonStyle = {
    background:'rgb(0,0,0)'
}



