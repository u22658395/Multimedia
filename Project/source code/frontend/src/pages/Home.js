import React from "react";
import { PlaylistFeed } from "../components/PlaylistFeed";
import { SongFeed } from "../components/SongFeed";
export class Home extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            content:"playlists"
        }
    }
    render() {
        return (
            <div id="content">
                <h1 id="home-heading">Home</h1>

                <div id="home-header">
                    <div id="feed-headings-container">
                        <span className="feed-heading">Playlists</span>
                        <span className="feed-heading">Songs</span>
                    </div>
                </div>
                {
                    this.state.content == "playlists" ? <PlaylistFeed playlists={this.props.playlists} /> : <SongFeed songs={this.playlist.songs} />
                }
            </div>
        );
    }
}