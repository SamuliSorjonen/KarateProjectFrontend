import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom'
export const AuthContext = React.createContext();

const apiURL="http://localhost:8080/";

class AuthProvider extends Component {
constructor(props) {
    super(props)
    this.state = {
        isLoggedIn:localStorage.getItem("Token") === null ? false : true,
        token:"" || localStorage.getItem("Token"),
        username:"" || localStorage.getItem("username"),
        message:"",
        creatorMessage:""
    }
}

    getAllStyles() {
        return axios.get(apiURL + "api/styles").then(data => {return data.data})
    }

    getAllKaratekas=()=>{
    return axios.get(apiURL + "api/karatekas", {headers:{
            authorization:this.state.token
        }
        }).then(res =>{return res.data})
    }

    signUp(data) {
        return axios.post(apiURL + "api/user/sign-up", data)
            .then(res => {return res})
            .catch(err => {
                console.log(err)
                return err.response
            })
    }

    logIn=(data)=> {
        return axios.post(apiURL + "login", data)
            .then(res => {
                console.log(res)
                localStorage.setItem("Token", res.headers.authorization)
                localStorage.setItem("username", data.username)
                this.setState({
                    isLoggedIn: true,
                    token: localStorage.getItem("Token"),
                    username: localStorage.getItem("username"),
                    creatorMessage:""
                })
                return res;
            })
            .catch(err => {return err})
        }


    logOut =()=> {
        localStorage.removeItem("Token");
        localStorage.removeItem("username");
        this.setState({isLoggedIn:false, token:"", username:"", message:"", creatorMessage:""})
    }

    getUser =()=>{
    return axios.get(apiURL + "api/user",{
        headers:{
            authorization:this.state.token
        }
        })
        .then(res => {return res.data})
    }

    editStyle=(id, data)=>{
    return axios.put(apiURL + "api/styles/" + id, data, {
        headers:{
            authorization:this.state.token
        }
    })
        .then(res => {return res})
        .catch(err => {return err.response})
    }

    addKaratekaToStyle =(styleId, karatekaId)=>{
    return axios.put(apiURL + "api/styles/addfounder/" + styleId+"?karatekaId="+karatekaId.karatekaId,{karatekaId},{
            headers:{
                authorization:this.state.token
            }
        })
        .then(res=>{return res})
        .catch(err =>{return err.response})
    }

    render() {
    return (
    <AuthContext.Provider
    value={{
        ...this.state,
        getAllStyles:this.getAllStyles,
        logIn:this.logIn,
        logOut:this.logOut,
        signUp:this.signUp,
        getUser:this.getUser,
        editStyle:this.editStyle,
        getAllKaratekas:this.getAllKaratekas,
        addKaratekaToStyle:this.addKaratekaToStyle,
        AuthContext
    }}
    >
        {this.props.children}
    </AuthContext.Provider>
    )
    }
}

export const Consumer = AuthContext.Consumer;
export const Provider = AuthProvider;