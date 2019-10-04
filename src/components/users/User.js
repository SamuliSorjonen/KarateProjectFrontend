import React, {Component} from 'react';
import {AuthContext} from "../Authcontext";
import OneStyle from "../karatestyles/OneStyle";

class User extends Component {

    state = {
        username :[],
        email:"",
        belt:"",
        trainingPlans:"",
        karateStyles:[]
    };

    componentDidMount=() => {
        this.context.getUser()
            .then(data =>{
            this.setState({
                username: data.username,
                email:data.email,
                belt:data.belt,
                trainingPlans:data.trainingPlans,
                karateStyles:data.karateStyles
            })
        })};

    render() {

        var styles = this.state.karateStyles.map((style)=>{
            return(<p>{style.name}</p>)});

        return (
            <div>
                {this.state.username}
                {styles}
            </div>

        );
    }
}
User.contextType = AuthContext;
export default User;