import React from "react";
import { Link } from "react-router-dom";
import { LoginForm, Overlay } from "./Overlay";

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
        
        return(
            <div id="navbar">
                <span id="logo">GrooveList</span>

                <span id="pages">
                    <Link to="/" className="page">Home</Link>
                    <Link to="/" className="page">Playlist</Link>
                    <Link to="/" className="page">Profile</Link>
                </span>

                <span onClick={this.toggleOverlay} className="page" id="login-button">Login</span>
                
                {this.state.toggledOverlay ? <Overlay toggleForm={this.toggleOverlay} content={this.loginForm} />:""}
            </div>

        )
    }
}