import React from "react";
export class Home extends React.Component {
    render() {
        return (
            <div id="content">
                <h1>Home</h1>

                <div id="home-header">
                    <div id="feed-headings-container">
                        <span className="feed-heading">Playlists</span>
                        <span className="feed-heading">Songs</span>
                    </div>
                </div>
            </div>
        );
    }
}