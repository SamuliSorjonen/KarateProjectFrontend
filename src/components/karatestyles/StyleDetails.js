import React, {Component} from 'react';
import {Card, ListGroup, ListGroupItem, Button, Media,  } from "react-bootstrap";
import {Consumer, Provider, AuthContext} from "../Authcontext";
import {Link} from "react-router-dom";

class StyleDetails extends Component {

    state = {
        id:this.props.karatestyle.id,
        name:this.props.karatestyle.name,
        foundationyear:this.props.karatestyle.foundationYear,
        description:this.props.karatestyle.description,
        story:this.props.karatestyle.story,
        founder:this.props.karatestyle.founder,
        practitioners:this.props.karatestyle.practitioners
    }


    render() {

        var founders="not known founder";

        if(this.state.founder!=null){
            founders=this.state.founder.name
        }

        return (
            <div>
                <br/>
                <br/>
            <div style={mediaStyle}>
                <h3>{this.state.name}</h3>
                <br/>
                <Media>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src="../karate.jpg"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>Founded</h5>
                        <p>In {this.state.foundationyear} by {founders}</p>
                    </Media.Body>
                </Media>
                <br/>
                <Media>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src="../karate.jpg"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>Story</h5>
                        <p>{this.state.story}</p>
                    </Media.Body>
                </Media>
                <br/>

                {this.context.isLoggedIn&&
                <Link to={{pathname:'/editstyle/'+ this.state.id + '', state:this.state}}>
                <button style={buttonStyle}>Edit this style</button>
                </Link>}
                <br/>
                </div>
                </div>
        );
    }
}
const mediaStyle = {
    background:'transparent',
    border:'solid',
    borderColor:'black',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding:'30px',
    marginLeft:'40px',
    marginRight:'40px',
    borderRadius:'10px',
    color:'black'
}

const buttonStyle = {
    float:'right',
    margin:"auto"
}
StyleDetails.contextType=AuthContext;
export default StyleDetails;