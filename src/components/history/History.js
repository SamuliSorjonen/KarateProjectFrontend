import React, {Component} from 'react';
import HistoryInfo from "./HistoryInfo";

class History extends Component {
    render() {
        return (
            <div style ={frame}>
                <br/>
                <HistoryInfo/>
            </div>
        );
    }
}

const frame = {
    backgroundImage: "url(" + "/pictures/bonzai.jpg"+")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height:'695px',
    margin:'0'
}


export default History;