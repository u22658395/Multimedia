import React from "react";

export class Navbar extends React.Component {

    render(){
        return(
            <div id="navbar">
                <span id="logo">GrooveList</span>

                <span id="pages">
                    <span className="page">Home</span>
                    <span className="page">Playlist</span>
                    <span className="page">Profile</span>
                </span>

                <span className="page" id="login-button">Login</span>
            </div>
        )
    }
}