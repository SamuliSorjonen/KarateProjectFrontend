import React, {Component} from 'react';
import {Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

class OneStyle extends Component {

    state = {
        karatestyle:this.props.info
    }
    render() {
        return (

                <Card style={{ width: '18rem', padding: '10px', margin:'10px' }}>
                    <Card.Img variant="top" src="/pictures/karate.jpg" />
                    <Card.Body>
                        <Card.Title>{this.state.karatestyle.name}</Card.Title>
                        <Card.Text>
                            {this.state.karatestyle.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">

                        <ListGroupItem>Founded:{this.state.karatestyle.foundationYear}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="https://shukokai.fi"> Link to {this.props.name} federation pages</Card.Link>
                        <Link to={{pathname:'/plans/'+ this.props.id + '', state: this.props}}/>
                    </Card.Body>
                    <Link to={{pathname:'/styles/'+ this.state.id + '', state:this.state}}>
                        <Button style={buttonStyle}>Read more about this karate style</Button>
                    </Link>
                </Card>

        );
    }
}
const buttonStyle = {
    background:'rgb(70,70,70)'
}

export default OneStyle;