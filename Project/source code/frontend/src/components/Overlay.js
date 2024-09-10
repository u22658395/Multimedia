import React from "react";
export class Overlay extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            toggledOverlay:false
        }
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.displayContent = this.displayContent.bind(this);

    }
    toggleOverlay(){
        this.setState({toggledOverlay:!this.state.toggledOverlay})
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
                <div onClick={this.props.toggleForm} id="close-overlay">
                    x
                </div>
            </div>
        )
    }
}