import React, {Component} from 'react';
import StyleDetails from "./StyleDetails";

class StyleDetailFrames extends Component {
    render() {
        return (
            <div style={frames}>
                <StyleDetails karatestyle={this.props.location.state.karatestyle}/>
            </div>
        );
    }
}
const frames = {
    backgroundImage: "url(" + "../pictures/background.jpg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '695px',
    margin: '0',

}
export default StyleDetailFrames;