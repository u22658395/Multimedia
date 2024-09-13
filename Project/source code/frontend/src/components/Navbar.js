import React from "react";
import { Link } from "react-router-dom";
import { Overlay } from "./Overlay";

export class Navbar extends React.Component {    
    render(){
        return(
            <div id="nav-wrapper">
                <div id="navbar">
                    <span id="logo">GrooveList</span>

                    <span id="pages">
                        <Link to="/Home" className="page">Home</Link>
                        <Link to="/playlist" className="page">Playlists</Link>
                        <Link to="/profile" className="page">Profile</Link>
                        <Link to="/profile/:id" className="page">Profile</Link>
                    </span>
                </div>
            </div>

        )
    }
}