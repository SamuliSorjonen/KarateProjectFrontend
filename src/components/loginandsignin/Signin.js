import React, {Component} from 'react';
import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import { Redirect } from 'react-router-dom'
import {Consumer as AuthConsumer, Provider, AuthContext} from "../Authcontext";


export default class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email:"",
            password: "",
            valid:false,
            message:""
        };
    }

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
            this.context.signUp({username:this.state.username, email:this.state.email, password:this.state.password})
                .then(data => {
                console.log(data.status)
                if(data.status===400) {
                    this.setState(null)
                    this.setState({valid:true})
                    this.setState({message : data.data});
                } else {
                    this.setState({valid:false});
                //    this.context.setState({creatorMessage:"Account for " + this.state.username + " created"})
                    this.props.history.push("/login")
                    console.log(data)
                }
            })
    }

    render() {
        return (
            <AuthConsumer>
                {({ signUp }) =>(
            <div className="Signin" style = {signinStyle}>
                <form onSubmit={this.handleSubmit} style={formStyle}>
                    <FormGroup controlId="email" bssize="large">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
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
                        Sign up
                    </Button>
                </form>
                {this.state.valid&&<p>{this.state.message}</p>}
            </div>)}
            </AuthConsumer>
        );

    }
}
Signin.contextType = AuthContext;

const signinStyle = {
    padding: '60px 0'
}
const formStyle = {
    margin: '0 auto',
    maxWidth: '320px',
}
const buttonStyle = {
    background:'rgb(0,0,0)'
}
