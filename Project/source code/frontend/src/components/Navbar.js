import React from "react";
import { Link } from "react-router-dom";
import { Overlay } from "./Overlay";
import {LoginForm} from "./LoginForm"

export class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toggledOverlay:false
        }
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.loginForm = this.loginForm.bind(this);
    }
    toggleOverlay(){
        this.setState({ toggledOverlay: !this.state.toggledOverlay }); 
    }
    loginForm(){
        return <LoginForm/>
    }
    render(){
        let overlay;
        if(this.state.toggledOverlay){
            overlay = <Overlay toggleOverlay={this.toggleOverlay} content={this.loginForm} />
        }
        else{
            overlay = "";
        }
        return(
            <div id="navbar">
                <span id="logo">GrooveList</span>

                <span id="pages">
                    <Link to="/" className="page">Home</Link>
                    <Link to="/" className="page">Playlists</Link>
                    <Link to="/profile" className="page">Profile</Link>
                </span>

                <span onClick={this.toggleOverlay} className="page" id="login-button">Login</span>
                
                {overlay}
            </div>

        )
    }
}