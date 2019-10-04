import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import {Consumer, Provider, AuthContext} from "../Authcontext";
import OneStyle from "./OneStyle";

class EditStyle extends Component {

    state = {
        id:this.props.location.state.id,
        name:this.props.location.state.name,
        foundationYear:this.props.location.state.foundationyear,
        description:this.props.location.state.description,
        story:this.props.location.state.story,
        karatekas:[],
        karatekaId:""
    }

    componentDidMount() {
        this.context.getAllKaratekas()
            .then(data =>{
                this.setState({karatekas: data})
                console.log(data)
            })};

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.context.editStyle(this.state.id, this.state)
            .then(res => console.log(res.data))
    }

    handleFounderSubmit = event => {
        event.preventDefault();
        const karatekaId=parseInt(this.state.karatekaId)
        const info ={karatekaId}
        console.log(info)
        this.context.addKaratekaToStyle(this.state.id, info)
    }

    render() {
        var karatekas = this.state.karatekas.map((karateka)=>{
            return(<option key={karateka.id} value={karateka.id}>{karateka.name}</option>)});

        return (
            <div style={styleEdition}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Karate style name</Form.Label>
                        <Form.Control
                            type="name"
                            placeholder={this.state.name}
                            value={this.state.name}
                            onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="foundationYear">
                        <Form.Label>Foundation year</Form.Label>
                        <Form.Control
                            type="foundationyear"
                            placeholder={this.state.foundationYear}
                            value={this.state.foundationYear}
                            onChange={this.handleChange}
                            />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="description"
                            placeholder={this.state.description}
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="story">
                        <Form.Label>Story</Form.Label>
                        <Form.Control
                            type="story"
                            placeholder={this.state.story}
                            value={this.state.story}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Form onSubmit={this.handleFounderSubmit}>
                    <Form.Group controlId="karatekaId">
                        <Form.Label>Founder</Form.Label>
                        <Form.Control as="select" type="number" onChange={this.handleChange}>
                            <option>Choose founder...</option>
                            {karatekas}
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

const styleEdition = {
    margin:"20px"
}
EditStyle.contextType=AuthContext;
export default EditStyle;