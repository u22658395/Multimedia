import React from 'react';
import { PlaylistFeed } from '../components/PlaylistFeed';

export class Profile extends React.Component {
    // user
    constructor(props) {
        super(props)
        this.user = this.props.user;
    }
    render() {
        return (
            <div id="content">
                <aside id="profile-info" className="w3-sidebar w3-bar-block">
                    <div id="profile-image-container">
                        <img id="profile-image" src={`./assets/images/${this.user.image}`} alt="" />
                    </div>

                    <div id="details-heading">{this.user.username}<i id='profile-edit-button' className="fa-solid fa-pencil" ></i></div>
                    <div id="details-container">
                        <div id="name-container">

                            <span className='user-detail'><i className="fa-solid fa-user"></i>Name</span>
                            <div className='detail-value'>{this.user.name}</div>
                        </div>
                        <div id="phone-container">
                            <span className='user-detail'><i className="fa-solid fa-phone"></i>Phone</span>
                            <div className='detail-value'>{this.user.phone}</div>
                        </div>
                        <div id="email-container">
                            <span className='user-detail'><i className="fa-solid fa-envelope"></i>Email</span>
                            <div className='detail-value'>{this.user.email}</div>
                        </div>
                    </div>

                    <div id="friends-container">
                        <div className="counter-container" >
                            <div className='counter'>{this.user.playlistCount}</div>
                            <div className='counter-name'>Playlists</div>
                        </div>
                        <div className="counter-container">
                            <div className='counter'>{this.user.followersCount}</div>
                            <div className='counter-name'>Followers</div>
                        </div>
                        <div className="counter-container">
                            <div className='counter'>{this.user.followingCount}</div>
                            <div className='counter-name'>Following</div>
                        </div>
                    </div>


                </aside>
                <main id="main">
                    <div id='main-content-heading-container'>
                        <h1 className='content-heading'>Playlists</h1>
                        <div id='add-button-container'>
                            <span>Add playlist</span>
                            <span id='plus-icon-container'>
                                <i className='fa-solid fa-lg fa-plus '></i>
                            </span>
                        </div>
                    </div>
                    <PlaylistFeed playlists={this.user.playlists} />
                </main>
            </div>
        )
    }
}