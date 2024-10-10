import React from 'react';
import { SongFeed } from '../components/SongFeed';
import { AddSong } from '../components/AddSong';
import { Overlay } from '../components/Overlay';

export class Playlist extends React.Component {
    constructor(props) {
        super(props)
        this.playlist = this.props.playlist;   
        
        this.state = {
            toggledOverlay: false
        }
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.closeOverlay = this.closeOverlay.bind(this);
        this.addSongForm = this.addSongForm.bind(this);
    }

    componentDidMount(){
        console.log(this.props.params.playlistId);
        
    }
    toggleOverlay() {
        this.setState({ toggledOverlay: !this.state.toggledOverlay });
    }
    closeOverlay() {
        this.setState({ toggledOverlay: false });
        // this.setState({ toggledEditOverlay: false });
    }
    addSongForm() {
        return <AddSong addSong={this.props.addSong} playlistId={this.playlist.id}/>
    }


    render() {
        let overlay;
        if (this.state.toggledOverlay) {
            overlay = <Overlay toggleOverlay={this.toggleOverlay} content={this.addSongForm} closeOverlay={this.closeOverlay} />
        }
        else {
            overlay = "";
        }
        return (
            <div id="content">
                <aside id="profile-info" className="w3-sidebar w3-bar-block">
                    <div id="profile-image-container">
                        <img id="profile-image" src={`./assets/images/${this.playlist.image}`} alt="" />
                    </div>

                    <div id="details-heading">{this.playlist.name}</div>

                    <div id='edit-button-container'>
                        <span>edit</span>
                        <i id='playlist-edit-button' className="fa-solid fa-pencil" ></i>
                    </div>

                    <div id="comments-container">
                        <div id='comments-heading'>Comments<i id='profile-edit-button' className="fa-solid fa-plus" ></i></div>
                        <div id='comments'>
                            {
                                this.playlist.comments.map(comment =>{

                                    return(
                                        < div key={comment.id} className='comment' >
                                            <div className='comment-username'>{comment.username}</div>
                                            <div className='comment-body'>
                                                <span className='comment-text'>
                                                    {comment.body}
                                                </span>
                                                <span className='comment-image-container'>
                                                    <img className="comment-image" src={`./assets/images/${comment.image}`} />
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                </aside>
                <main id="main">
                    <div id='main-content-heading-container'>
                        <h1 className='content-heading'>Songs</h1>
                        
                            <div id='add-button-container'>
                            <span onClick={this.toggleOverlay}>Add song</span>
                                <span id='plus-icon-container'>
                                    <i className='fa-solid fa-lg fa-plus '></i>
                                </span>
                            </div>
                    
                    </div>
                    <SongFeed songs={this.playlist.songs} />
                </main>
                {overlay}
            </div>
        )
    }
}

export function WithPlaylistProps() {
    return props => <Playlist {...props} params={useParams()} />
}