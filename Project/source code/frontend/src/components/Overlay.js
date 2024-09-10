import React from "react";
export class Overlay extends React.Component{
    constructor(props) {
        super(props)
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.displayContent = this.displayContent.bind(this);

    }
    toggleOverlay(){
        this.props.toggleOverlay();
    }
    displayContent(){
        return this.props.content();
    }
    render(){
        return(
            <div id="overlay">
                <span id="overlay-content">
                    {this.displayContent()}
                </span>
                <div id="close-overlay" onClick={this.toggleOverlay} >
                    x
                </div>
            </div>
        )
    }
}