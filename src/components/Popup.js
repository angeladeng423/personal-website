import React from "react";

import './Popup.css';

function Popup(props){
    return (props.trigger) ? (
        <div id = "popup">
        <div id = "bckgrnd">
            <div id = "cont">
                <h3>{props.title}</h3>
                <p>{props.date}</p>
                <p>{props.description}</p>
            </div>
            <button id = "close-btn" onClick = {() => props.setTrigger(false)}>Close</button>
        </div>
    </div>
    ): "";
}

export default Popup