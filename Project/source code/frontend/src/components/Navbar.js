import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            login:false
        }
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

                <span className="page" id="login-button">Login</span>
            </div>
        )
    }
}