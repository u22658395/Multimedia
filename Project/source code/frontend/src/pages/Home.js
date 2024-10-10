import React from "react";
import { PlaylistFeed } from "../components/PlaylistFeed";
import { SongFeed } from "../components/SongFeed";
import { Search } from "../components/Search";
import { Navbar } from "../components/Navbar";
export class Home extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            content:"playlists",
        }
        this.togglePlaylists = this.togglePlaylists.bind(this);
        this.toggleSongs = this.toggleSongs.bind(this);
        this.fetchData = this.fetchData.bind(this);

        this.searchInput = React.createRef();
    }

    fetchData(dataType){
        if (dataType == "playlists"){
            fetch("/playlists")
                .then(res => {
                    this.setState({ playlists: res })
            })
        }
        else
        {
            fetch("/songs")
            .then(res=>{
                this.setState({songs:res})
            })
        }
    }

    componentDidMount(){
        console.log("Mount");
        this.fetchData("playlists")
        //works like a charm :)
    }

    componentDidUpdate(prevProps){

    }

    togglePlaylists(){
        if (this.state.content !="playlists"){
            this.setState({content:"playlists"});
            this.fetchData("playlists")
        }
    }

    toggleSongs(){
        if(this.state.content != "songs"){
            this.setState({content:"songs"});
            this.fetchData("songs")
        }
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
            <>
                <Navbar/> 
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
                    this.state.content == "playlists" ? <PlaylistFeed playlists={this.state.playlists} /> : <SongFeed songs={this.state.songs} />
                }
            </div>
            </>
        );
    }
}