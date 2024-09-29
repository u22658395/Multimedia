import React from "react";
import { PlaylistFeed } from "../components/PlaylistFeed";
import { SongFeed } from "../components/SongFeed";
import { Search } from "../components/Search";
export class Home extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            content:"playlists",
            playlists:this.props.playlists
        }
        this.togglePlaylists = this.togglePlaylists.bind(this);
        this.toggleSongs = this.toggleSongs.bind(this);

        this.searchInput = React.createRef();
    }
    togglePlaylists(){
        this.setState({content:"playlists"});
    }
    toggleSongs(){
        this.setState({content:"songs"});
    }
    
    render() {
        let playlistHeadingSpan;
        let songHeadingSpan;

        if(this.state.content=="playlists"){
            playlistHeadingSpan = <span onClick={this.togglePlaylists} className="feed-heading current-feed">Playlists</span>
            songHeadingSpan = <span onClick={this.toggleSongs} className="feed-heading">Songs</span>
            
        }
        else{
            playlistHeadingSpan = <span onClick={this.togglePlaylists} className="feed-heading">Playlists</span>
            songHeadingSpan = <span onClick={this.toggleSongs} className="feed-heading current-feed">Songs</span>
        }
        return (
            <div id="content">
                <h1 id="home-heading">Home</h1>
                <Search handleSearch={this.props.handleSearch} feed={this.state.content}/>

                <div id="home-header">
                    <div id="feed-headings-container">
                        {playlistHeadingSpan}
                        {songHeadingSpan}
                    </div>
                </div>
                {
                    this.state.content == "playlists" ? <PlaylistFeed playlists={this.props.playlists} /> : <SongFeed songs={this.props.songs} />
                }
            </div>
        );
    }
}