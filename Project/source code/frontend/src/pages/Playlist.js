import React from 'react';
import { SongFeed } from '../components/SongFeed';

export class Playlist extends React.Component {
    constructor(props) {
        super(props)
        this.playlist = this.props.playlist;
    }
    render() {
        return (
            <div id="content">
                <aside id="profile-info" className="w3-sidebar w3-bar-block">
                    <div id="profile-image-container">
                        <img id="profile-image" src={this.playlist.image} alt="" />
                    </div>

                    <div id="details-heading">{this.playlist.name}</div>

                    <div id='edit-button-container'>
                        <span>edit</span>
                        <i id='playlist-edit-button' className="fa-solid fa-pencil" ></i>
                    </div>

                    <div id="comments-container">
                        <div id='comments-heading'>Comments<i id='profile-edit-button' className="fa-solid fa-plus" ></i></div>
                        <div id='comments'>
                            <div className='comment'>
                                <div className='comment-username'>username</div>
                                <div className='comment-body'>
                                    <span className='comment-text'>
                                        comment body comment body comment body comment body comment body comment body comment body comment body comment body comment body comment body comment body
                                    </span>
                                    <span className='comment-image-container'>
                                        <img className="comment-image" src='' />
                                    </span>
                                </div>
                            </div>
                            <div className='comment'>
                                <div className='comment-username'>username</div>
                                <div className='comment-body'>
                                    <span className='comment-text'>
                                        comment body comment body comment body comment body comment body comment body comment body comment body comment body comment body comment body comment body
                                    </span>
                                    <span className='comment-image-container'>
                                        <img className="comment-image" src='' />
                                    </span>
                                </div>
                            </div>
                            <div className='comment'>
                                <div className='comment-username'>username</div>
                                <div className='comment-body'>
                                    <span className='comment-text'>
                                        comment body comment body comment body comment body comment body comment body comment body comment body comment body comment body comment body comment body
                                    </span>
                                    <span className='comment-image-container'>
                                        <img className="comment-image" src='' />
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                </aside>
                <main id="main">
                    <div id='main-content-heading-container'>
                        <h1 className='content-heading'>songs</h1>
                        <div id='add-button-container'>
                            <span>Add song</span>
                            <span id='plus-icon-container'>
                                <i className='fa-solid fa-lg fa-plus '></i>
                            </span>
                        </div>
                    </div>
                    <SongFeed playlists={this.user.playlists} />
                </main>
            </div>
        )
    }
}